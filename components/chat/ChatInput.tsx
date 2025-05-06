import React, { useState, useRef } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform,
  Modal,
  Text,
  ActivityIndicator,
  ScrollView,
  Alert
} from 'react-native';
import { Send, Image as ImageIcon, X, Paperclip, Smile } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import { borderRadius, spacing, fontSizes } from '@/constants/theme';
import * as ImagePicker from 'expo-image-picker';

interface ChatInputProps {
  onSend: (message: string, attachments?: Array<{ type: string, data: string }>) => void;
  isLoading?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ 
  onSend, 
  isLoading = false 
}) => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<Array<{ type: string, data: string }>>([]);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleSend = () => {
    if ((message.trim() || attachments.length > 0) && !isLoading) {
      onSend(message.trim(), attachments);
      setMessage('');
      setAttachments([]);
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
        base64: true,
      });
      
      if (!result.canceled && result.assets && result.assets[0]) {
        const asset = result.assets[0];
        if (asset.base64) {
          setAttachments([...attachments, { 
            type: 'image', 
            data: `data:image/jpeg;base64,${asset.base64}` 
          }]);
        }
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image. Please try again.');
    }
    setShowAttachmentOptions(false);
  };

  const takePicture = async () => {
    try {
      // Request camera permissions
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'Please grant camera permissions to take a photo.');
        return;
      }
      
      // Launch camera
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
        base64: true,
      });
      
      if (!result.canceled && result.assets && result.assets[0]) {
        const asset = result.assets[0];
        if (asset.base64) {
          setAttachments([...attachments, { 
            type: 'image', 
            data: `data:image/jpeg;base64,${asset.base64}` 
          }]);
        }
      }
    } catch (error) {
      console.error('Error taking picture:', error);
      Alert.alert('Error', 'Failed to take picture. Please try again.');
    }
    setShowAttachmentOptions(false);
  };

  const removeAttachment = (index: number) => {
    const newAttachments = [...attachments];
    newAttachments.splice(index, 1);
    setAttachments(newAttachments);
  };

  const addEmoji = (emoji: string) => {
    setMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
    inputRef.current?.focus();
  };

  // Common emojis for quick access
  const commonEmojis = [
    '😊', '👍', '❤️', '🙏', '👏', '🤔', '😂', '🎉', 
    '✨', '🌟', '💡', '📚', '🔍', '💪', '🌈', '🤝',
    '👩‍💻', '👨‍💻', '🌍', '🚀', '💼', '📊', '📱', '💻'
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <View style={styles.container}>
        {/* Attachments Preview */}
        {attachments.length > 0 && (
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.attachmentsContainer}
          >
            {attachments.map((attachment, index) => (
              <View key={index} style={styles.attachmentPreview}>
                {attachment.type === 'image' && (
                  <View style={styles.imagePreviewContainer}>
                    <TouchableOpacity 
                      style={styles.removeAttachmentButton}
                      onPress={() => removeAttachment(index)}
                    >
                      <X size={16} color={colors.white} />
                    </TouchableOpacity>
                    <View style={styles.imagePreview}>
                      <ImageIcon size={24} color={colors.primary} />
                      <Text style={styles.attachmentText}>Image</Text>
                    </View>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        )}
        
        <View style={styles.inputContainer}>
          <TouchableOpacity 
            style={styles.attachButton}
            disabled={isLoading}
            onPress={() => setShowAttachmentOptions(true)}
          >
            <Paperclip size={20} color={colors.textSecondary} />
          </TouchableOpacity>
          
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Type a message..."
            value={message}
            onChangeText={setMessage}
            multiline
            maxLength={1000}
            editable={!isLoading}
            returnKeyType="send"
            onSubmitEditing={handleSend}
            blurOnSubmit={false}
          />
          
          <View style={styles.actions}>
            <TouchableOpacity 
              style={styles.iconButton}
              disabled={isLoading}
              onPress={() => setShowEmojiPicker(true)}
            >
              <Smile size={20} color={colors.textSecondary} />
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                styles.sendButton,
                ((!message.trim() && attachments.length === 0) || isLoading) && styles.sendButtonDisabled,
              ]}
              onPress={handleSend}
              disabled={(!message.trim() && attachments.length === 0) || isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color={colors.white} />
              ) : (
                <Send size={20} color={colors.white} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Attachment Options Modal */}
        <Modal
          visible={showAttachmentOptions}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowAttachmentOptions(false)}
        >
          <TouchableOpacity 
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setShowAttachmentOptions(false)}
          >
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Add to your message</Text>
                <TouchableOpacity onPress={() => setShowAttachmentOptions(false)}>
                  <X size={24} color={colors.text} />
                </TouchableOpacity>
              </View>
              
              <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.optionButton} onPress={pickImage}>
                  <View style={[styles.optionIconContainer, { backgroundColor: 'rgba(138, 107, 193, 0.1)' }]}>
                    <ImageIcon size={24} color={colors.primary} />
                  </View>
                  <Text style={styles.optionText}>Photo Library</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.optionButton} onPress={takePicture}>
                  <View style={[styles.optionIconContainer, { backgroundColor: 'rgba(78, 205, 196, 0.1)' }]}>
                    <ImageIcon size={24} color={colors.secondary} />
                  </View>
                  <Text style={styles.optionText}>Take Photo</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
        
        {/* Emoji Picker Modal */}
        <Modal
          visible={showEmojiPicker}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowEmojiPicker(false)}
        >
          <TouchableOpacity 
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setShowEmojiPicker(false)}
          >
            <View style={styles.emojiModalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select Emoji</Text>
                <TouchableOpacity onPress={() => setShowEmojiPicker(false)}>
                  <X size={24} color={colors.text} />
                </TouchableOpacity>
              </View>
              
              <View style={styles.emojiGrid}>
                {commonEmojis.map((emoji, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.emojiButton}
                    onPress={() => addEmoji(emoji)}
                  >
                    <Text style={styles.emoji}>{emoji}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.white,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  attachmentsContainer: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  attachmentPreview: {
    marginRight: spacing.sm,
  },
  imagePreviewContainer: {
    position: 'relative',
  },
  removeAttachmentButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: colors.error,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  imagePreview: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(138, 107, 193, 0.1)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  attachmentText: {
    fontSize: fontSizes.xs,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  attachButton: {
    padding: spacing.sm,
    marginRight: spacing.xs,
    alignSelf: 'flex-end',
  },
  input: {
    flex: 1,
    maxHeight: 100,
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginRight: spacing.sm,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: spacing.xs,
    marginRight: spacing.xs,
  },
  sendButton: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: colors.primaryLight,
    opacity: 0.7,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: spacing.lg,
    paddingBottom: Platform.OS === 'ios' ? 40 : spacing.lg,
  },
  emojiModalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: spacing.lg,
    paddingBottom: Platform.OS === 'ios' ? 40 : spacing.lg,
    maxHeight: '50%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  modalTitle: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    color: colors.text,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionButton: {
    alignItems: 'center',
    padding: spacing.md,
  },
  optionIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  optionText: {
    fontSize: fontSizes.md,
    color: colors.text,
  },
  emojiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  emojiButton: {
    width: '16.66%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  emoji: {
    fontSize: 24,
  },
});