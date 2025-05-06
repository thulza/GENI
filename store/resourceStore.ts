import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Resource, Quiz, Assessment } from '@/types/resource';
import { resources, quizzes, assessments } from '@/mocks/resources';

interface ResourceState {
  resources: Resource[];
  quizzes: Quiz[];
  assessments: Assessment[];
  bookmarks: string[];
  quizResults: { [quizId: string]: { score: number; date: number } };
  assessmentResults: { [assessmentId: string]: { score: number; date: number; areas: { [key: string]: number } } };
  
  // Actions
  addBookmark: (resourceId: string) => void;
  removeBookmark: (resourceId: string) => void;
  saveQuizResult: (quizId: string, score: number) => void;
  saveAssessmentResult: (assessmentId: string, score: number, areas: { [key: string]: number }) => void;
  getBookmarkedResources: () => Resource[];
}

export const useResourceStore = create<ResourceState>()(
  persist(
    (set, get) => ({
      resources,
      quizzes,
      assessments,
      bookmarks: [],
      quizResults: {},
      assessmentResults: {},
      
      addBookmark: (resourceId) => {
        set((state) => ({
          bookmarks: [...state.bookmarks, resourceId],
        }));
      },
      
      removeBookmark: (resourceId) => {
        set((state) => ({
          bookmarks: state.bookmarks.filter((id) => id !== resourceId),
        }));
      },
      
      saveQuizResult: (quizId, score) => {
        set((state) => ({
          quizResults: {
            ...state.quizResults,
            [quizId]: { score, date: Date.now() },
          },
        }));
      },
      
      saveAssessmentResult: (assessmentId, score, areas) => {
        set((state) => ({
          assessmentResults: {
            ...state.assessmentResults,
            [assessmentId]: { score, date: Date.now(), areas },
          },
        }));
      },
      
      getBookmarkedResources: () => {
        const { resources, bookmarks } = get();
        return resources.filter((resource) => bookmarks.includes(resource.id));
      },
    }),
    {
      name: 'resource-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);