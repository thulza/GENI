import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile, UserSettings } from '@/types/user';

interface UserState {
  profile: UserProfile | null;
  isOnboarded: boolean;
  
  // Actions
  setProfile: (profile: UserProfile) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
  addInterest: (interest: string) => void;
  removeInterest: (interest: string) => void;
  saveResource: (resourceId: string) => void;
  unsaveResource: (resourceId: string) => void;
  completeQuiz: (quizId: string) => void;
  setOnboarded: (isOnboarded: boolean) => void;
  logout: () => void;
}

const defaultSettings: UserSettings = {
  theme: 'light',
  notifications: true,
  language: 'en',
  fontSize: 'medium',
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profile: null,
      isOnboarded: false,
      
      setProfile: (profile) => {
        set({ profile });
      },
      
      updateProfile: (updates) => {
        set((state) => ({
          profile: state.profile ? { ...state.profile, ...updates } : null,
        }));
      },
      
      updateSettings: (settings) => {
        set((state) => ({
          profile: state.profile
            ? {
                ...state.profile,
                settings: { ...state.profile.settings, ...settings },
              }
            : null,
        }));
      },
      
      addInterest: (interest) => {
        set((state) => ({
          profile: state.profile
            ? {
                ...state.profile,
                interests: [...state.profile.interests, interest],
              }
            : null,
        }));
      },
      
      removeInterest: (interest) => {
        set((state) => ({
          profile: state.profile
            ? {
                ...state.profile,
                interests: state.profile.interests.filter((i) => i !== interest),
              }
            : null,
        }));
      },
      
      saveResource: (resourceId) => {
        set((state) => ({
          profile: state.profile
            ? {
                ...state.profile,
                savedResources: [...state.profile.savedResources, resourceId],
              }
            : null,
        }));
      },
      
      unsaveResource: (resourceId) => {
        set((state) => ({
          profile: state.profile
            ? {
                ...state.profile,
                savedResources: state.profile.savedResources.filter(
                  (id) => id !== resourceId
                ),
              }
            : null,
        }));
      },
      
      completeQuiz: (quizId) => {
        set((state) => ({
          profile: state.profile
            ? {
                ...state.profile,
                completedQuizzes: [...state.profile.completedQuizzes, quizId],
              }
            : null,
        }));
      },
      
      setOnboarded: (isOnboarded) => {
        set({ isOnboarded });
      },
      
      logout: () => {
        set({ profile: null });
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

// Initialize user profile if it doesn't exist
export const initializeUserProfile = () => {
  const { profile, setProfile } = useUserStore.getState();
  
  if (!profile) {
    setProfile({
      id: Date.now().toString(),
      name: 'Guest User',
      interests: [],
      completedQuizzes: [],
      savedResources: [],
      assessmentResults: [],
      settings: defaultSettings,
    });
  }
};