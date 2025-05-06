import { Message } from '@/types/chat';

const AI_ENDPOINT = 'https://toolkit.rork.com/text/llm/';

export const systemPrompt = `
You are an AI assistant specializing in gender equality in digital transformation. Your purpose is to:

1. Educate users about gender equality, digital inclusion, and women's rights in technology
2. Help organizations identify and implement inclusive digital policies
3. Provide resources and tools for empowering women and marginalized groups in digital spaces
4. Offer bias-free, inclusive responses that respect all genders and backgrounds

Be friendly, empathetic, and encouraging. Avoid making assumptions about the user's gender, background, or knowledge level. When appropriate, share success stories of women and marginalized groups in tech.

If asked about sensitive topics, provide balanced, research-based information. If you don't know something, admit it rather than making up information.

Always aim to be constructive and solution-oriented, focusing on practical steps individuals and organizations can take to promote gender equality in digital spaces.

When providing resources, format them clearly with titles and brief descriptions. When listing steps or processes, use numbered lists for clarity.

If the user shares an image, analyze it thoughtfully in the context of gender equality and digital transformation. Look for relevant elements like representation, inclusivity, or potential biases.

Occasionally suggest relevant assessments or quizzes from the app that might help the user learn more about specific topics.

When discussing gender equality, consider intersectionality - how gender interacts with race, class, disability, sexuality, and other aspects of identity.

Provide concrete, actionable advice when possible, and cite research or best practices to support your recommendations.

Format code blocks, if any, with triple backticks. This helps the app display code properly.

When discussing statistics or research findings, mention the source if possible to add credibility.

If appropriate, suggest specific tools or assessments from the app that might help the user with their specific situation.
`;

export async function sendMessageToAI(messages: Message[]): Promise<string> {
  try {
    // Format messages for the API
    const formattedMessages = messages.map(msg => {
      // Handle text-only messages
      if (typeof msg.content === 'string') {
        return {
          role: msg.role,
          content: msg.content
        };
      } 
      // Handle messages with multiple content parts (text and images)
      else {
        return {
          role: msg.role,
          content: msg.content
        };
      }
    });
    
    // Add system prompt if not present
    if (!formattedMessages.some(msg => msg.role === 'system')) {
      formattedMessages.unshift({
        role: 'system',
        content: systemPrompt
      });
    }

    console.log('Sending to AI:', JSON.stringify(formattedMessages));

    const response = await fetch(AI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: formattedMessages }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.completion;
  } catch (error) {
    console.error('Error sending message to AI:', error);
    throw error;
  }
}

// Helper function to extract topics from a conversation
export function extractTopicsFromConversation(messages: Message[]): string[] {
  const topics = new Set<string>();
  const keywordMap: {[key: string]: string[]} = {
    'recruitment': ['hiring', 'recruit', 'job', 'candidate', 'interview', 'application'],
    'bias': ['prejudice', 'stereotype', 'discrimination', 'unfair', 'unconscious bias'],
    'leadership': ['leader', 'executive', 'management', 'board', 'director', 'C-suite'],
    'pay gap': ['salary', 'compensation', 'wage', 'pay difference', 'equal pay'],
    'inclusion': ['inclusive', 'diversity', 'belonging', 'representation'],
    'policy': ['policies', 'regulation', 'guideline', 'framework', 'standard'],
    'education': ['training', 'learn', 'course', 'skill', 'knowledge'],
    'mentorship': ['mentor', 'coach', 'guide', 'sponsor', 'role model'],
    'work-life balance': ['flexibility', 'remote work', 'parental leave', 'childcare'],
    'technology': ['tech', 'digital', 'software', 'hardware', 'engineering', 'coding'],
    'intersectionality': ['intersectional', 'race', 'class', 'disability', 'lgbtq', 'multiple identities'],
    'ai ethics': ['artificial intelligence', 'algorithm', 'machine learning', 'data bias', 'ethical ai'],
    'digital divide': ['access', 'connectivity', 'rural', 'developing countries', 'internet access'],
    'stem education': ['science', 'technology', 'engineering', 'mathematics', 'education'],
    'entrepreneurship': ['startup', 'founder', 'venture capital', 'funding', 'business'],
    'online harassment': ['harassment', 'trolling', 'abuse', 'safety', 'online violence'],
  };
  
  // Only process user messages to identify topics
  const userMessages = messages.filter(msg => msg.role === 'user');
  
  userMessages.forEach(message => {
    const content = typeof message.content === 'string' 
      ? message.content.toLowerCase()
      : message.content
          .filter(part => part.type === 'text')
          .map(part => (part as any).text.toLowerCase())
          .join(' ');
    
    // Check for keywords in the content
    Object.entries(keywordMap).forEach(([topic, keywords]) => {
      if (keywords.some(keyword => content.includes(keyword))) {
        topics.add(topic);
      }
    });
  });
  
  return Array.from(topics);
}

// Function to suggest relevant resources based on conversation
export function suggestRelevantResources(topics: string[]): string[] {
  // This would connect to your resource database
  // For now, returning placeholder IDs
  const resourceMap: {[key: string]: string[]} = {
    'recruitment': ['1', '5', '9', '15'],
    'bias': ['1', '7', '8', '10', '13'],
    'leadership': ['2', '6', '15', '19'],
    'pay gap': ['4', '11', '14', '18'],
    'inclusion': ['3', '6', '13', '20'],
    'education': ['3', '7', '12', '17'],
    'mentorship': ['5', '9', '14'],
    'work-life balance': ['4', '15'],
    'technology': ['1', '2', '10', '19'],
    'intersectionality': ['20', '16', '11'],
    'ai ethics': ['1', '10', '17'],
    'digital divide': ['7', '16'],
    'stem education': ['2', '12', '17'],
    'entrepreneurship': ['18', '11', '6'],
    'online harassment': ['8', '19'],
  };
  
  const suggestedResourceIds = new Set<string>();
  
  topics.forEach(topic => {
    const resources = resourceMap[topic] || [];
    resources.forEach(id => suggestedResourceIds.add(id));
  });
  
  return Array.from(suggestedResourceIds).slice(0, 3); // Limit to 3 suggestions
}

// Function to analyze image content for gender equality themes
export function analyzeImageContent(imageBase64: string): Promise<string> {
  // In a real implementation, this would call a vision API
  // For now, we'll return a placeholder response
  return Promise.resolve(
    "The image appears to show people in a professional setting. " +
    "When analyzing images for gender equality, I look for diverse representation, " +
    "balanced portrayal of different genders, and absence of stereotypical depictions. " +
    "Would you like me to discuss specific aspects of gender representation in this context?"
  );
}