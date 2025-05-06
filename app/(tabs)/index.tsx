import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MessageSquare, BookOpen, BarChart, ArrowRight, Award, Lightbulb, Users, Mail, Phone, Globe, MapPin, Heart, Info, ExternalLink } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import { spacing, fontSizes, borderRadius } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useChatStore } from '@/store/chatStore';
import { useResourceStore } from '@/store/resourceStore';

export default function HomeScreen() {
  const router = useRouter();
  const { sessions, createSession, setCurrentSession } = useChatStore();
  const { resources } = useResourceStore();

  // Get featured resources
  const featuredResources = resources.filter(r => r.type === 'article').slice(0, 3);
  
  // Handle starting a new chat
  const handleStartChat = () => {
    if (sessions.length === 0) {
      createSession();
    } else {
      setCurrentSession(sessions[0].id);
    }
    router.push('/chat');
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <LinearGradient
          colors={['rgba(138, 107, 193, 0.2)', 'rgba(138, 107, 193, 0.05)']}
          style={styles.heroContainer}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Gender Equality in Digital Transformation</Text>
            <Text style={styles.heroSubtitle}>
              Empowering inclusive digital spaces through education, resources, and tools
            </Text>
            <TouchableOpacity 
              style={styles.heroChatButton}
              onPress={handleStartChat}
            >
              <MessageSquare size={20} color={colors.white} />
              <Text style={styles.heroChatButtonText}>Start Chatting</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1573164713988-8665fc963095' }}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </LinearGradient>

        {/* About Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>About Our Initiative</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutText}>
              The Gender Equality in Digital Transformation initiative aims to bridge the gender gap in technology and digital spaces. We provide resources, tools, and AI-powered assistance to help individuals and organizations create more inclusive digital environments.
            </Text>
            <Text style={styles.aboutText}>
              Our mission is to empower women and underrepresented groups in the digital economy, promote inclusive policies, and transform the digital landscape to be more equitable for all.
            </Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>200+</Text>
                <Text style={styles.statLabel}>Resources</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>50+</Text>
                <Text style={styles.statLabel}>Assessment Tools</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>10K+</Text>
                <Text style={styles.statLabel}>Users Helped</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Key Features</Text>
          <View style={styles.featuresGrid}>
            <View style={styles.featureCard}>
              <View style={[styles.featureIconContainer, { backgroundColor: 'rgba(138, 107, 193, 0.1)' }]}>
                <MessageSquare size={24} color={colors.primary} />
              </View>
              <Text style={styles.featureTitle}>AI Assistant</Text>
              <Text style={styles.featureDescription}>Get personalized guidance on gender equality topics</Text>
            </View>
            
            <View style={styles.featureCard}>
              <View style={[styles.featureIconContainer, { backgroundColor: 'rgba(78, 205, 196, 0.1)' }]}>
                <BookOpen size={24} color={colors.secondary} />
              </View>
              <Text style={styles.featureTitle}>Resources</Text>
              <Text style={styles.featureDescription}>Access articles, courses, and learning materials</Text>
            </View>
            
            <View style={styles.featureCard}>
              <View style={[styles.featureIconContainer, { backgroundColor: 'rgba(255, 179, 71, 0.1)' }]}>
                <BarChart size={24} color={colors.warning} />
              </View>
              <Text style={styles.featureTitle}>Assessment Tools</Text>
              <Text style={styles.featureDescription}>Evaluate and improve gender inclusivity</Text>
            </View>
            
            <View style={styles.featureCard}>
              <View style={[styles.featureIconContainer, { backgroundColor: 'rgba(75, 181, 67, 0.1)' }]}>
                <Users size={24} color={colors.success} />
              </View>
              <Text style={styles.featureTitle}>Community</Text>
              <Text style={styles.featureDescription}>Connect with others committed to equality</Text>
            </View>
          </View>
        </View>

        {/* Featured Resources */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Resources</Text>
            <TouchableOpacity onPress={() => router.push('/resources')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
            {featuredResources.map((resource) => (
              <TouchableOpacity 
                key={resource.id} 
                style={styles.featuredCard}
                onPress={() => router.push(`/article/${resource.id}`)}
              >
                <Image 
                  source={{ uri: resource.imageUrl }} 
                  style={styles.featuredImage} 
                  resizeMode="cover"
                />
                <View style={styles.featuredContent}>
                  <Text style={styles.featuredType}>{resource.type.toUpperCase()}</Text>
                  <Text style={styles.featuredTitle} numberOfLines={2}>{resource.title}</Text>
                  <Text style={styles.featuredDescription} numberOfLines={2}>{resource.description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Quick Actions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <TouchableOpacity 
            style={styles.actionCard}
            onPress={() => router.push('/tools')}
          >
            <View style={styles.actionContent}>
              <Award size={24} color={colors.primary} />
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionTitle}>Take an Assessment</Text>
                <Text style={styles.actionDescription}>Evaluate your organization's gender inclusivity</Text>
              </View>
            </View>
            <ArrowRight size={20} color={colors.textSecondary} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionCard}
            onPress={() => router.push('/tools')}
          >
            <View style={styles.actionContent}>
              <Lightbulb size={24} color={colors.secondary} />
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionTitle}>Test Your Knowledge</Text>
                <Text style={styles.actionDescription}>Take a quiz on gender equality topics</Text>
              </View>
            </View>
            <ArrowRight size={20} color={colors.textSecondary} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionCard}
            onPress={handleStartChat}
          >
            <View style={styles.actionContent}>
              <MessageSquare size={24} color={colors.warning} />
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionTitle}>Ask the AI Assistant</Text>
                <Text style={styles.actionDescription}>Get personalized guidance and answers</Text>
              </View>
            </View>
            <ArrowRight size={20} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>

        {/* Partners Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Our Partners</Text>
          <View style={styles.partnersContainer}>
            <View style={styles.partnerCard}>
              <View style={styles.partnerLogo}>
                <Text style={styles.partnerLogoText}>TS</Text>
              </View>
              <Text style={styles.partnerName}>Thulane Sigasa</Text>
            </View>
            <View style={styles.partnerCard}>
              <View style={styles.partnerLogo}>
                <Text style={styles.partnerLogoText}>TM</Text>
              </View>
              <Text style={styles.partnerName}>Tebogo Mnguni</Text>
            </View>
            <View style={styles.partnerCard}>
              <View style={styles.partnerLogo}>
                <Text style={styles.partnerLogoText}>HM</Text>
              </View>
              <Text style={styles.partnerName}>Hope Malatji</Text>
            </View>
            <View style={styles.partnerCard}>
              <View style={styles.partnerLogo}>
                <Text style={styles.partnerLogoText}>LT</Text>
              </View>
              <Text style={styles.partnerName}>Lethabo Thathane</Text>
            </View>
            <View style={styles.partnerCard}>
              <View style={styles.partnerLogo}>
                <Text style={styles.partnerLogoText}>LC</Text>
              </View>
              <Text style={styles.partnerName}>Lethabo Chiloane</Text>
            </View>
          </View>
        </View>

        {/* Contact Section */}
        <LinearGradient
          colors={['rgba(138, 107, 193, 0.1)', 'rgba(78, 205, 196, 0.1)']}
          style={styles.contactContainer}
        >
          <Text style={styles.contactTitle}>Contact Us</Text>
          <Text style={styles.contactDescription}>
            Have questions or suggestions? We'd love to hear from you!
          </Text>
          
          <View style={styles.contactInfoContainer}>
            <View style={styles.contactInfoItem}>
              <Mail size={20} color={colors.primary} />
              <Text style={styles.contactInfoText}>pharezsigasa@gmail.com</Text>
            </View>
            
            <View style={styles.contactInfoItem}>
              <Phone size={20} color={colors.primary} />
              <Text style={styles.contactInfoText}>+27 60 476 6693 & +27 81 820 2121</Text>
            </View>
            
            <View style={styles.contactInfoItem}>
              <Globe size={20} color={colors.primary} />
              <Text style={styles.contactInfoText}>Website Not Available</Text>
            </View>
            
            <View style={styles.contactInfoItem}>
              <MapPin size={20} color={colors.primary} />
              <Text style={styles.contactInfoText}>Plantation Rd, New Era, Springs, 1560</Text>
            </View>
          </View>
          
          <TouchableOpacity 
            style={styles.contactButton}
            onPress={() => Linking.openURL('mailto:pharezsigasa@gmail.com')}
          >
            <Text style={styles.contactButtonText}>Send us an email</Text>
            <ExternalLink size={16} color={colors.white} />
          </TouchableOpacity>
        </LinearGradient>
        
        <View style={styles.footer}>
          <View style={styles.footerTop}>
            <View style={styles.footerColumn}>
              <Text style={styles.footerColumnTitle}>Resources</Text>
              <TouchableOpacity onPress={() => router.push('/resources')}>
                <Text style={styles.footerLink}>Articles</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/resources')}>
                <Text style={styles.footerLink}>Courses</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/resources')}>
                <Text style={styles.footerLink}>Case Studies</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.footerColumn}>
              <Text style={styles.footerColumnTitle}>Tools</Text>
              <TouchableOpacity onPress={() => router.push('/tools')}>
                <Text style={styles.footerLink}>Assessments</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/tools')}>
                <Text style={styles.footerLink}>Quizzes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/chat')}>
                <Text style={styles.footerLink}>AI Assistant</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.footerColumn}>
              <Text style={styles.footerColumnTitle}>About</Text>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Our Mission</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Team</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Partners</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.footerBottom}>
            <Text style={styles.footerText}>© 2023 Gender Equality in Digital Transformation</Text>
            <View style={styles.footerSocialLinks}>
              <Heart size={16} color={colors.primary} />
              <Text style={styles.footerSocialText}>Made with love for equality</Text>
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
  heroContainer: {
    padding: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroContent: {
    flex: 1,
    paddingRight: spacing.md,
  },
  heroTitle: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  heroSubtitle: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  heroChatButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    alignSelf: 'flex-start',
  },
  heroChatButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: spacing.xs,
  },
  heroImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  sectionContainer: {
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  seeAllText: {
    color: colors.primary,
    fontWeight: '600',
  },
  aboutCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  aboutText: {
    fontSize: fontSizes.md,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.md,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  featureTitle: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  featureDescription: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
  },
  featuredScroll: {
    marginHorizontal: -spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  featuredCard: {
    width: 280,
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    marginRight: spacing.md,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 140,
  },
  featuredContent: {
    padding: spacing.md,
  },
  featuredType: {
    fontSize: fontSizes.xs,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  featuredTitle: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  featuredDescription: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
  },
  actionCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionTextContainer: {
    marginLeft: spacing.md,
  },
  actionTitle: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: colors.text,
  },
  actionDescription: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
  },
  partnersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  partnerCard: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  partnerLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(138, 107, 193, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  partnerLogoText: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: colors.primary,
  },
  partnerName: {
    fontSize: fontSizes.sm,
    color: colors.text,
    textAlign: 'center',
  },
  contactContainer: {
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderRadius: borderRadius.md,
    marginHorizontal: spacing.lg,
  },
  contactTitle: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  contactDescription: {
    fontSize: fontSizes.md,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  contactInfoContainer: {
    marginBottom: spacing.lg,
  },
  contactInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  contactInfoText: {
    fontSize: fontSizes.md,
    color: colors.text,
    marginLeft: spacing.md,
  },
  contactButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
  },
  contactButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    marginRight: spacing.xs,
  },
  footer: {
    backgroundColor: colors.card,
    padding: spacing.lg,
  },
  footerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  footerColumn: {
    flex: 1,
  },
  footerColumnTitle: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  footerLink: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.md,
  },
  footerText: {
    fontSize: fontSizes.sm,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  footerSocialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerSocialText: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
    marginLeft: spacing.xs,
  },
});