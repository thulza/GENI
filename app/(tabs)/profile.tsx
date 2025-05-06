import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  User, 
  Settings, 
  Bell, 
  Moon, 
  Sun, 
  LogOut, 
  ChevronRight, 
  BookOpen,
  Heart
} from 'lucide-react-native';
import { useUserStore } from '@/store/userStore';
import { useResourceStore } from '@/store/resourceStore';
import { Card } from '@/components/ui/Card';
import { colors } from '@/constants/colors';
import { fontSizes, spacing } from '@/constants/theme';

export default function ProfileScreen() {
  const { profile, updateSettings, logout } = useUserStore();
  const { getBookmarkedResources } = useResourceStore();
  
  const bookmarkedResources = getBookmarkedResources();

  if (!profile) return null;

  const toggleNotifications = () => {
    updateSettings({ notifications: !profile.settings.notifications });
  };

  const toggleTheme = () => {
    updateSettings({ 
      theme: profile.settings.theme === 'light' ? 'dark' : 'light' 
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            {profile.avatar ? (
              <Image source={{ uri: profile.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <User size={40} color={colors.white} />
              </View>
            )}
          </View>
          <Text style={styles.profileName}>{profile.name}</Text>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profile.completedQuizzes.length}</Text>
            <Text style={styles.statLabel}>Quizzes</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{bookmarkedResources.length}</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profile.assessmentResults.length}</Text>
            <Text style={styles.statLabel}>Assessments</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <Card style={styles.interestsCard}>
            {profile.interests.length > 0 ? (
              <View style={styles.interestTags}>
                {profile.interests.map((interest, index) => (
                  <View key={index} style={styles.interestTag}>
                    <Text style={styles.interestTagText}>{interest}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <Text style={styles.emptyText}>No interests added yet</Text>
            )}
          </Card>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <Card style={styles.settingsCard}>
            <View style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <Bell size={20} color={colors.text} />
                <Text style={styles.settingText}>Notifications</Text>
              </View>
              <Switch
                value={profile.settings.notifications}
                onValueChange={toggleNotifications}
                trackColor={{ false: colors.border, true: colors.primaryLight }}
                thumbColor={profile.settings.notifications ? colors.primary : colors.white}
              />
            </View>
            
            <View style={styles.settingDivider} />
            
            <View style={styles.settingItem}>
              <View style={styles.settingLeft}>
                {profile.settings.theme === 'light' ? (
                  <Sun size={20} color={colors.text} />
                ) : (
                  <Moon size={20} color={colors.text} />
                )}
                <Text style={styles.settingText}>Dark Mode</Text>
              </View>
              <Switch
                value={profile.settings.theme === 'dark'}
                onValueChange={toggleTheme}
                trackColor={{ false: colors.border, true: colors.primaryLight }}
                thumbColor={profile.settings.theme === 'dark' ? colors.primary : colors.white}
              />
            </View>
            
            <View style={styles.settingDivider} />
            
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <BookOpen size={20} color={colors.text} />
                <Text style={styles.settingText}>Saved Resources</Text>
              </View>
              <ChevronRight size={20} color={colors.textLight} />
            </TouchableOpacity>
            
            <View style={styles.settingDivider} />
            
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <Heart size={20} color={colors.text} />
                <Text style={styles.settingText}>About</Text>
              </View>
              <ChevronRight size={20} color={colors.textLight} />
            </TouchableOpacity>
          </Card>
        </View>
        
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <LogOut size={20} color={colors.error} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  avatarContainer: {
    marginBottom: spacing.md,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    color: colors.text,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: spacing.md,
    marginBottom: spacing.xl,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    ...StyleSheet.flatten({
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    }),
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: colors.border,
  },
  section: {
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.md,
  },
  sectionTitle: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  interestsCard: {
    padding: spacing.md,
  },
  interestTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  interestTag: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 20,
  },
  interestTagText: {
    color: colors.primaryDark,
    fontSize: fontSizes.sm,
    fontWeight: '500',
  },
  emptyText: {
    color: colors.textLight,
    textAlign: 'center',
    padding: spacing.md,
  },
  settingsCard: {
    padding: 0,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: fontSizes.md,
    color: colors.text,
    marginLeft: spacing.md,
  },
  settingDivider: {
    height: 1,
    backgroundColor: colors.border,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.md,
    marginBottom: spacing.xxl,
    padding: spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.error,
  },
  logoutText: {
    color: colors.error,
    fontSize: fontSizes.md,
    fontWeight: '600',
    marginLeft: spacing.sm,
  },
});