import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { colors } from '@/constants/colors';
import { fontSizes, spacing } from '@/constants/theme';
import { useUserStore } from '@/store/userStore';

const slides = [
  {
    id: '1',
    title: 'Welcome to Gender Equality in Digital Spaces',
    description: 'Your AI companion for promoting gender equality in the digital world.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
  },
  {
    id: '2',
    title: 'Learn & Grow',
    description: 'Access resources, stories, and tools to understand and advocate for gender equality in tech.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    id: '3',
    title: 'Ask Anything',
    description: 'Chat with our AI assistant about gender equality topics, policies, and best practices.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
  },
];

export const OnboardingScreen: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const { setOnboarded } = useUserStore();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      completeOnboarding();
    }
  };

  const handleSkip = () => {
    completeOnboarding();
  };

  const completeOnboarding = () => {
    setOnboarded(true);
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.slideContainer}>
        <Image
          source={{ uri: slides[currentSlide].image }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{slides[currentSlide].title}</Text>
          <Text style={styles.description}>{slides[currentSlide].description}</Text>
        </View>

        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentSlide && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          onPress={handleNext}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  skipContainer: {
    position: 'absolute',
    top: 50,
    right: spacing.md,
    zIndex: 10,
  },
  skipText: {
    fontSize: fontSizes.md,
    color: colors.primary,
    fontWeight: '600',
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 20,
    marginBottom: spacing.xl,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  description: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: spacing.xl,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.border,
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: colors.primary,
    width: 20,
  },
  buttonContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  button: {
    width: '100%',
  },
});