import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRight, BarChart } from 'lucide-react-native';
import { useResourceStore } from '@/store/resourceStore';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { colors } from '@/constants/colors';
import { borderRadius, fontSizes, spacing } from '@/constants/theme';

export default function AssessmentScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { assessments, saveAssessmentResult } = useResourceStore();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);
  const [results, setResults] = useState<{
    score: number;
    areas: { [key: string]: number };
  } | null>(null);
  
  const assessment = assessments.find(a => a.id === id);
  
  useEffect(() => {
    if (!assessment) {
      router.back();
    }
  }, [assessment, router]);
  
  if (!assessment) return null;
  
  const currentQuestion = assessment.questions[currentQuestionIndex];
  
  const handleSelectOption = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };
  
  const handleNext = () => {
    if (selectedOption === null) return;
    
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < assessment.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      // Assessment completed
      calculateResults(newAnswers);
    }
  };
  
  const calculateResults = (finalAnswers: number[]) => {
    // Calculate total score
    let totalScore = 0;
    const areas: { [key: string]: number } = {
      policy: 0,
      representation: 0,
      compensation: 0,
      recruitment: 0,
      worklife: 0
    };
    
    // Map questions to areas (simplified example)
    const questionAreas = [
      'policy',
      'representation',
      'compensation',
      'recruitment',
      'worklife'
    ];
    
    finalAnswers.forEach((answer, index) => {
      const weight = assessment.questions[index].weights[answer];
      totalScore += weight;
      
      // Add to area score if applicable
      if (index < questionAreas.length) {
        areas[questionAreas[index]] = weight;
      }
    });
    
    // Normalize score to 0-100
    const maxPossibleScore = assessment.questions.length * 3; // Assuming max weight is 3
    const normalizedScore = (totalScore / maxPossibleScore) * 100;
    
    const finalResults = {
      score: Math.round(normalizedScore),
      areas
    };
    
    setResults(finalResults);
    saveAssessmentResult(assessment.id, finalResults.score, finalResults.areas);
    setAssessmentCompleted(true);
  };
  
  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setAssessmentCompleted(false);
    setResults(null);
  };
  
  const handleFinish = () => {
    router.back();
  };
  
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen options={{ title: assessment.title }} />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {!assessmentCompleted ? (
          <>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { width: `${((currentQuestionIndex + 1) / assessment.questions.length) * 100}%` }
                  ]} 
                />
              </View>
              <Text style={styles.progressText}>
                {currentQuestionIndex + 1} of {assessment.questions.length}
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
                  ]}
                  onPress={() => handleSelectOption(index)}
                >
                  <Text 
                    style={[
                      styles.optionText,
                      selectedOption === index && styles.selectedOptionText,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            
            <View style={styles.buttonContainer}>
              <Button
                title={currentQuestionIndex < assessment.questions.length - 1 ? "Next Question" : "See Results"}
                onPress={handleNext}
                disabled={selectedOption === null}
                rightIcon={<ArrowRight size={18} color={colors.white} />}
              />
            </View>
          </>
        ) : (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsTitle}>Assessment Complete</Text>
            
            {results && (
              <>
                <Card style={styles.scoreCard}>
                  <Text style={styles.scoreLabel}>Overall Score</Text>
                  <Text style={styles.scoreValue}>{results.score}%</Text>
                  <Text style={styles.scoreDescription}>
                    {results.score >= 80
                      ? "Excellent! Your organization demonstrates strong commitment to gender equality."
                      : results.score >= 60
                      ? "Good progress. Your organization has solid foundations but can still improve."
                      : results.score >= 40
                      ? "Developing. Your organization has started addressing gender equality but needs more work."
                      : "Beginning stage. Your organization has significant opportunities to improve gender equality."}
                  </Text>
                </Card>
                
                <Text style={styles.areasTitle}>Areas Breakdown</Text>
                
                <View style={styles.areasContainer}>
                  {Object.entries(results.areas).map(([area, score]) => (
                    <View key={area} style={styles.areaItem}>
                      <View style={styles.areaLabelContainer}>
                        <Text style={styles.areaLabel}>
                          {area.charAt(0).toUpperCase() + area.slice(1)}
                        </Text>
                        <Text style={styles.areaScore}>
                          {Math.round((score / 3) * 100)}%
                        </Text>
                      </View>
                      <View style={styles.areaBar}>
                        <View 
                          style={[
                            styles.areaBarFill, 
                            { width: `${(score / 3) * 100}%` }
                          ]} 
                        />
                      </View>
                    </View>
                  ))}
                </View>
                
                <Card style={styles.recommendationsCard}>
                  <View style={styles.recommendationsHeader}>
                    <BarChart size={20} color={colors.secondary} />
                    <Text style={styles.recommendationsTitle}>Recommendations</Text>
                  </View>
                  <Text style={styles.recommendationsText}>
                    Based on your assessment, we recommend focusing on:
                    {'\n\n'}
                    {Object.entries(results.areas)
                      .sort(([, a], [, b]) => a - b)
                      .slice(0, 2)
                      .map(([area]) => {
                        switch (area) {
                          case 'policy':
                            return "• Developing and implementing formal gender equality policies";
                          case 'representation':
                            return "• Improving gender balance in technical and leadership roles";
                          case 'compensation':
                            return "• Analyzing and addressing gender pay gaps";
                          case 'recruitment':
                            return "• Reducing bias in recruitment and promotion processes";
                          case 'worklife':
                            return "• Enhancing flexible work arrangements for all employees";
                          default:
                            return "";
                        }
                      })
                      .join('\n\n')}
                  </Text>
                </Card>
              </>
            )}
            
            <View style={styles.resultsButtonContainer}>
              <Button
                title="Retake Assessment"
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
    backgroundColor: colors.secondary,
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
    padding: spacing.md,
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  selectedOption: {
    borderColor: colors.secondary,
    backgroundColor: 'rgba(78, 205, 196, 0.1)',
  },
  optionText: {
    fontSize: fontSizes.md,
    color: colors.text,
  },
  selectedOptionText: {
    color: colors.secondary,
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: spacing.md,
  },
  resultsContainer: {
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  resultsTitle: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.lg,
  },
  scoreCard: {
    width: '100%',
    alignItems: 'center',
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  scoreLabel: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  scoreValue: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: spacing.sm,
  },
  scoreDescription: {
    fontSize: fontSizes.md,
    color: colors.text,
    textAlign: 'center',
  },
  areasTitle: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
    color: colors.text,
    alignSelf: 'flex-start',
    marginBottom: spacing.md,
  },
  areasContainer: {
    width: '100%',
    marginBottom: spacing.lg,
  },
  areaItem: {
    marginBottom: spacing.md,
  },
  areaLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  areaLabel: {
    fontSize: fontSizes.md,
    color: colors.text,
  },
  areaScore: {
    fontSize: fontSizes.md,
    fontWeight: '600',
    color: colors.secondary,
  },
  areaBar: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  areaBarFill: {
    height: '100%',
    backgroundColor: colors.secondary,
    borderRadius: 4,
  },
  recommendationsCard: {
    width: '100%',
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  recommendationsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  recommendationsTitle: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
    color: colors.text,
    marginLeft: spacing.sm,
  },
  recommendationsText: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  resultsButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: spacing.md,
  },
  retakeButton: {
    marginRight: spacing.md,
  },
});