import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChatSession, Message } from '@/types/chat';

interface ChatState {
  sessions: ChatSession[];
  currentSessionId: string | null;
  isLoading: boolean;
  error: string | null;
  messageHistory: { [sessionId: string]: number }; // Track how many messages user has seen
  
  // Actions
  createSession: () => string;
  setCurrentSession: (sessionId: string) => void;
  renameSession: (sessionId: string, title: string) => void;
  deleteSession: (sessionId: string) => void;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  clearMessages: (sessionId: string) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  updateMessageHistory: (sessionId: string, count: number) => void;
  markMessageAsRead: (messageId: string) => void;
  likeMessage: (messageId: string) => void;
  dislikeMessage: (messageId: string) => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      sessions: [],
      currentSessionId: null,
      isLoading: false,
      error: null,
      messageHistory: {},

      createSession: () => {
        const newSession: ChatSession = {
          id: Date.now().toString(),
          title: 'New Conversation',
          messages: [],
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };

        set((state) => ({
          sessions: [newSession, ...state.sessions],
          currentSessionId: newSession.id,
        }));

        return newSession.id;
      },

      setCurrentSession: (sessionId) => {
        set({ currentSessionId: sessionId });
      },

      renameSession: (sessionId, title) => {
        set((state) => ({
          sessions: state.sessions.map((session) =>
            session.id === sessionId
              ? { ...session, title, updatedAt: Date.now() }
              : session
          ),
        }));
      },

      deleteSession: (sessionId) => {
        set((state) => {
          const newSessions = state.sessions.filter(
            (session) => session.id !== sessionId
          );
          
          // If we're deleting the current session, set a new current session
          let newCurrentSessionId = state.currentSessionId;
          if (state.currentSessionId === sessionId) {
            newCurrentSessionId = newSessions.length > 0 ? newSessions[0].id : null;
          }
          
          // Remove from message history
          const newMessageHistory = { ...state.messageHistory };
          delete newMessageHistory[sessionId];
          
          return {
            sessions: newSessions,
            currentSessionId: newCurrentSessionId,
            messageHistory: newMessageHistory,
          };
        });
      },

      addMessage: (message) => {
        const { currentSessionId } = get();
        
        if (!currentSessionId) {
          const newSessionId = get().createSession();
          set({ currentSessionId: newSessionId });
        }
        
        const newMessage: Message = {
          id: Date.now().toString(),
          ...message,
          timestamp: Date.now(),
        };

        set((state) => {
          // Find the current session
          const currentSession = state.sessions.find(
            (session) => session.id === state.currentSessionId
          );
          
          // If this is the first message, update the session title based on user's message
          let sessionTitle = currentSession?.title || 'New Conversation';
          if (
            currentSession && 
            currentSession.messages.length === 0 && 
            message.role === 'user' && 
            typeof message.content === 'string'
          ) {
            // Limit title length
            const userMessage = message.content.trim();
            sessionTitle = userMessage.length > 30 
              ? `${userMessage.substring(0, 30)}...` 
              : userMessage;
          }
          
          return {
            sessions: state.sessions.map((session) =>
              session.id === state.currentSessionId
                ? {
                    ...session,
                    title: sessionTitle,
                    messages: [...session.messages, newMessage],
                    updatedAt: Date.now(),
                  }
                : session
            ),
          };
        });
      },

      clearMessages: (sessionId) => {
        set((state) => ({
          sessions: state.sessions.map((session) =>
            session.id === sessionId
              ? { ...session, messages: [], updatedAt: Date.now() }
              : session
          ),
          messageHistory: {
            ...state.messageHistory,
            [sessionId]: 0
          }
        }));
      },

      setLoading: (isLoading) => {
        set({ isLoading });
      },

      setError: (error) => {
        set({ error });
      },
      
      updateMessageHistory: (sessionId, count) => {
        set((state) => ({
          messageHistory: {
            ...state.messageHistory,
            [sessionId]: count
          }
        }));
      },
      
      markMessageAsRead: (messageId) => {
        // Implementation for marking messages as read
        // This could update a 'read' status on messages if needed
      },
      
      likeMessage: (messageId) => {
        // Implementation for liking a message
        set((state) => {
          const updatedSessions = state.sessions.map(session => {
            const updatedMessages = session.messages.map(message => {
              if (message.id === messageId) {
                return {
                  ...message,
                  liked: true,
                  disliked: false
                };
              }
              return message;
            });
            
            return {
              ...session,
              messages: updatedMessages
            };
          });
          
          return { sessions: updatedSessions };
        });
      },
      
      dislikeMessage: (messageId) => {
        // Implementation for disliking a message
        set((state) => {
          const updatedSessions = state.sessions.map(session => {
            const updatedMessages = session.messages.map(message => {
              if (message.id === messageId) {
                return {
                  ...message,
                  liked: false,
                  disliked: true
                };
              }
              return message;
            });
            
            return {
              ...session,
              messages: updatedMessages
            };
          });
          
          return { sessions: updatedSessions };
        });
      },
    }),
    {
      name: 'chat-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);