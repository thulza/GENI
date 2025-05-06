import React, { useRef, useEffect, useState } from 'react';
import { 
  FlatList, 
  StyleSheet, 
  View, 
  ActivityIndicator, 
  Text, 
  TouchableOpacity,
  Animated
} from 'react-native';
import { Message } from '@/types/chat';
import { ChatBubble } from './ChatBubble';
import { colors } from '@/constants/colors';
import { spacing, fontSizes, borderRadius } from '@/constants/theme';
import { ArrowDown } from 'lucide-react-native';

interface ChatListProps {
  messages: Message[];
  isLoading?: boolean;
}

export const ChatList: React.FC<ChatListProps> = ({ 
  messages,
  isLoading = false
}) => {
  const flatListRef = useRef<FlatList>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [newMessageCount, setNewMessageCount] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, []);
  
  // Handle new messages
  useEffect(() => {
    if (messages.length > 0 && showScrollButton) {
      setNewMessageCount(prev => prev + 1);
      
      // Animate the button
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.7,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [messages.length]);

  const scrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
    setNewMessageCount(0);
  };

  const handleScroll = (event: any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20;
    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= 
      contentSize.height - paddingToBottom;
      
    setShowScrollButton(!isCloseToBottom);
    
    if (isCloseToBottom) {
      setNewMessageCount(0);
    }
  };

  // Group messages by date
  const groupedMessages: { [key: string]: Message[] } = {};
  messages.forEach(message => {
    const date = new Date(message.timestamp).toLocaleDateString();
    if (!groupedMessages[date]) {
      groupedMessages[date] = [];
    }
    groupedMessages[date].push(message);
  });

  // Convert to array for FlatList
  const sections = Object.keys(groupedMessages).map(date => ({
    date,
    data: groupedMessages[date]
  }));

  const renderDateSeparator = (date: string) => {
    const today = new Date().toLocaleDateString();
    const yesterday = new Date(Date.now() - 86400000).toLocaleDateString();
    
    let displayDate = date;
    if (date === today) {
      displayDate = 'Today';
    } else if (date === yesterday) {
      displayDate = 'Yesterday';
    }
    
    return (
      <View style={styles.dateSeparator}>
        <Text style={styles.dateSeparatorText}>{displayDate}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={sections}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <View>
            {renderDateSeparator(item.date)}
            {item.data.map(message => (
              <ChatBubble key={message.id} message={message} />
            ))}
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => {
          if (!showScrollButton) {
            flatListRef.current?.scrollToEnd({ animated: true });
          }
        }}
        onScroll={handleScroll}
        scrollEventThrottle={400}
      />
      
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={colors.primary} />
          <Text style={styles.loadingText}>Thinking...</Text>
        </View>
      )}
      
      {showScrollButton && (
        <Animated.View 
          style={[
            styles.scrollButtonContainer,
            { opacity: fadeAnim }
          ]}
        >
          <TouchableOpacity
            style={styles.scrollButton}
            onPress={scrollToBottom}
          >
            <ArrowDown size={20} color={colors.white} />
            {newMessageCount > 0 && (
              <View style={styles.newMessageBadge}>
                <Text style={styles.newMessageCount}>
                  {newMessageCount > 9 ? '9+' : newMessageCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContent: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  loadingContainer: {
    position: 'absolute',
    bottom: spacing.md,
    left: spacing.md,
    backgroundColor: colors.white,
    padding: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingText: {
    marginLeft: spacing.sm,
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
  },
  scrollButtonContainer: {
    position: 'absolute',
    bottom: spacing.xl,
    right: spacing.md,
    zIndex: 10,
  },
  scrollButton: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  newMessageBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: colors.error,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newMessageCount: {
    color: colors.white,
    fontSize: fontSizes.xs,
    fontWeight: 'bold',
  },
  dateSeparator: {
    alignItems: 'center',
    marginVertical: spacing.md,
  },
  dateSeparatorText: {
    backgroundColor: colors.card,
    color: colors.textSecondary,
    fontSize: fontSizes.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
  },
});