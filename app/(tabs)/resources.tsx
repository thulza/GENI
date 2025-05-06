import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, X } from 'lucide-react-native';
import { useResourceStore } from '@/store/resourceStore';
import { ResourceList } from '@/components/resources/ResourceList';
import { colors } from '@/constants/colors';
import { borderRadius, spacing } from '@/constants/theme';

export default function ResourcesScreen() {
  const { resources, bookmarks, addBookmark, removeBookmark } = useResourceStore();
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleBookmark = (resourceId: string) => {
    if (bookmarks.includes(resourceId)) {
      removeBookmark(resourceId);
    } else {
      addBookmark(resourceId);
    }
  };

  const filteredResources = resources.filter(resource => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query) ||
      resource.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.searchContainer}>
        <Search size={20} color={colors.textSecondary} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search resources..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          clearButtonMode="while-editing"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <X size={18} color={colors.textSecondary} />
          </TouchableOpacity>
        )}
      </View>
      
      <ResourceList
        resources={filteredResources}
        bookmarks={bookmarks}
        onToggleBookmark={handleToggleBookmark}
        emptyMessage={
          searchQuery
            ? "No resources match your search"
            : "No resources available"
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    marginHorizontal: spacing.md,
    marginVertical: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  clearButton: {
    padding: spacing.xs,
  },
});