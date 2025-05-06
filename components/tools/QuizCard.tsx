import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowRight, CheckCircle } from 'lucide-react-native';
import { Quiz } from '@/types/resource';
import { Card } from '@/components/ui/Card';
import { colors } from '@/constants/colors';
import { borderRadius, fontSizes, spacing } from '@/constants/theme';

interface QuizCardProps {
  quiz: Quiz;
  isCompleted: boolean;
  onPress: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  quiz,
  isCompleted,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Card style={styles.card}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{quiz.title}</Text>
            {isCompleted && (
              <CheckCircle size={20} color={colors.success} />
            )}
          </View>
          
          <Text style={styles.description} numberOfLines={2}>
            {quiz.description}
          </Text>
          
          <View style={styles.footer}>
            <Text style={styles.questionsCount}>
              {quiz.questions.length} questions
            </Text>
            
            <View style={styles.startButton}>
              <Text style={styles.startText}>
                {isCompleted ? 'Retake' : 'Start'}
              </Text>
              <ArrowRight size={16} color={colors.primary} />
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  content: {
    padding: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
    marginRight: spacing.sm,
  },
  description: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionsCount: {
    fontSize: fontSizes.sm,
    color: colors.textLight,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  startText: {
    fontSize: fontSizes.sm,
    color: colors.primary,
    fontWeight: '600',
    marginRight: spacing.xs,
  },
});