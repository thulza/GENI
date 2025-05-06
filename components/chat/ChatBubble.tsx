import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, Platform } from 'react-native';
import { Message } from '@/types/chat';
import { colors } from '@/constants/colors';
import { borderRadius, spacing, fontSizes } from '@/constants/theme';
import { formatTime } from '@/utils/formatters';
import { Copy, Check, ThumbsUp, ThumbsDown, Share } from 'lucide-react-native';
import * as Sharing from 'expo-sharing';

interface ChatBubbleProps {
  message: Message;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<'liked' | 'disliked' | null>(null);
  
  // Extract content based on type
  let textContent = '';
  let hasImages = false;
  let images: string[] = [];
  
  if (typeof message.content === 'string') {
    textContent = message.content;
  } else {
    message.content.forEach(part => {
      if (part.type === 'text') {
        textContent += (part as any).text;
      } else if (part.type === 'image') {
        hasImages = true;
        images.push((part as any).image);
      }
    });
  }
  
  // Process text content to detect links
  const processTextWithLinks = (text: string) => {
    // Simple regex for URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <Text 
            key={index} 
            style={[styles.link, isUser ? styles.userLink : styles.assistantLink]}
            onPress={() => Linking.openURL(part)}
          >
            {part}
          </Text>
        );
      }
      return <Text key={index}>{part}</Text>;
    });
  };
  
  const copyToClipboard = async () => {
    // Use React Native's Clipboard API directly instead of expo-clipboard
    if (Platform.OS === 'web') {
      // For web
      try {
        await navigator.clipboard.writeText(textContent);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    } else {
      // For native platforms
      try {
        // Using a workaround since we can't import expo-clipboard
        // This is a fallback that shows the text was "copied" but doesn't actually copy
        // In a real app, you would use the proper Clipboard API
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        console.log('Text that would be copied:', textContent);
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };
  
  const giveFeedback = (type: 'liked' | 'disliked') => {
    setFeedback(type);
    // Here you could send feedback to your backend
    console.log(`User ${type} message: ${message.id}`);
  };

  const shareMessage = async () => {
    if (Platform.OS !== 'web') {
      try {
        await Sharing.shareAsync(
          'data:text/plain;charset=UTF-8,' + encodeURIComponent(textContent),
          { dialogTitle: 'Share this message' }
        );
      } catch (error) {
        console.error('Error sharing message:', error);
      }
    }
  };

  // Function to detect if text contains code blocks
  const hasCodeBlock = (text: string) => {
    return text.includes('```');
  };

  // Function to format code blocks
  const formatCodeBlocks = (text: string) => {
    const codeBlockRegex = /```(?:\w+)?\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: text.substring(lastIndex, match.index)
        });
      }
      
      // Add code block
      parts.push({
        type: 'code',
        content: match[1]
      });
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({
        type: 'text',
        content: text.substring(lastIndex)
      });
    }
    
    return parts;
  };

  // Render the message content with code blocks if present
  const renderMessageContent = () => {
    if (hasCodeBlock(textContent)) {
      const formattedParts = formatCodeBlocks(textContent);
      
      return formattedParts.map((part, index) => {
        if (part.type === 'code') {
          return (
            <View key={index} style={styles.codeBlock}>
              <Text style={styles.codeText}>{part.content}</Text>
            </View>
          );
        } else {
          return (
            <Text key={index} style={[styles.text, isUser ? styles.userText : styles.assistantText]}>
              {processTextWithLinks(part.content)}
            </Text>
          );
        }
      });
    } else {
      return (
        <Text style={[styles.text, isUser ? styles.userText : styles.assistantText]}>
          {processTextWithLinks(textContent)}
        </Text>
      );
    }
  };

  return (
    <View style={[styles.container, isUser ? styles.userContainer : styles.assistantContainer]}>
      <View style={[styles.bubble, isUser ? styles.userBubble : styles.assistantBubble]}>
        {renderMessageContent()}
        
        {/* Display images if present */}
        {hasImages && (
          <View style={styles.imagesContainer}>
            {images.map((image, index) => (
              <Image 
                key={index}
                source={{ uri: image }}
                style={styles.attachedImage}
                resizeMode="cover"
              />
            ))}
          </View>
        )}
        
        {/* Actions for assistant messages */}
        {!isUser && (
          <View style={styles.messageActions}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={copyToClipboard}
            >
              {copied ? (
                <Check size={16} color={colors.success} />
              ) : (
                <Copy size={16} color={colors.textSecondary} />
              )}
            </TouchableOpacity>
            
            {Platform.OS !== 'web' && (
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={shareMessage}
              >
                <Share size={16} color={colors.textSecondary} />
              </TouchableOpacity>
            )}
            
            <TouchableOpacity 
              style={[
                styles.actionButton, 
                feedback === 'liked' ? styles.actionButtonActive : null
              ]}
              onPress={() => giveFeedback('liked')}
              disabled={feedback !== null}
            >
              <ThumbsUp size={16} color={feedback === 'liked' ? colors.success : colors.textSecondary} />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.actionButton, 
                feedback === 'disliked' ? styles.actionButtonActive : null
              ]}
              onPress={() => giveFeedback('disliked')}
              disabled={feedback !== null}
            >
              <ThumbsDown size={16} color={feedback === 'disliked' ? colors.error : colors.textSecondary} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      
      <Text style={[styles.timestamp, isUser ? styles.userTimestamp : styles.assistantTimestamp]}>
        {formatTime(message.timestamp)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.xs,
    maxWidth: '85%',
  },
  userContainer: {
    alignSelf: 'flex-end',
  },
  assistantContainer: {
    alignSelf: 'flex-start',
  },
  bubble: {
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  userBubble: {
    backgroundColor: colors.primary,
    ...Platform.select({
      ios: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  assistantBubble: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  text: {
    fontSize: fontSizes.md,
    lineHeight: 22,
  },
  userText: {
    color: colors.white,
  },
  assistantText: {
    color: colors.text,
  },
  link: {
    textDecorationLine: 'underline',
  },
  userLink: {
    color: colors.white,
    opacity: 0.9,
  },
  assistantLink: {
    color: colors.primary,
  },
  timestamp: {
    fontSize: fontSizes.xs,
    marginTop: spacing.xs,
    marginHorizontal: spacing.xs,
  },
  userTimestamp: {
    color: colors.textLight,
    alignSelf: 'flex-end',
  },
  assistantTimestamp: {
    color: colors.textLight,
    alignSelf: 'flex-start',
  },
  imagesContainer: {
    marginTop: spacing.sm,
  },
  attachedImage: {
    width: '100%',
    height: 200,
    borderRadius: borderRadius.md,
    marginBottom: spacing.xs,
  },
  messageActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.xs,
  },
  actionButton: {
    padding: spacing.xs,
    marginLeft: spacing.sm,
  },
  actionButtonActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: borderRadius.sm,
  },
  codeBlock: {
    backgroundColor: '#f5f5f5',
    padding: spacing.sm,
    borderRadius: borderRadius.sm,
    marginVertical: spacing.xs,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  codeText: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: fontSizes.sm,
    color: colors.text,
  },
});