import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Resource } from '@/types/resource';
import { ResourceCard } from './ResourceCard';
import { colors } from '@/constants/colors';
import { spacing, fontSizes } from '@/constants/theme';

interface ResourceListProps {
  resources: Resource[];
  bookmarks: string[];
  onToggleBookmark: (resourceId: string) => void;
  emptyMessage?: string;
}

export const ResourceList: React.FC<ResourceListProps> = ({
  resources,
  bookmarks,
  onToggleBookmark,
  emptyMessage = 'No resources available',
}) => {
  if (resources.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{emptyMessage}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={resources}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ResourceCard
          resource={item}
          isBookmarked={bookmarks.includes(item.id)}
          onToggleBookmark={() => onToggleBookmark(item.id)}
        />
      )}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    padding: spacing.md,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  emptyText: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});