import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ExternalLink, Bookmark, BookmarkCheck, Clock } from 'lucide-react-native';
import { Resource } from '@/types/resource';
import { Card } from '@/components/ui/Card';
import { colors } from '@/constants/colors';
import { borderRadius, fontSizes, spacing } from '@/constants/theme';
import { formatResourceType, formatReadTime } from '@/utils/formatters';
import { useRouter } from 'expo-router';

interface ResourceCardProps {
  resource: Resource;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  isBookmarked,
  onToggleBookmark,
}) => {
  const router = useRouter();

  const handleOpenResource = () => {
    // Navigate to the article detail page instead of home
    router.push(`/article/${resource.id}`);
  };

  return (
    <Card style={styles.card}>
      <TouchableOpacity onPress={handleOpenResource} activeOpacity={0.9}>
        {resource.imageUrl && (
          <Image
            source={{ uri: resource.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.typeContainer}>
              <Text style={styles.type}>{formatResourceType(resource.type)}</Text>
            </View>
            
            <TouchableOpacity 
              onPress={(e) => {
                e.stopPropagation();
                onToggleBookmark();
              }} 
              style={styles.bookmarkButton}
            >
              {isBookmarked ? (
                <BookmarkCheck size={20} color={colors.primary} />
              ) : (
                <Bookmark size={20} color={colors.textSecondary} />
              )}
            </TouchableOpacity>
          </View>
          
          <Text style={styles.title}>{resource.title}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {resource.description}
          </Text>
          
          <View style={styles.footer}>
            {resource.readTime && (
              <View style={styles.readTimeContainer}>
                <Clock size={14} color={colors.textSecondary} />
                <Text style={styles.readTime}>{formatReadTime(resource.readTime)}</Text>
              </View>
            )}
            
            <View style={styles.linkButton}>
              <Text style={styles.linkText}>
                {resource.content ? 'Read' : resource.type === 'course' ? 'Open Course' : 'Open'}
              </Text>
              <ExternalLink size={14} color={colors.primary} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  image: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: borderRadius.md,
    borderTopRightRadius: borderRadius.md,
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
  typeContainer: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  type: {
    fontSize: fontSizes.xs,
    color: colors.primaryDark,
    fontWeight: '600',
  },
  bookmarkButton: {
    padding: spacing.xs,
  },
  title: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
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
  readTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readTime: {
    fontSize: fontSizes.xs,
    color: colors.textSecondary,
    marginLeft: spacing.xs,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.xs,
  },
  linkText: {
    fontSize: fontSizes.sm,
    color: colors.primary,
    fontWeight: '600',
    marginRight: spacing.xs,
  },
});