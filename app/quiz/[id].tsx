import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react-native';
import { useResourceStore } from '@/store/resourceStore';
import { useUserStore } from '@/store/userStore';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { colors } from '@/constants/colors';
import { borderRadius, fontSizes, spacing } from '@/constants/theme';

export default function QuizScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { quizzes, saveQuizResult } = useResourceStore();
  const { completeQuiz } = useUserStore();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const quiz = quizzes.find(q => q.id === id);
  
  useEffect(() => {
    if (!quiz) {
      router.back();
    }
  }, [quiz, router]);
  
  if (!quiz) return null;
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return;
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    
    if (optionIndex === currentQuestion.correctAnswer) {
      setCorrectAnswers(prev => prev + 1);
    }
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Quiz completed
      const score = (correctAnswers / quiz.questions.length) * 100;
      saveQuizResult(quiz.id, score);
      completeQuiz(quiz.id);
      setQuizCompleted(true);
    }
  };
  
  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectAnswers(0);
    setQuizCompleted(false);
  };
  
  const handleFinish = () => {
    router.back();
  };
  
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen options={{ title: quiz.title }} />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {!quizCompleted ? (
          <>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }
                  ]} 
                />
              </View>
              <Text style={styles.progressText}>
                {currentQuestionIndex + 1} of {quiz.questions.length}
              </Text>
            </View>
            
            <Text style={styles.question}>{currentQuestion.question}</Text>
            
            <View style={styles.optionsContainer}>
              {currentQuestion.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionCard,
                    selectedOption === index && styles.selectedOption,
                    isAnswered && index === currentQuestion.correctAnswer && styles.correctOption,
                    isAnswered && selectedOption === index && index !== currentQuestion.correctAnswer && styles.incorrectOption,
                  ]}
                  onPress={() => handleSelectOption(index)}
                  disabled={isAnswered}
                >
                  <Text 
                    style={[
                      styles.optionText,
                      selectedOption === index && styles.selectedOptionText,
                      isAnswered && index === currentQuestion.correctAnswer && styles.correctOptionText,
                      isAnswered && selectedOption === index && index !== currentQuestion.correctAnswer && styles.incorrectOptionText,
                    ]}
                  >
                    {option}
                  </Text>
                  
                  {isAnswered && index === currentQuestion.correctAnswer && (
                    <CheckCircle size={20} color={colors.success} style={styles.optionIcon} />
                  )}
                  
                  {isAnswered && selectedOption === index && index !== currentQuestion.correctAnswer && (
                    <XCircle size={20} color={colors.error} style={styles.optionIcon} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
            
            {isAnswered && (
              <Card style={styles.explanationCard}>
                <Text style={styles.explanationTitle}>
                  {selectedOption === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                </Text>
                <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
              </Card>
            )}
            
            <View style={styles.buttonContainer}>
              <Button
                title={currentQuestionIndex < quiz.questions.length - 1 ? "Next Question" : "See Results"}
                onPress={handleNext}
                disabled={!isAnswered}
                rightIcon={<ArrowRight size={18} color={colors.white} />}
              />
            </View>
          </>
        ) : (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsTitle}>Quiz Completed!</Text>
            
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>
                {correctAnswers} / {quiz.questions.length}
              </Text>
              <Text style={styles.scorePercentage}>
                {Math.round((correctAnswers / quiz.questions.length) * 100)}%
              </Text>
            </View>
            
            <Text style={styles.resultsFeedback}>
              {correctAnswers === quiz.questions.length
                ? "Perfect score! You're an expert on this topic."
                : correctAnswers >= quiz.questions.length * 0.7
                ? "Great job! You have a solid understanding of this topic."
                : correctAnswers >= quiz.questions.length * 0.5
                ? "Good effort! You're on the right track, but there's room to learn more."
                : "Keep learning! This topic has more depth to explore."}
            </Text>
            
            <View style={styles.resultsButtonContainer}>
              <Button
                title="Retake Quiz"
                variant="outline"
                onPress={handleRetake}
                style={styles.retakeButton}
              />
              <Button
                title="Finish"
                onPress={handleFinish}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.md,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    marginRight: spacing.md,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  progressText: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
  },
  question: {
    fontSize: fontSizes.xl,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.lg,
  },
  optionsContainer: {
    marginBottom: spacing.lg,
  },
  optionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  selectedOption: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  correctOption: {
    borderColor: colors.success,
    backgroundColor: 'rgba(75, 181, 67, 0.1)',
  },
  incorrectOption: {
    borderColor: colors.error,
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
  },
  optionText: {
    flex: 1,
    fontSize: fontSizes.md,
    color: colors.text,
  },
  selectedOptionText: {
    color: colors.primary,
    fontWeight: '500',
  },
  correctOptionText: {
    color: colors.success,
    fontWeight: '500',
  },
  incorrectOptionText: {
    color: colors.error,
    fontWeight: '500',
  },
  optionIcon: {
    marginLeft: spacing.sm,
  },
  explanationCard: {
    marginBottom: spacing.lg,
    padding: spacing.md,
  },
  explanationTitle: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
    marginBottom: spacing.sm,
    color: colors.text,
  },
  explanationText: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
  },
  buttonContainer: {
    marginTop: spacing.md,
  },
  resultsContainer: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  resultsTitle: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.lg,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  scoreText: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.primary,
  },
  scorePercentage: {
    fontSize: fontSizes.xl,
    color: colors.textSecondary,
  },
  resultsFeedback: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  resultsButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  retakeButton: {
    marginRight: spacing.md,
  },
});