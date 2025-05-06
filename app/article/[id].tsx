import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Bookmark, BookmarkCheck, Share2 } from 'lucide-react-native';
import { useResourceStore } from '@/store/resourceStore';
import { colors } from '@/constants/colors';
import { spacing, fontSizes, borderRadius } from '@/constants/theme';
import { formatDate, formatResourceType, formatReadTime } from '@/utils/formatters';

export default function ArticleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { resources, bookmarks, addBookmark, removeBookmark } = useResourceStore();
  
  const resource = resources.find(r => r.id === id);
  
  if (!resource) {
    return (
      <SafeAreaView style={styles.container}>
        <Stack.Screen 
          options={{
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <ArrowLeft size={24} color={colors.text} />
              </TouchableOpacity>
            ),
            title: 'Resource not found'
          }}
        />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Resource not found</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Go back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const isBookmarked = bookmarks.includes(resource.id);

  const handleToggleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(resource.id);
    } else {
      addBookmark(resource.id);
    }
  };

  const handleShare = () => {
    // Share functionality would go here
    console.log('Share resource:', resource.title);
  };

  // Redirect to homepage for external links
  const handleExternalLink = () => {
    router.push('/');
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen 
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <ArrowLeft size={24} color={colors.text} />
            </TouchableOpacity>
          ),
          title: formatResourceType(resource.type),
          headerRight: () => (
            <View style={styles.headerActions}>
              <TouchableOpacity onPress={handleToggleBookmark} style={styles.headerButton}>
                {isBookmarked ? (
                  <BookmarkCheck size={24} color={colors.primary} />
                ) : (
                  <Bookmark size={24} color={colors.text} />
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={handleShare} style={styles.headerButton}>
                <Share2 size={24} color={colors.text} />
              </TouchableOpacity>
            </View>
          )
        }}
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {resource.imageUrl && (
          <Image
            source={{ uri: resource.imageUrl }}
            style={styles.coverImage}
            resizeMode="cover"
          />
        )}
        
        <View style={styles.content}>
          <Text style={styles.title}>{resource.title}</Text>
          
          <View style={styles.meta}>
            <View style={styles.tagContainer}>
              <Text style={styles.tag}>{formatResourceType(resource.type)}</Text>
            </View>
            
            {resource.readTime && (
              <Text style={styles.readTime}>{formatReadTime(resource.readTime)}</Text>
            )}
            
            <Text style={styles.date}>{formatDate(resource.createdAt)}</Text>
          </View>
          
          {resource.content ? (
            <View style={styles.articleContent}>
              {resource.content.split('\n\n').map((paragraph, index) => {
                // Handle headers (lines starting with #)
                if (paragraph.startsWith('# ')) {
                  return (
                    <Text key={index} style={styles.heading1}>
                      {paragraph.substring(2)}
                    </Text>
                  );
                } else if (paragraph.startsWith('## ')) {
                  return (
                    <Text key={index} style={styles.heading2}>
                      {paragraph.substring(3)}
                    </Text>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <Text key={index} style={styles.heading3}>
                      {paragraph.substring(4)}
                    </Text>
                  );
                }
                
                // Handle lists (lines starting with -)
                else if (paragraph.includes('\n- ')) {
                  const [listTitle, ...items] = paragraph.split('\n- ');
                  return (
                    <View key={index} style={styles.listContainer}>
                      {listTitle && <Text style={styles.paragraph}>{listTitle}</Text>}
                      {items.map((item, itemIndex) => (
                        <View key={itemIndex} style={styles.listItem}>
                          <Text style={styles.listBullet}>•</Text>
                          <Text style={styles.listText}>{item}</Text>
                        </View>
                      ))}
                    </View>
                  );
                }
                
                // Handle numbered lists (lines starting with 1., 2., etc.)
                else if (paragraph.match(/\n\d+\. /)) {
                  const [listTitle, ...items] = paragraph.split(/\n\d+\. /);
                  return (
                    <View key={index} style={styles.listContainer}>
                      {listTitle && <Text style={styles.paragraph}>{listTitle}</Text>}
                      {items.map((item, itemIndex) => (
                        <View key={itemIndex} style={styles.listItem}>
                          <Text style={styles.listNumber}>{itemIndex + 1}.</Text>
                          <Text style={styles.listText}>{item}</Text>
                        </View>
                      ))}
                    </View>
                  );
                }
                
                // Regular paragraphs
                else {
                  return (
                    <Text key={index} style={styles.paragraph}>
                      {paragraph}
                    </Text>
                  );
                }
              })}
            </View>
          ) : (
            <View style={styles.externalLinkContainer}>
              <Text style={styles.externalLinkText}>
                This resource is available on an external website. Click the button below to access it.
              </Text>
              <TouchableOpacity 
                style={styles.externalLinkButton}
                onPress={handleExternalLink}
              >
                <Text style={styles.externalLinkButtonText}>Visit Website</Text>
              </TouchableOpacity>
            </View>
          )}
          
          <View style={styles.tagsSection}>
            <Text style={styles.tagsTitle}>Related Topics</Text>
            <View style={styles.tagsContainer}>
              {resource.tags.map((tag, index) => (
                <View key={index} style={styles.tagPill}>
                  <Text style={styles.tagPillText}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  errorText: {
    fontSize: fontSizes.xl,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  backButton: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
  },
  backButtonText: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: '600',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: spacing.xs,
    marginLeft: spacing.sm,
  },
  scrollView: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: spacing.lg,
  },
  title: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  tagContainer: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  tag: {
    fontSize: fontSizes.xs,
    color: colors.primaryDark,
    fontWeight: '600',
  },
  readTime: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
  },
  date: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
  },
  articleContent: {
    marginBottom: spacing.xl,
  },
  heading1: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  heading2: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  heading3: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  paragraph: {
    fontSize: fontSizes.md,
    lineHeight: 24,
    color: colors.text,
    marginBottom: spacing.md,
  },
  listContainer: {
    marginBottom: spacing.md,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
    paddingLeft: spacing.sm,
  },
  listBullet: {
    fontSize: fontSizes.md,
    color: colors.primary,
    marginRight: spacing.sm,
    width: 15,
  },
  listNumber: {
    fontSize: fontSizes.md,
    color: colors.primary,
    marginRight: spacing.sm,
    width: 25,
  },
  listText: {
    fontSize: fontSizes.md,
    lineHeight: 24,
    color: colors.text,
    flex: 1,
  },
  externalLinkContainer: {
    alignItems: 'center',
    padding: spacing.lg,
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    marginBottom: spacing.xl,
  },
  externalLinkText: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  externalLinkButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
  },
  externalLinkButtonText: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: '600',
  },
  tagsSection: {
    marginTop: spacing.lg,
  },
  tagsTitle: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  tagPill: {
    backgroundColor: colors.card,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tagPillText: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
  },
});