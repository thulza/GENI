import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useResourceStore } from '@/store/resourceStore';
import { useUserStore } from '@/store/userStore';
import { QuizCard } from '@/components/tools/QuizCard';
import { AssessmentCard } from '@/components/tools/AssessmentCard';
import { colors } from '@/constants/colors';
import { fontSizes, spacing } from '@/constants/theme';

export default function ToolsScreen() {
  const router = useRouter();
  const { quizzes, assessments, quizResults, assessmentResults } = useResourceStore();
  const { profile } = useUserStore();
  
  const completedQuizzes = profile?.completedQuizzes || [];

  const handleQuizPress = (quizId: string) => {
    router.push(`/quiz/${quizId}`);
  };

  const handleAssessmentPress = (assessmentId: string) => {
    router.push(`/assessment/${assessmentId}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Knowledge Quizzes</Text>
          <Text style={styles.sectionDescription}>
            Test your knowledge about gender equality in digital spaces
          </Text>
          
          {quizzes.map(quiz => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              isCompleted={completedQuizzes.includes(quiz.id)}
              onPress={() => handleQuizPress(quiz.id)}
            />
          ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Organizational Assessments</Text>
          <Text style={styles.sectionDescription}>
            Evaluate your organization's approach to gender equality
          </Text>
          
          {assessments.map(assessment => (
            <AssessmentCard
              key={assessment.id}
              assessment={assessment}
              hasResults={!!assessmentResults[assessment.id]}
              onPress={() => handleAssessmentPress(assessment.id)}
            />
          ))}
        </View>
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
  section: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  sectionDescription: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
});