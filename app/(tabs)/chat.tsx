import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useChatStore } from '@/store/chatStore';
import { ChatList } from '@/components/chat/ChatList';
import { ChatInput } from '@/components/chat/ChatInput';
import { colors } from '@/constants/colors';
import { spacing, fontSizes } from '@/constants/theme';
import { sendMessageToAI } from '../../utils/aiHelper';
import { Trash2, RotateCcw, Info, X } from 'lucide-react-native';
import { Stack } from 'expo-router';

export default function ChatScreen() {
  const { 
    sessions, 
    currentSessionId, 
    createSession, 
    addMessage, 
    isLoading, 
    setLoading, 
    setError,
    clearMessages
  } = useChatStore();
  
  const [welcomeShown, setWelcomeShown] = useState(false);
  const [showTips, setShowTips] = useState(false);

  // Get current session or create one if none exists
  useEffect(() => {
    if (sessions.length === 0 || !currentSessionId) {
      createSession();
    }
  }, [sessions, currentSessionId, createSession]);

  // Show welcome message
  useEffect(() => {
    if (currentSessionId && !welcomeShown) {
      const currentSession = sessions.find(s => s.id === currentSessionId);
      
      if (currentSession && currentSession.messages.length === 0) {
        addMessage({
          role: 'assistant',
          content: "Hello! I'm your Gender Equality in Digital Transformation assistant. I can help you with information, resources, and guidance on promoting gender equality in digital spaces. What would you like to know about today?"
        });
        setWelcomeShown(true);
      }
    }
  }, [currentSessionId, sessions, welcomeShown, addMessage]);

  const currentSession = sessions.find(s => s.id === currentSessionId);
  const messages = currentSession?.messages || [];

  const handleSendMessage = async (text: string, attachments: Array<{ type: string, data: string }> = []) => {
    // Add user message to the chat
    if (attachments.length > 0) {
      // Handle message with attachments
      const contentParts = [
        { type: 'text', text },
        ...attachments.map(attachment => {
          if (attachment.type === 'image') {
            return { type: 'image', image: attachment.data };
          }
          return { type: 'text', text: 'Attachment' };
        })
      ];
      
      addMessage({
        role: 'user',
        content: contentParts
      });
    } else {
      // Simple text message
      addMessage({
        role: 'user',
        content: text
      });
    }

    // Send to AI and get response
    setLoading(true);
    try {
      const aiResponse = await sendMessageToAI([
        ...messages,
        { 
          id: 'temp', 
          role: 'user', 
          content: attachments.length > 0 
            ? [{ type: 'text', text }, ...attachments.map(a => ({ type: a.type, [a.type]: a.data }))] 
            : text, 
          timestamp: Date.now() 
        }
      ]);
      
      addMessage({
        role: 'assistant',
        content: aiResponse
      });
    } catch (error) {
      console.error('Error getting AI response:', error);
      setError('Failed to get response. Please try again.');
      
      addMessage({
        role: 'assistant',
        content: "I'm sorry, I encountered an error processing your request. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    if (currentSessionId) {
      clearMessages(currentSessionId);
      setWelcomeShown(false);
    }
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: "AI Assistant",
          headerRight: () => (
            <View style={styles.headerButtons}>
              <TouchableOpacity 
                style={styles.headerButton} 
                onPress={() => setShowTips(true)}
              >
                <Info size={20} color={colors.primary} />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.headerButton} 
                onPress={handleClearChat}
              >
                <Trash2 size={20} color={colors.primary} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <SafeAreaView style={styles.container} edges={['bottom']}>
        {messages.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1573164713988-8665fc963095' }}
              style={styles.emptyImage}
              resizeMode="cover"
            />
            <Text style={styles.emptyTitle}>
              Gender Equality Assistant
            </Text>
            <Text style={styles.emptyDescription}>
              Ask me anything about gender equality in digital spaces, policies, best practices, or resources.
            </Text>
            
            <View style={styles.suggestionsContainer}>
              <Text style={styles.suggestionsTitle}>Try asking:</Text>
              
              {[
                "What are some strategies to promote gender equality in tech workplaces?",
                "How can I address unconscious bias in AI development?",
                "What resources exist for women entering tech careers?",
                "How can I make my digital products more inclusive?"
              ].map((suggestion, index) => (
                <TouchableOpacity 
                  key={index}
                  style={styles.suggestionButton}
                  onPress={() => handleSendMessage(suggestion)}
                >
                  <Text style={styles.suggestionText}>{suggestion}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : (
          <ChatList messages={messages} isLoading={isLoading} />
        )}
        
        <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
        
        {/* Tips Modal */}
        {showTips && (
          <View style={styles.tipsOverlay}>
            <View style={styles.tipsContainer}>
              <View style={styles.tipsHeader}>
                <Text style={styles.tipsTitle}>Tips for Better Conversations</Text>
                <TouchableOpacity onPress={() => setShowTips(false)}>
                  <X size={24} color={colors.text} />
                </TouchableOpacity>
              </View>
              
              <View style={styles.tipItem}>
                <Text style={styles.tipNumber}>1</Text>
                <Text style={styles.tipText}>Ask specific questions for more detailed responses</Text>
              </View>
              
              <View style={styles.tipItem}>
                <Text style={styles.tipNumber}>2</Text>
                <Text style={styles.tipText}>You can upload images for analysis or context</Text>
              </View>
              
              <View style={styles.tipItem}>
                <Text style={styles.tipNumber}>3</Text>
                <Text style={styles.tipText}>Request resources, tools, or practical examples</Text>
              </View>
              
              <View style={styles.tipItem}>
                <Text style={styles.tipNumber}>4</Text>
                <Text style={styles.tipText}>Ask for definitions, statistics, or case studies</Text>
              </View>
              
              <View style={styles.tipItem}>
                <Text style={styles.tipNumber}>5</Text>
                <Text style={styles.tipText}>The AI is continuously learning - your feedback helps improve it</Text>
              </View>
              
              <TouchableOpacity 
                style={styles.closeTipsButton}
                onPress={() => setShowTips(false)}
              >
                <Text style={styles.closeTipsButtonText}>Got it</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  headerButton: {
    padding: spacing.sm,
    marginLeft: spacing.sm,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  emptyImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: spacing.lg,
  },
  emptyTitle: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  emptyDescription: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: '80%',
    marginBottom: spacing.xl,
  },
  suggestionsContainer: {
    width: '100%',
    marginTop: spacing.md,
  },
  suggestionsTitle: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  suggestionButton: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  suggestionText: {
    fontSize: fontSizes.sm,
    color: colors.text,
  },
  tipsOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  tipsContainer: {
    width: '85%',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.lg,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  tipsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  tipsTitle: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    color: colors.text,
  },
  tipItem: {
    flexDirection: 'row',
    marginBottom: spacing.md,
    alignItems: 'flex-start',
  },
  tipNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    color: colors.white,
    textAlign: 'center',
    lineHeight: 24,
    marginRight: spacing.sm,
    fontWeight: 'bold',
    fontSize: fontSizes.sm,
  },
  tipText: {
    flex: 1,
    fontSize: fontSizes.md,
    color: colors.text,
    lineHeight: 24,
  },
  closeTipsButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: spacing.md,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  closeTipsButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
  },
});