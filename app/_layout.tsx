import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Platform } from "react-native";
import { ErrorBoundary } from "./error-boundary";
import { useUserStore, initializeUserProfile } from "@/store/userStore";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  const { isOnboarded } = useUserStore();

  useEffect(() => {
    if (error) {
      console.error(error);
      throw error;
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      initializeUserProfile();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ErrorBoundary>
      <RootLayoutNav />
    </ErrorBoundary>
  );
}

function RootLayoutNav() {
  const { isOnboarded } = useUserStore();
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!isOnboarded ? (
        <Stack.Screen name="onboarding" options={{ animation: 'fade' }} />
      ) : (
        <>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen 
            name="quiz/[id]" 
            options={{ 
              presentation: 'card',
              headerShown: true,
              title: 'Quiz',
            }} 
          />
          <Stack.Screen 
            name="assessment/[id]" 
            options={{ 
              presentation: 'card',
              headerShown: true,
              title: 'Assessment',
            }} 
          />
        </>
      )}
    </Stack>
  );
}