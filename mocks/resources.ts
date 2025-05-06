import { Resource, Quiz, Assessment } from '@/types/resource';

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Gender Bias in AI',
    description: 'An exploration of how gender bias manifests in artificial intelligence systems and what we can do about it.',
    type: 'article',
    url: 'https://example.com/gender-bias-ai',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    tags: ['AI', 'bias', 'gender equality', 'technology'],
    createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000,
    readTime: 8,
    content: `# Understanding Gender Bias in AI

Artificial intelligence systems are increasingly making decisions that affect our daily lives, from job applications to loan approvals. However, these systems can perpetuate and even amplify existing gender biases.

## How Gender Bias Enters AI Systems

1. **Biased Training Data**: AI systems learn from historical data, which often contains gender biases. For example, a resume screening tool trained on past hiring decisions may learn to prefer male candidates if that reflects historical hiring patterns.

2. **Lack of Diversity in AI Development**: The AI field itself has a significant gender gap. When teams lack diversity, they may overlook potential biases or fail to consider different perspectives.

3. **Encoded Stereotypes**: Language models trained on internet text can learn and reproduce gender stereotypes present in that text.

## Real-World Examples

- Amazon's experimental hiring algorithm showed bias against women because it was trained on resumes submitted over a 10-year period, which were predominantly from men.
- Voice recognition systems have historically performed better for male voices than female voices.
- Some machine translation systems have shown gender bias, defaulting to masculine pronouns when translating from gender-neutral languages.

## Solutions and Best Practices

1. **Diverse and Representative Data**: Ensure training data represents diverse populations and perspectives.

2. **Diverse Teams**: Build diverse AI development teams to bring different viewpoints to the design process.

3. **Bias Testing**: Regularly test AI systems for gender bias before deployment and throughout their lifecycle.

4. **Transparency**: Make AI decision-making processes more transparent and explainable.

5. **Ethical Guidelines**: Develop and follow ethical guidelines for AI development that explicitly address gender bias.

By addressing gender bias in AI, we can create more fair and equitable systems that benefit everyone.`
  },
  {
    id: '2',
    title: 'Women in Tech: Breaking Barriers',
    description: 'Stories of women who have overcome obstacles to succeed in the technology sector.',
    type: 'story',
    url: 'https://example.com/women-in-tech',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
    tags: ['women in tech', 'career', 'inspiration'],
    createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
    readTime: 12,
    content: `# Women in Tech: Breaking Barriers

Throughout the history of technology, women have made groundbreaking contributions despite facing significant barriers. Their stories inspire and remind us of the importance of creating inclusive environments in the tech industry.

## Ada Lovelace (1815-1852)

Often considered the world's first computer programmer, Ada Lovelace wrote the first algorithm intended to be processed by a machine. She worked on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine, and recognized that the machine had applications beyond pure calculation.

## Grace Hopper (1906-1992)

Rear Admiral Grace Hopper was a pioneer in computer programming who invented one of the first compiler-related tools. She popularized the idea of machine-independent programming languages, which led to the development of COBOL. Hopper is also credited with popularizing the term "debugging" after removing an actual moth from a computer.

## Modern Trailblazers

### Reshma Saujani

Founder of Girls Who Code, Reshma has worked to close the gender gap in technology by inspiring, educating, and equipping young women with computing skills. Since its founding in 2012, Girls Who Code has reached over 300,000 girls across the US.

### Kimberly Bryant

Founder of Black Girls Code, Kimberly created an organization dedicated to teaching programming to girls of color. Her goal is to increase the number of women of color in digital careers by introducing girls to computer science at a young age.

## Overcoming Common Barriers

Women in tech often face challenges including:

1. **Unconscious Bias**: Stereotypes about who "looks like" an engineer or programmer
2. **Lack of Role Models**: Fewer visible women in leadership positions
3. **Work-Life Balance Challenges**: Particularly in cultures where women bear more family responsibilities
4. **Hostile Work Environments**: Including microaggressions and harassment

Despite these challenges, women continue to make significant contributions to technology. By sharing these stories and creating more inclusive environments, we can help ensure that the future of tech includes diverse voices and perspectives.`
  },
  {
    id: '3',
    title: 'Creating Inclusive Digital Products',
    description: 'A guide to designing and developing digital products that are accessible and inclusive for all genders.',
    type: 'course',
    url: 'https://www.coursera.org/learn/inclusive-design',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
    tags: ['design', 'inclusion', 'accessibility', 'product development'],
    createdAt: Date.now() - 30 * 24 * 60 * 60 * 1000,
    readTime: 120
  },
  {
    id: '4',
    title: 'Gender Pay Gap in Technology',
    description: 'An analysis of the current state of the gender pay gap in the technology industry and strategies for closing it.',
    type: 'article',
    url: 'https://example.com/pay-gap-tech',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e',
    tags: ['pay gap', 'equality', 'workplace', 'statistics'],
    createdAt: Date.now() - 45 * 24 * 60 * 60 * 1000,
    readTime: 15,
    content: `# The Gender Pay Gap in Technology

Despite progress in many areas, the gender pay gap persists in the technology industry. This article examines the current state of the pay gap and offers strategies for addressing this ongoing challenge.

## Current Statistics

As of 2023, women in tech earn approximately 82-90 cents for every dollar earned by men, depending on the specific role and location. This gap widens for women of color and increases at higher levels of seniority.

Key findings from recent studies:

- The gap is smallest in entry-level positions (95-98 cents to the dollar)
- Mid-career women face a wider gap (85-90 cents to the dollar)
- At executive levels, women may earn as little as 75-80 cents to the dollar
- The gap varies significantly by specialization, with larger disparities in fields like software development and data science

## Root Causes

The gender pay gap in technology stems from multiple factors:

1. **Negotiation Disparities**: Research shows women are less likely to negotiate starting salaries and raises, and when they do, they often face different reactions than men.

2. **Biased Performance Evaluations**: Subjective evaluation criteria can lead to gender-biased assessments of performance and potential.

3. **Promotion Gaps**: Women are promoted at lower rates than men with similar qualifications, leading to cumulative disadvantages over time.

4. **Career Interruptions**: Women are more likely to take career breaks for caregiving, which can impact long-term earnings.

5. **Occupational Segregation**: Women are underrepresented in higher-paying technical roles and overrepresented in lower-paying roles within tech companies.

## Strategies for Closing the Gap

### For Organizations

1. **Conduct Regular Pay Audits**: Systematically review compensation data to identify and address disparities.

2. **Implement Transparent Pay Structures**: Clear salary bands and open discussions about compensation can reduce negotiation disparities.

3. **Standardize Performance Reviews**: Use objective criteria and structured evaluation processes to minimize bias.

4. **Support Career Development**: Provide mentorship, sponsorship, and leadership development programs targeted at underrepresented groups.

5. **Family-Friendly Policies**: Offer flexible work arrangements, parental leave, and return-to-work programs that support all employees.

### For Individuals

1. **Research Market Rates**: Use resources like Glassdoor, PayScale, and industry salary surveys to understand fair compensation.

2. **Build Negotiation Skills**: Take courses or workshops on effective negotiation techniques.

3. **Document Achievements**: Keep a record of accomplishments, positive feedback, and contributions to use in performance reviews and salary discussions.

4. **Seek Mentorship**: Connect with mentors who can provide guidance on career advancement and compensation.

5. **Consider Transparency**: When appropriate, discuss compensation with trusted colleagues to gain insights into potential disparities.

## Conclusion

Closing the gender pay gap in technology requires concerted effort from organizations, leaders, and individuals. By implementing transparent, equitable practices and addressing underlying biases, the industry can move toward true pay equality.`
  },
  {
    id: '5',
    title: 'Mentorship Programs for Women in STEM',
    description: 'A directory of mentorship programs designed to support women pursuing careers in STEM fields.',
    type: 'tool',
    url: 'https://example.com/mentorship-women-stem',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad',
    tags: ['mentorship', 'STEM', 'career development', 'networking'],
    createdAt: Date.now() - 60 * 24 * 60 * 60 * 1000
  },
  {
    id: '6',
    title: 'How a Tech Company Achieved Gender Parity',
    description: 'A case study of a technology company that successfully achieved gender parity across all levels of the organization.',
    type: 'case-study',
    url: 'https://example.com/gender-parity-case-study',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    tags: ['case study', 'gender parity', 'organizational change', 'success story'],
    createdAt: Date.now() - 90 * 24 * 60 * 60 * 1000,
    readTime: 20,
    content: `# How TechInnovate Achieved Gender Parity: A Case Study

## Company Background

TechInnovate, a mid-sized software company with approximately 500 employees, embarked on a journey to achieve gender parity in 2018. At that time, women represented only 22% of their workforce and held just 15% of leadership positions.

Three years later, the company had transformed its gender balance, with women making up 48% of all employees and 45% of leadership roles. This case study examines how they accomplished this significant change.

## The Challenge

TechInnovate faced several challenges common in the tech industry:

- A limited pipeline of female candidates, especially for technical roles
- Unconscious bias in hiring and promotion processes
- A workplace culture that unintentionally favored masculine communication and work styles
- Higher turnover rates among female employees

## The Strategy

TechInnovate's leadership team developed a comprehensive strategy with four key pillars:

### 1. Data-Driven Approach

The company began by establishing clear metrics and regular reporting:

- Quarterly diversity dashboards tracking gender representation across departments and levels
- Analysis of hiring, promotion, and attrition rates by gender
- Pay equity audits conducted twice yearly
- Employee satisfaction surveys with results segmented by gender

### 2. Recruitment Transformation

TechInnovate overhauled its recruitment practices:

- Partnered with women-in-tech organizations and universities to expand the candidate pipeline
- Implemented blind resume screening to reduce initial bias
- Required diverse interview panels for all positions
- Rewrote job descriptions to eliminate gendered language and unnecessary requirements
- Set targets for gender-balanced candidate slates

### 3. Retention and Development

To support and retain female talent:

- Launched a formal mentorship program pairing junior women with senior leaders
- Created a sponsorship initiative where executives advocated for high-potential women
- Established a women's leadership development program
- Implemented flexible work policies beneficial to all employees
- Expanded parental leave and provided return-to-work support

### 4. Culture Change

To create a more inclusive environment:

- Conducted mandatory unconscious bias training for all employees
- Trained managers on inclusive leadership practices
- Established a zero-tolerance policy for harassment and discrimination
- Created employee resource groups, including a women's network
- Engaged male employees as allies through education and advocacy programs

## Results

After three years of implementing these strategies, TechInnovate saw remarkable results:

- **Recruitment**: The percentage of female new hires increased from 25% to 52%
- **Leadership**: Female representation in leadership roles grew from 15% to 45%
- **Retention**: The attrition gap between male and female employees closed completely
- **Pay Equity**: The gender pay gap narrowed from 9% to less than 1%
- **Business Impact**: The company saw a 22% increase in innovation output (measured by new patents and product features) and a 15% improvement in customer satisfaction scores

## Key Lessons

TechInnovate's experience offers several valuable lessons:

1. **Comprehensive Approach**: Addressing gender parity requires tackling multiple aspects simultaneously
2. **Leadership Commitment**: Visible, active support from top executives was crucial
3. **Accountability**: Regular measurement and reporting kept the initiative on track
4. **Systemic Changes**: Focusing on processes and systems rather than individual behaviors created sustainable change
5. **Business Integration**: Treating gender parity as a business imperative rather than a separate initiative ensured widespread support

## Conclusion

TechInnovate's journey demonstrates that achieving gender parity in tech is possible with strategic planning, sustained commitment, and systemic changes. Their approach has become a model for other organizations seeking to create more diverse and inclusive workplaces.`
  },
  {
    id: '7',
    title: 'Digital Literacy for Women in Rural Communities',
    description: 'Strategies and success stories for bridging the digital gender divide in rural and underserved areas.',
    type: 'article',
    url: 'https://example.com/digital-literacy-rural-women',
    imageUrl: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21',
    tags: ['digital literacy', 'rural communities', 'digital divide', 'education'],
    createdAt: Date.now() - 120 * 24 * 60 * 60 * 1000,
    readTime: 18,
    content: `# Digital Literacy for Women in Rural Communities

The digital gender divide is particularly pronounced in rural communities, where women often have less access to technology, fewer digital skills, and more barriers to online participation. This article explores effective approaches to increasing digital literacy among women in rural areas.

## Understanding the Challenges

Women in rural communities face multiple barriers to digital literacy:

- **Limited Infrastructure**: Many rural areas lack reliable internet connectivity and access to devices
- **Economic Constraints**: The cost of devices and internet service can be prohibitive
- **Time Limitations**: Women often bear disproportionate responsibility for household and agricultural work
- **Educational Barriers**: Lower literacy rates in some regions compound digital literacy challenges
- **Social and Cultural Norms**: In some communities, technology use may be seen as primarily for men

## Successful Approaches

Despite these challenges, numerous initiatives have successfully increased digital literacy among rural women:

### Community-Based Learning Centers

Mobile or fixed technology hubs that bring devices and internet access directly to communities have shown significant success. Key elements include:

- Scheduling sessions at times convenient for women's daily responsibilities
- Providing childcare during training sessions
- Training local women as digital literacy instructors
- Creating women-only spaces where learners feel comfortable experimenting with technology

### Relevant, Practical Content

Programs that focus on immediately useful skills see higher engagement and retention:

- Agricultural applications that help with crop planning, weather forecasting, and market prices
- Mobile banking and financial management tools
- Health information and telemedicine access
- Educational resources for children
- Communication tools to connect with family members

### Peer Learning Networks

Women-led peer networks create sustainable learning communities:

- "Digital Ambassador" programs where trained women share skills with others
- WhatsApp or other messaging groups for ongoing support and problem-solving
- Regular meetups to practice skills and learn new applications
- Mentorship connections between more and less experienced technology users

## Case Studies

### Digital Sakhis in India

The Digital Sakhi program in Maharashtra, India, trains rural women as digital financial literacy ambassadors. These "Sakhis" (meaning "female friends") then train other women in their communities. The program has reached over 200,000 rural women, with participants reporting increased financial independence and business opportunities.

### Mujeres Conectadas in Colombia

This initiative provides rural Colombian women with smartphones, data plans, and digital skills training. The program focuses on practical applications like accessing government services, finding market information for agricultural products, and using mobile banking. Participants have reported 30% increases in household income through improved market access and financial management.

### Women's Digital League in Pakistan

This organization provides digital work opportunities to women in rural Pakistan, combining skills training with remote work connections. Participants learn skills ranging from basic computer operation to digital content creation and virtual assistance, allowing them to earn income while remaining in their communities.

## Best Practices for Program Design

Successful digital literacy initiatives for rural women share several characteristics:

1. **Community Involvement**: Engage local leaders and women in program design
2. **Cultural Sensitivity**: Adapt approaches to respect local customs and address specific concerns
3. **Holistic Support**: Address multiple barriers simultaneously (access, skills, confidence)
4. **Sustainability Planning**: Build local capacity to continue programs after initial funding
5. **Measurement**: Track outcomes beyond basic participation numbers

## Conclusion

Bridging the digital gender divide in rural communities requires thoughtful, context-specific approaches that address both technical skills and underlying social barriers. When designed with and for rural women, digital literacy programs can significantly enhance economic opportunities, health outcomes, and quality of life.`
  },
  {
    id: '8',
    title: 'Addressing Harassment in Online Gaming Communities',
    description: 'Strategies for creating safer, more inclusive gaming spaces for women and marginalized groups.',
    type: 'article',
    url: 'https://example.com/gaming-harassment',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
    tags: ['gaming', 'online harassment', 'community management', 'inclusion'],
    createdAt: Date.now() - 75 * 24 * 60 * 60 * 1000,
    readTime: 14,
    content: `# Addressing Harassment in Online Gaming Communities

Online gaming communities can be vibrant spaces for creativity, competition, and connection. However, they can also be hostile environments, particularly for women, LGBTQ+ individuals, and people of color. This article explores effective strategies for creating safer, more inclusive gaming spaces.

## The Scope of the Problem

Research consistently shows that harassment in gaming is pervasive and disproportionately affects marginalized groups:

- A 2021 study found that 65% of women gamers reported experiencing harassment, compared to 32% of men
- 41% of women gamers use non-gendered or masculine usernames to avoid harassment
- LGBTQ+ players report harassment rates 21% higher than cisgender, heterosexual players
- 38% of harassed players reduce their participation or leave communities entirely

This harassment ranges from gendered insults and sexual harassment to doxxing (revealing personal information) and coordinated attacks.

## Effective Interventions

### Platform-Level Solutions

Game developers and platform owners can implement structural changes:

1. **Clear, Enforced Community Guidelines**
   - Explicit policies against harassment with concrete examples
   - Transparent enforcement processes
   - Regular public reporting on moderation actions

2. **Improved Reporting Systems**
   - Streamlined, in-game reporting tools
   - Options to include evidence (screenshots, recordings)
   - Follow-up communication about report outcomes

3. **Proactive Moderation**
   - AI-assisted detection of problematic language and behavior
   - Human moderation teams with diversity training
   - Voice chat monitoring and moderation

4. **Design Choices**
   - Default privacy settings that limit harassment opportunities
   - Diverse character representation in games
   - Communication options that reduce harassment (e.g., team-only chat defaults)

### Community-Led Initiatives

Gaming communities themselves have developed effective approaches:

1. **Dedicated Spaces**
   - Women-only or inclusivity-focused guilds, clans, and Discord servers
   - Events and tournaments specifically for underrepresented players
   - Mentorship programs pairing experienced players with newcomers

2. **Bystander Intervention**
   - Training community members to safely intervene when witnessing harassment
   - "Call-in" approaches that address problematic behavior without escalation
   - Alliance programs that encourage privileged players to speak up

3. **Community Moderation**
   - Community-selected moderators with anti-harassment training
   - Clear escalation paths for serious issues
   - Restorative justice approaches for minor infractions

## Case Studies

### Riot Games' Player Dynamics Team

After facing criticism for toxic behavior in League of Legends, Riot Games established a dedicated team of social scientists, game designers, and data analysts to improve player behavior. Their multifaceted approach included:

- Redesigning the honor and reporting systems
- Implementing "nudges" that encourage positive behavior
- Using machine learning to identify toxic patterns early

These changes led to a 40% reduction in reported negative behavior and increased player retention.

### AnyKey Organization

This nonprofit organization promotes diversity and inclusion in gaming through research, education, and advocacy. Their "Good Luck, Have Fun" pledge has been signed by over 400,000 players committing to inclusive behavior. They also provide resources for tournament organizers and community leaders to create safer spaces.

### Feminist Frequency's Game Developer Guidelines

This organization created practical guidelines for game developers to reduce harassment in their games and communities. The guidelines include specific design recommendations, moderation strategies, and community management approaches based on research and best practices.

## Individual Strategies

While systemic change is essential, individuals can also take steps to protect themselves and others:

- Use privacy settings to control who can contact you
- Create separate gaming identities if needed
- Build a supportive network of fellow players
- Document harassment if you choose to report it
- Practice self-care and set boundaries

## Conclusion

Creating inclusive gaming communities requires effort at multiple levels—from platform design and moderation to community norms and individual actions. By implementing evidence-based strategies and centering the experiences of marginalized players, we can build gaming spaces that are truly welcoming to everyone.`
  },
  {
    id: '9',
    title: 'Gender-Inclusive Language in Technical Documentation',
    description: 'Best practices for creating technical content that is accessible and welcoming to all genders.',
    type: 'article',
    url: 'https://example.com/inclusive-documentation',
    imageUrl: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6',
    tags: ['technical writing', 'inclusive language', 'documentation', 'communication'],
    createdAt: Date.now() - 110 * 24 * 60 * 60 * 1000,
    readTime: 10,
    content: `# Gender-Inclusive Language in Technical Documentation

Technical documentation serves as the gateway to technology for users of all backgrounds. Using gender-inclusive language in these materials ensures that everyone feels welcome and represented. This article provides practical guidelines for creating more inclusive technical content.

## Why Inclusive Language Matters

Gender-inclusive language in documentation:

- Makes all users feel welcome and respected
- Avoids reinforcing stereotypes about who belongs in technical fields
- Improves clarity and precision
- Reaches a wider audience effectively
- Reflects modern professional standards

Research shows that non-inclusive language can create a "belonging uncertainty" that affects comprehension and engagement with technical content.

## Common Issues and Solutions

### Gendered Pronouns

**Issue**: Using "he" as a default or "he/she" as an attempted inclusive form.

**Solutions**:
- Use the singular "they" (Example: "The user can reset their password")
- Speak directly to the reader (Example: "Reset your password")
- Rewrite to avoid pronouns (Example: "Password resets are available")
- Use plural forms (Example: "Users can reset their passwords")

### Gendered Terms

**Issue**: Using terms that unnecessarily reference gender.

**Solutions**:

| Instead of | Use |
|------------|-----|
| Mankind | Humanity, people |
| Manpower | Workforce, personnel |
| Manmade | Artificial, manufactured |
| Man-hours | Person-hours, work hours |
| Businessman | Business person, professional |
| Fireman | Firefighter |
| Stewardess | Flight attendant |
| Waitress | Server |

### Gendered Metaphors and Examples

**Issue**: Using examples or scenarios that reinforce gender stereotypes.

**Solutions**:
- Vary the contexts and roles in examples
- Ensure diverse representation in personas
- Avoid scenarios that reinforce stereotypes (e.g., always showing men in technical roles and women in assistant roles)
- Use gender-neutral names in examples or a balanced mix of gendered names

## Implementation Guide

### Auditing Existing Documentation

1. **Search for Obvious Terms**: Use find/replace to locate gendered terms
2. **Review Pronouns**: Check for default use of "he" or awkward "he/she" constructions
3. **Examine Examples and Scenarios**: Ensure diverse representation
4. **Check Visual Elements**: Review illustrations, icons, and other visual elements for stereotyping

### Creating New Documentation

1. **Style Guide**: Develop or adopt an inclusive language style guide
2. **Templates**: Create templates with inclusive language built in
3. **Review Process**: Include inclusive language as a specific review criterion
4. **Tools**: Consider using tools like Textio or Gender Decoder to check for bias

## Examples in Practice

### Before and After Examples

**Before**: "When a user logs in, he will be directed to his dashboard."

**After**: "When users log in, they will be directed to their dashboards."

---

**Before**: "The system administrator should ensure he has backed up the database before upgrading."

**After**: "Ensure the database is backed up before upgrading."

---

**Before**: "If a customer forgets his password, he can use the 'Forgot Password' link."

**After**: "Customers who forget their passwords can use the 'Forgot Password' link."

## Industry Leaders

Several organizations have developed excellent resources for inclusive technical writing:

- **Google Developer Documentation Style Guide**: Includes comprehensive guidance on inclusive language
- **Microsoft Writing Style Guide**: Provides detailed examples of inclusive alternatives
- **The Responsible Communication Style Guide**: Offers guidance beyond gender to include disability, race, and other aspects of identity

## Conclusion

Creating gender-inclusive technical documentation is not just about political correctness—it's about effective communication that reaches and respects all users. By implementing these straightforward guidelines, technical writers can create content that is more precise, professional, and welcoming to everyone.`
  },
  {
    id: '10',
    title: 'Designing AI Systems with Gender Equality in Mind',
    description: 'A comprehensive course on developing artificial intelligence that promotes rather than undermines gender equality.',
    type: 'course',
    url: 'https://www.edx.org/course/ai-ethics-gender-perspective',
    imageUrl: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c',
    tags: ['AI', 'ethics', 'design', 'gender equality', 'technology development'],
    createdAt: Date.now() - 85 * 24 * 60 * 60 * 1000,
    readTime: 240
  },
  {
    id: '11',
    title: 'The Economic Case for Gender Equality in Tech',
    description: 'Research and data demonstrating how gender diversity drives innovation, productivity, and financial performance.',
    type: 'article',
    url: 'https://example.com/economic-case-gender-equality',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-c5e24a6751e7',
    tags: ['business', 'economics', 'diversity', 'innovation'],
    createdAt: Date.now() - 100 * 24 * 60 * 60 * 1000,
    readTime: 16,
    content: `# The Economic Case for Gender Equality in Tech

While promoting gender equality in technology is fundamentally a matter of fairness and human rights, there is also a compelling business case for diversity. This article examines the economic benefits of gender equality in the tech sector, backed by research and real-world examples.

## Financial Performance

Multiple studies have demonstrated a correlation between gender diversity and financial performance:

- McKinsey's "Diversity Wins" report found that companies in the top quartile for gender diversity on executive teams were 25% more likely to have above-average profitability than companies in the fourth quartile.

- A Morgan Stanley analysis of 1,600+ global companies found that those with more gender diversity experienced 0.7% higher return on equity (ROE) and 1.1% higher return on assets (ROA) than less diverse peers.

- Credit Suisse Research Institute's study of 3,000 companies globally showed that organizations with at least one female board member outperformed those with no women on the board by 3.5% in compound annual growth rate (CAGR).

## Innovation Outcomes

Gender diversity has been linked to enhanced innovation capabilities:

- A Boston Consulting Group study found that companies with above-average diversity on their management teams reported innovation revenue 19 percentage points higher than companies with below-average leadership diversity.

- Research published in the Harvard Business Review demonstrated that teams with equal gender representation were more likely to experiment, be creative, and share knowledge.

- Patent teams with gender diversity produce patents that receive 34% more citations, indicating higher quality and impact of innovations.

## Market Insights and Product Development

Gender-diverse teams better understand and address diverse customer needs:

- Women influence 85% of consumer purchasing decisions globally, making their perspective crucial in product development.

- Products developed by diverse teams are more likely to consider the needs of underrepresented users, expanding market reach.

- Case studies show that products designed without women's input have failed to address critical needs or even created safety issues for female users.

## Talent Acquisition and Retention

Gender equality initiatives impact an organization's ability to attract and retain talent:

- 76% of job seekers consider workplace diversity important when evaluating companies and job offers.

- Companies with strong reputations for gender equality receive twice as many applications per opening, allowing them to select from a larger talent pool.

- Organizations with inclusive cultures experience 22% lower turnover rates, reducing recruitment costs and preserving institutional knowledge.

## Risk Mitigation

Gender diversity can help companies avoid costly mistakes:

- Diverse teams are more likely to identify potential risks in products, services, and business strategies before they become problems.

- Companies with gender-diverse leadership are less likely to face discrimination lawsuits and negative publicity related to gender bias.

- Research shows that diverse teams make better decisions 87% of the time, with fewer cognitive biases affecting judgment.

## Case Studies

### Sodexo

This global food services and facilities management company implemented a comprehensive gender equality initiative and tracked the results:

- Operating margins were 8% higher in units with gender-balanced management
- Employee engagement was 14% higher in balanced units
- Client retention was 9% higher in balanced units
- Safety performance was 12% better in balanced units

### Tech Startups and Funding

First Round Capital analyzed 10 years of their investment data and found:

- Startups with at least one female founder performed 63% better than all-male founding teams
- The top 10% of their portfolio in terms of value creation had twice the number of female founders as the rest of the portfolio

## Implementation Strategies

Organizations seeking to realize these economic benefits should consider:

1. **Measurement and Accountability**: Set specific diversity goals and hold leaders accountable
2. **Inclusive Recruitment**: Implement blind resume screening, diverse interview panels, and inclusive job descriptions
3. **Retention Initiatives**: Address pay equity, promotion bias, and work-life balance
4. **Inclusive Culture**: Train managers on inclusive leadership and address unconscious bias
5. **Supplier Diversity**: Extend gender equality efforts to the supply chain

## Conclusion

The economic case for gender equality in tech is clear and compelling. Organizations that successfully build gender-diverse teams and inclusive cultures don't just do the right thing ethically—they gain significant competitive advantages in innovation, financial performance, talent acquisition, and market insight.`
  },
  {
    id: '12',
    title: 'Coding Bootcamps for Women and Non-Binary Individuals',
    description: 'A comprehensive guide to programs designed to help women and non-binary people enter the tech industry.',
    type: 'course',
    url: 'https://www.codecademy.com/learn/paths/web-development',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    tags: ['education', 'coding', 'career transition', 'bootcamps'],
    createdAt: Date.now() - 50 * 24 * 60 * 60 * 1000,
    readTime: 180
  },
  {
    id: '13',
    title: 'Gender-Inclusive UX/UI Design Principles',
    description: 'How to create digital interfaces that work well for users across the gender spectrum.',
    type: 'article',
    url: 'https://example.com/inclusive-ux-design',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c',
    tags: ['UX', 'UI', 'design', 'inclusion', 'accessibility'],
    createdAt: Date.now() - 40 * 24 * 60 * 60 * 1000,
    readTime: 12,
    content: `# Gender-Inclusive UX/UI Design Principles

Creating digital products that work well for everyone requires thoughtful consideration of gender inclusivity. This article outlines key principles and practical techniques for designing more inclusive user experiences.

## Why Gender-Inclusive Design Matters

Gender-inclusive design:

- Expands your user base by making products accessible to more people
- Reduces frustration and barriers for users across the gender spectrum
- Prevents inadvertently alienating potential customers
- Demonstrates your commitment to equality and inclusion
- Often results in designs that are better for all users

## Key Principles

### 1. Question Assumptions About Your Users

**Principle**: Don't assume binary gender or heteronormative experiences.

**Practices**:
- Create user personas that represent diverse gender identities and experiences
- Include non-binary and transgender users in user research
- Question whether gender is relevant to the task or feature you're designing
- Consider intersectionality (how gender interacts with other aspects of identity)

### 2. Be Thoughtful About Data Collection

**Principle**: Only collect gender information when necessary, and do so respectfully.

**Practices**:
- Ask yourself: "Do we really need this data? How will it be used?"
- If gender data is needed, provide inclusive options:
  - Include options beyond binary male/female (e.g., non-binary, prefer to self-describe, prefer not to say)
  - Allow users to select multiple options if relevant
  - Consider using an open text field
- Make gender fields optional when possible
- Explain why you're collecting gender information

### 3. Use Inclusive Visual Design

**Principle**: Ensure visual elements don't reinforce stereotypes or exclude certain users.

**Practices**:
- Audit iconography for gender stereotypes (e.g., using a dress silhouette to represent all women)
- Use diverse and representative imagery
- Consider color choices (avoid strict "blue for boys, pink for girls" coding)
- Ensure avatars and character options represent diverse gender expressions
- Test designs with diverse user groups

### 4. Create Flexible User Journeys

**Principle**: Design flows that accommodate diverse experiences and preferences.

**Practices**:
- Avoid forcing users into gendered paths unless absolutely necessary
- Provide alternatives to gendered product categories or recommendations
- Allow users to customize their experience based on preferences rather than assumed gender
- Design for different levels of privacy needs

### 5. Use Inclusive Language

**Principle**: Communicate in ways that respect and include all users.

**Practices**:
- Use gender-neutral terms (e.g., "everyone" instead of "guys," "server" instead of "waitress")
- Avoid assumptions in examples and scenarios
- Consider localizing gender-inclusive language appropriately for different cultures
- Allow users to specify their pronouns and use them consistently

## Case Studies

### Inclusive Form Design: Airbnb

Airbnb redesigned their signup form to be more inclusive by:
- Making the title field optional
- Offering "Other" as a gender option with a free text field
- Allowing users to specify their pronouns
- Separating gender from title/honorifics

These changes reduced form abandonment rates and increased user satisfaction.

### Gender-Neutral E-Commerce: Sephora

Sephora improved their shopping experience by:
- Organizing products by type, concern, and ingredient rather than gender
- Using diverse models for all product categories
- Training their recommendation algorithm on preferences rather than assumed gender
- Creating inclusive search functionality

These changes expanded their customer base and increased engagement from previously underserved groups.

### Dating App Inclusivity: Lex

This text-based dating app designed for the LGBTQ+ community:
- Focuses on connections based on interests rather than appearance
- Allows users to describe themselves in their own words
- Provides flexible identity options
- Creates community guidelines that explicitly value inclusivity

## Implementation Checklist

When designing or auditing a product for gender inclusivity:

✓ Review all form fields that ask for gender or title  
✓ Audit language for gendered terms and assumptions  
✓ Examine visual elements for stereotypes or exclusion  
✓ Test user journeys for flexibility and inclusivity  
✓ Include diverse users in research and testing  
✓ Create documentation that guides future design decisions  

## Conclusion

Gender-inclusive design is not about special accommodations—it's about creating better products that work well for more people. By questioning assumptions, being thoughtful about data collection, using inclusive visuals and language, and creating flexible user journeys, designers can create experiences that respect and welcome users across the gender spectrum.`
  },
  {
    id: '14',
    title: 'Negotiation Strategies for Women in Tech',
    description: 'Practical techniques for effective salary and promotion negotiations, addressing specific challenges women often face.',
    type: 'course',
    url: 'https://www.linkedin.com/learning/negotiation-strategies-for-women',
    imageUrl: 'https://images.unsplash.com/photo-1573497620292-1c1381229a3f',
    tags: ['career', 'negotiation', 'salary', 'professional development'],
    createdAt: Date.now() - 35 * 24 * 60 * 60 * 1000,
    readTime: 90
  },
  {
    id: '15',
    title: 'Building Gender-Balanced Engineering Teams',
    description: 'Strategies for recruiting, retaining, and promoting women in technical roles.',
    type: 'article',
    url: 'https://example.com/gender-balanced-teams',
    imageUrl: 'https://images.unsplash.com/photo-1573164713712-03790a178651',
    tags: ['recruitment', 'retention', 'team building', 'leadership'],
    createdAt: Date.now() - 25 * 24 * 60 * 60 * 1000,
    readTime: 15,
    content: `# Building Gender-Balanced Engineering Teams

Creating gender-balanced engineering teams isn't just about fairness—it's about building better products, fostering innovation, and gaining competitive advantage. This article provides practical strategies for recruiting, retaining, and promoting women in technical roles.

## The Current Landscape

Despite increasing attention to diversity in tech, progress remains slow:

- Women hold only about 25% of technical roles in the industry
- The percentage drops to 16% for engineering leadership positions
- Retention is a significant challenge, with women leaving tech roles at 1.5x the rate of men
- The "pipeline problem" is only part of the issue—culture and systems play major roles

## Recruitment Strategies

### Sourcing Diverse Candidates

- Partner with organizations focused on women in tech (Women Who Code, Girls Who Code, AnitaB.org)
- Attend conferences and events that attract diverse technical talent
- Create internship and apprenticeship programs with diverse educational institutions
- Implement employee referral programs that incentivize diverse referrals

### Job Descriptions and Requirements

- Use gender-neutral language (tools like Textio or Gender Decoder can help)
- Focus on must-have skills rather than nice-to-haves (women are less likely to apply unless they meet 100% of listed requirements)
- Highlight inclusive benefits and policies
- Showcase diverse team members and leaders on career pages

### Interview Process

- Implement structured interviews with consistent questions and evaluation criteria
- Ensure diverse interview panels
- Use blind technical assessments where possible
- Train interviewers on unconscious bias
- Set diversity goals for candidate slates

## Retention Strategies

### Inclusive Culture

- Establish and enforce codes of conduct
- Address "bro culture" and microaggressions proactively
- Create psychological safety for all team members
- Recognize and value different communication and working styles
- Implement zero-tolerance policies for harassment

### Growth and Development

- Provide mentorship and sponsorship programs
- Create clear, objective promotion criteria
- Offer technical leadership development specifically for women
- Ensure equal access to challenging projects and high-visibility opportunities
- Track and address disparities in performance reviews and feedback

### Work-Life Integration

- Implement flexible work policies that work for everyone
- Offer parental leave for all parents and support for returning to work
- Avoid scheduling critical meetings during school pickup/dropoff times
- Create a culture that values results over face time
- Provide support for caregiving responsibilities

## Promotion and Leadership

### Identifying Potential

- Review promotion criteria for unintentional bias
- Proactively identify high-potential women for leadership development
- Create sponsorship programs pairing senior leaders with promising women engineers
- Track promotion rates by gender and address disparities

### Leadership Development

- Provide technical leadership tracks that don't require moving into management
- Create opportunities for visibility and recognition
- Offer executive coaching and leadership training
- Build communities of practice for women technical leaders

### Succession Planning

- Include women candidates in succession plans for key technical roles
- Set targets for gender representation in leadership
- Hold hiring managers accountable for developing diverse talent
- Celebrate and highlight women leaders as role models

## Measurement and Accountability

### Key Metrics

- Track gender representation at all levels and in all technical disciplines
- Measure recruitment funnel by gender (applications, interviews, offers, acceptances)
- Monitor promotion rates, time-in-role before promotion, and attrition by gender
- Conduct regular pay equity analyses

### Accountability Systems

- Set specific, measurable goals for gender balance
- Include diversity objectives in manager performance reviews
- Tie executive compensation to diversity outcomes
- Publish progress reports internally and externally

## Case Studies

### Etsy's Approach

Etsy increased its number of women engineers by 500% in one year through:
- Creating a "Hacker School" with grants for women
- Redesigning their interview process
- Implementing mentorship programs
- Focusing on building an inclusive culture

### Slack's Strategy

Slack achieved 31% women in technical roles (well above industry average) by:
- Setting specific diversity goals
- Implementing the "Rooney Rule" (interviewing at least one woman and underrepresented minority for each role)
- Creating employee resource groups
- Conducting regular pay equity reviews

## Getting Started: A Roadmap

1. **Assessment**: Gather data on your current state and identify key gaps
2. **Goal Setting**: Establish specific, measurable objectives
3. **Quick Wins**: Implement immediate changes to job descriptions and interview processes
4. **Culture Work**: Address underlying cultural issues that may be barriers
5. **Systems Change**: Revise processes for hiring, performance reviews, and promotions
6. **Accountability**: Create regular reporting and tie outcomes to leadership objectives

## Conclusion

Building gender-balanced engineering teams requires intentional effort across multiple dimensions—from recruitment and hiring to culture, development, and promotion practices. Organizations that commit to this work not only create more equitable workplaces but also gain significant advantages in innovation, product quality, and market understanding.`
  },
  {
    id: '16',
    title: 'Open Source Communities and Gender Inclusion',
    description: 'How to make open source projects and communities more welcoming and accessible to women contributors.',
    type: 'article',
    url: 'https://example.com/open-source-inclusion',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    tags: ['open source', 'community', 'contribution', 'inclusion'],
    createdAt: Date.now() - 15 * 24 * 60 * 60 * 1000,
    readTime: 13,
    content: `# Open Source Communities and Gender Inclusion

Open source software powers much of our digital world, yet women remain significantly underrepresented in open source communities. This article explores the barriers to participation and provides practical strategies for creating more inclusive open source projects.

## The Current State

The gender gap in open source is even more pronounced than in the broader tech industry:

- GitHub's 2017 survey found that only 3% of open source contributors identified as women
- A more recent study by Open Source Survey showed slight improvement to 5.27%
- Women's contributions are accepted at higher rates than men's when gender is not identifiable, but at lower rates when gender is known
- Women report more negative experiences and higher barriers to entry

## Why This Matters

Increasing gender diversity in open source communities:

- Brings different perspectives and approaches to problem-solving
- Expands the contributor base, leading to more robust projects
- Creates software that better serves diverse end users
- Provides valuable skill development and career advancement opportunities for women
- Helps address the broader tech gender gap by creating alternative pathways

## Barriers to Participation

### Cultural and Social Barriers

- Unwelcoming or hostile communication styles
- Lack of visible role models and mentors
- Impostor syndrome and confidence gaps
- Time constraints due to unequal domestic responsibilities
- Online harassment and discrimination

### Technical and Structural Barriers

- High barrier to entry for first-time contributors
- Lack of clear documentation and onboarding processes
- Contribution processes that favor those with significant uninterrupted time
- Limited recognition for non-code contributions
- Maintainer bias in reviewing and accepting contributions

## Strategies for Inclusion

### Community Guidelines and Governance

1. **Code of Conduct**
   - Implement and enforce a comprehensive code of conduct
   - Establish clear reporting mechanisms and response procedures
   - Train moderators and maintainers on handling violations

2. **Inclusive Leadership**
   - Diversify project leadership and maintainer teams
   - Create governance structures that distribute power
   - Recognize and reward inclusive behaviors

3. **Communication Norms**
   - Establish guidelines for respectful communication
   - Moderate discussion forums and issue trackers
   - Discourage aggressive or dismissive language

### Lowering Barriers to Entry

1. **Documentation and Onboarding**
   - Create clear, beginner-friendly documentation
   - Provide step-by-step guides for making first contributions
   - Offer multiple ways to contribute beyond code (documentation, design, testing)

2. **Mentorship Programs**
   - Establish formal mentorship opportunities
   - Create "buddy systems" for new contributors
   - Host regular office hours or help sessions

3. **Beginner-Friendly Issues**
   - Tag issues appropriate for newcomers
   - Provide detailed context and guidance in issue descriptions
   - Offer prompt, constructive feedback on contributions

### Creating Supportive Structures

1. **Recognition Systems**
   - Acknowledge all types of contributions
   - Highlight diverse contributors in project communications
   - Create equitable paths to maintainer status

2. **Flexible Participation Options**
   - Allow asynchronous participation
   - Create contribution opportunities that can be completed in small time increments
   - Support remote participation in events and meetings

3. **Targeted Outreach**
   - Partner with organizations supporting women in tech
   - Host workshops specifically for underrepresented groups
   - Create scholarships or stipends for contributors from underrepresented groups

## Case Studies

### Django Girls

This initiative introduces women to programming by teaching them how to build web applications using Django. Their approach includes:

- Free workshops specifically for women
- Comprehensive, beginner-friendly tutorials
- Supportive, encouraging environment
- Ongoing community support after workshops

The program has reached over 20,000 women worldwide and significantly increased female participation in the Django community.

### Outreachy

This program provides internships in open source for underrepresented groups, including women. Key elements:

- Paid internships (removing financial barriers)
- Dedicated mentorship
- Focus on creating a supportive experience
- Preparation period before application

Outreachy has brought hundreds of women into open source projects, with many becoming long-term contributors and maintainers.

### Rust Programming Language

The Rust community has achieved higher-than-average gender diversity through:

- Explicit community values emphasizing kindness and inclusion
- Moderation team with clear enforcement authority
- Recognition of non-code contributions
- Beginner-friendly documentation and support channels

## Implementation Guide

### For Project Maintainers

1. **Assessment**: Evaluate your current community climate and contribution processes
2. **Documentation**: Review and improve onboarding materials
3. **Contribution Process**: Simplify and clarify how to contribute
4. **Community Management**: Implement and enforce codes of conduct
5. **Mentorship**: Create structured support for newcomers
6. **Recognition**: Ensure equitable acknowledgment of all contributions

### For Organizations

1. **Support**: Allocate resources for employees to contribute to open source
2. **Sponsorship**: Fund programs that bring underrepresented groups into open source
3. **Metrics**: Track and report on diversity in open source contributions
4. **Training**: Provide education on open source contribution
5. **Recognition**: Value open source contributions in hiring and promotion

## Conclusion

Creating gender-inclusive open source communities requires intentional effort but yields significant benefits for projects, contributors, and the broader tech ecosystem. By addressing barriers to participation and implementing supportive structures, open source communities can tap into the full spectrum of talent and perspective available in the tech industry.`
  },
  {
    id: '17',
    title: 'Data Feminism: Principles for Equitable Data Science',
    description: 'How to apply feminist principles to data collection, analysis, and visualization for more ethical and inclusive outcomes.',
    type: 'course',
    url: 'https://www.edx.org/course/data-feminism',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['data science', 'ethics', 'feminism', 'research', 'visualization'],
    createdAt: Date.now() - 55 * 24 * 60 * 60 * 1000,
    readTime: 150
  },
  {
    id: '18',
    title: 'Venture Capital and the Gender Funding Gap',
    description: 'Analysis of disparities in startup funding and strategies for women entrepreneurs to overcome these challenges.',
    type: 'article',
    url: 'https://example.com/vc-gender-gap',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-593bc073d938',
    tags: ['entrepreneurship', 'funding', 'startups', 'venture capital'],
    createdAt: Date.now() - 70 * 24 * 60 * 60 * 1000,
    readTime: 17,
    content: `# Venture Capital and the Gender Funding Gap

Despite women's growing presence in entrepreneurship, a significant disparity persists in venture capital funding. This article examines the gender funding gap, its causes, and strategies for addressing this persistent challenge.

## The Funding Gap by the Numbers

Recent data reveals the extent of the gender funding gap:

- Women-founded startups received just 2.3% of venture capital funding in 2020
- Companies with mixed-gender founding teams received 11.7% of funding
- The average deal size for women-founded companies was 40% smaller than for male-founded companies
- Only 12% of decision-makers at VC firms are women
- Companies founded by women of color received less than 0.5% of venture capital

These disparities exist despite research showing that women-founded startups generate higher revenue—more than twice as much per dollar invested—and are more likely to survive long-term.

## Root Causes

### Structural Issues in Venture Capital

1. **Homogeneous Networks**
   - VCs often rely on warm introductions from existing networks
   - Pattern matching based on previous successful founders (typically male)
   - Limited diversity among investment decision-makers

2. **Unconscious Bias in Evaluation**
   - Research shows investors ask different questions to male vs. female founders
   - Men are often evaluated on potential, while women are evaluated on performance
   - Perception gaps in how traits like confidence and assertiveness are interpreted

3. **Industry and Market Focus**
   - Overemphasis on male-dominated sectors like enterprise software
   - Undervaluation of markets primarily serving women
   - Less recognition of women-focused problem spaces

### Pitch and Presentation Factors

1. **Questioning Differences**
   - Male founders receive more promotional questions (focused on gains)
   - Female founders receive more preventative questions (focused on preventing losses)
   - This framing affects funding outcomes significantly

2. **Perception of Confidence**
   - Behaviors perceived as confident in men may be seen as arrogant in women
   - Women face a narrower band of acceptable presentation styles
   - The "confidence gap" can affect pitch delivery and reception

3. **Network Access**
   - Less access to warm introductions to investors
   - Fewer opportunities for informal relationship building
   - Limited exposure to insider knowledge about fundraising

## Strategies for Women Entrepreneurs

### Preparation and Positioning

1. **Research and Targeting**
   - Identify investors with track records of funding women entrepreneurs
   - Research investor preferences, portfolio companies, and investment theses
   - Seek out female investors and allies within firms

2. **Pitch Framing**
   - Anticipate and preemptively address preventative questions
   - Balance vision and ambition with demonstrated traction
   - Prepare for different types of questions than male counterparts might receive

3. **Team Composition**
   - Consider strategic male co-founders if appropriate for your business
   - Build diverse advisory boards with industry credibility
   - Highlight team strengths and complementary skill sets

### Alternative Funding Pathways

1. **Non-Traditional VC Sources**
   - Explore women-focused funds and angel groups
   - Consider corporate venture capital with diversity initiatives
   - Investigate strategic partnerships as funding alternatives

2. **Alternative Financing**
   - Revenue-based financing models
   - Crowdfunding platforms
   - Small business grants and competitions
   - Customer-funded growth strategies

3. **Accelerators and Incubators**
   - Apply to programs with strong track records supporting women founders
   - Leverage these programs for network building and investor introductions
   - Use demo days as platforms for visibility

### Network Building and Support

1. **Founder Communities**
   - Join women founder networks and communities
   - Participate in peer mentoring and support groups
   - Share resources, introductions, and strategies

2. **Strategic Relationship Development**
   - Build relationships with investors before you need funding
   - Seek mentors with fundraising experience
   - Develop relationships with male allies in the investment community

3. **Visibility and Thought Leadership**
   - Establish expertise through content, speaking, and media
   - Participate in pitch competitions and showcase events
   - Build public credibility that translates to investor credibility

## Systemic Solutions

### Investor-Side Changes

1. **Diverse Investment Teams**
   - Increase representation of women and underrepresented groups as investors
   - Create inclusive cultures within VC firms
   - Implement bias training for all investment team members

2. **Process Improvements**
   - Standardize pitch evaluation criteria
   - Track diversity metrics in deal flow and investments
   - Set targets for considering diverse founders

3. **Expanded Networks**
   - Proactively source deals beyond traditional networks
   - Attend events focused on women entrepreneurs
   - Create open office hours and accessible entry points

### Ecosystem Support

1. **Policy Initiatives**
   - Tax incentives for investments in women-led companies
   - Government-backed funds focused on underrepresented founders
   - Reporting requirements for diversity in venture portfolios

2. **Limited Partner Influence**
   - LP requirements for diversity considerations in investment strategies
   - Funding for women-led VC firms
   - Accountability for diversity outcomes

3. **Educational Programs**
   - Investor education on bias and missed opportunities
   - Founder programs specifically addressing fundraising challenges
   - Transparent information sharing about the fundraising process

## Success Stories and Case Studies

### Arlan Hamilton and Backstage Capital

Arlan Hamilton founded Backstage Capital to invest in companies led by underrepresented founders. Starting from scratch while homeless, she has now invested in over 170 startups led by women, people of color, and LGBTQ+ founders, demonstrating both the opportunity and the possibility of change.

### Female Founder Fund

This seed-stage fund focuses exclusively on women-led companies and has invested in successful startups like Zola, Tala, and Maven. Their portfolio companies have collectively raised over $800 million in follow-on funding, challenging the notion that investing in women is riskier.

### All Raise

This nonprofit organization is working to increase diversity in funders and founders. Their initiatives include bootcamps for emerging investors, founder programs, and VC Cohorts that have helped increase the percentage of female decision-makers at VC firms.

## Conclusion

The gender funding gap in venture capital represents both a significant inequity and a massive missed opportunity. By understanding the structural and behavioral factors that contribute to this gap, women entrepreneurs can develop more effective strategies for fundraising. Simultaneously, investors who recognize and address these biases can gain competitive advantage by tapping into overlooked opportunities. Creating a more equitable funding landscape will require concerted effort from entrepreneurs, investors, and ecosystem supporters—but the potential rewards in innovation, returns, and economic growth make this effort well worthwhile.`
  },
  {
    id: '19',
    title: 'Cybersecurity from a Gender Perspective',
    description: 'How gender affects online security risks and protective strategies for women and marginalized groups.',
    type: 'course',
    url: 'https://www.futurelearn.com/courses/cyber-security-basics',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    tags: ['cybersecurity', 'online safety', 'privacy', 'digital security'],
    createdAt: Date.now() - 20 * 24 * 60 * 60 * 1000,
    readTime: 120
  },
  {
    id: '20',
    title: 'Intersectionality in Tech: Beyond Gender',
    description: 'Understanding how gender intersects with race, class, disability, and other identities in technology contexts.',
    type: 'article',
    url: 'https://example.com/intersectionality-tech',
    imageUrl: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4',
    tags: ['intersectionality', 'diversity', 'inclusion', 'equity'],
    createdAt: Date.now() - 10 * 24 * 60 * 60 * 1000,
    readTime: 18,
    content: `# Intersectionality in Tech: Beyond Gender

While gender equality in technology is crucial, focusing on gender alone provides an incomplete picture. Intersectionality—the framework for understanding how aspects of a person's social and political identities combine to create different modes of discrimination or privilege—is essential for creating truly inclusive tech environments.

## Understanding Intersectionality

The term "intersectionality" was coined by legal scholar Kimberlé Crenshaw in 1989 to describe how race and gender intersect in shaping Black women's experiences. In technology contexts, intersectionality helps us understand how gender combines with:

- Race and ethnicity
- Socioeconomic background
- Disability status
- Age
- Sexual orientation
- Gender identity
- National origin
- Educational background
- And other aspects of identity

These intersections create unique experiences that cannot be understood by examining any single factor in isolation.

## The Data on Intersectionality in Tech

Research reveals how different intersections of identity affect experiences in technology:

- Black women hold just 3% of computing jobs, compared to 25% for white women
- Latina women represent only 1% of the computing workforce
- LGBTQ+ women in tech report higher rates of harassment than both straight women and LGBTQ+ men
- Women with disabilities face some of the highest unemployment rates in tech fields
- Women from lower socioeconomic backgrounds have less access to technology education and networking opportunities

These statistics demonstrate that addressing gender inequality requires nuanced approaches that consider multiple dimensions of identity.

## Common Challenges at Different Intersections

### Women of Color

- Face "double bias" of both gender and racial stereotypes
- Often experience higher scrutiny and lower recognition
- Receive less mentorship and sponsorship
- Report feeling like they must represent their entire gender and racial/ethnic group

### LGBTQ+ Women

- Navigate both gender bias and heteronormativity/cisnormativity
- May face pressure to conceal aspects of identity
- Experience higher rates of harassment and microaggressions
- Often lack role models with similar identities in leadership positions

### Women with Disabilities

- Encounter physical and digital accessibility barriers
- Face stereotypes about capabilities and competence
- Often excluded from networking and social events
- Receive less accommodation for their specific needs

### Women from Non-Traditional Educational Backgrounds

- Face credential bias despite demonstrated skills
- Have less access to established professional networks
- May lack cultural capital and "unwritten rules" knowledge
- Often concentrated in lower-paying technical roles

## Strategies for Inclusive Practices

### For Organizations

1. **Intersectional Data Collection and Analysis**
   - Collect demographic data across multiple dimensions
   - Analyze experiences and outcomes at intersections
   - Set goals that address specific intersectional gaps
   - Report progress transparently

2. **Targeted Programs and Support**
   - Create affinity groups for specific intersectional identities
   - Develop mentorship programs addressing unique challenges
   - Provide resources tailored to different needs
   - Ensure accessibility in all programs and spaces

3. **Policy and Practice Review**
   - Audit policies for disparate impact on different groups
   - Implement flexible work arrangements that accommodate diverse needs
   - Create inclusive benefits packages (e.g., covering gender-affirming care, cultural holidays)
   - Establish clear anti-harassment policies that address intersectional harassment

4. **Leadership Development**
   - Identify and develop talent from underrepresented intersectional groups
   - Create sponsorship programs with accountability measures
   - Ensure diverse representation in succession planning
   - Provide leadership training that addresses intersectional challenges

### For Individuals

1. **Allyship Across Differences**
   - Educate yourself about experiences different from your own
   - Amplify voices from underrepresented intersectional groups
   - Use privilege to create access and opportunities for others
   - Practice active listening without defensiveness

2. **Coalition Building**
   - Find common ground across different identity groups
   - Create solidarity networks that support multiple causes
   - Share resources and platforms across communities
   - Develop collective advocacy strategies

3. **Personal Development**
   - Recognize your own intersecting identities and how they shape your experience
   - Build relationships with people across different identity intersections
   - Develop skills in navigating different cultural contexts
   - Practice self-advocacy while supporting others

## Case Studies in Intersectional Inclusion

### Project Include

Founded by Ellen Pao, Project Include takes an intersectional approach to tech inclusion. Their comprehensive recommendations address the needs of people across multiple dimensions of identity, with specific guidance for supporting women of color, transgender employees, and other groups at various intersections.

### Lesbians Who Tech

This community addresses the intersection of gender and sexual orientation, creating visibility and opportunities for queer women in technology. Their scholarship program specifically supports LGBTQ+ women of color entering tech fields, recognizing the additional barriers these individuals face.

### AnitaB.org's Systers Communities

These communities create spaces for women in computing with shared intersectional identities, including Black Women in Computing, Latinas in Computing, LGBTQ+ Systers, and others. These groups provide targeted support, mentorship, and advocacy.

## Implementing Intersectional Approaches

### Assessment Framework

1. **Data Collection**: Gather information about experiences across multiple identity dimensions
2. **Gap Analysis**: Identify specific challenges at different intersections
3. **Program Evaluation**: Assess whether initiatives benefit all groups or only some
4. **Outcome Measurement**: Track progress for different intersectional groups

### Implementation Steps

1. **Leadership Buy-in**: Educate leaders about intersectionality and its importance
2. **Community Engagement**: Involve people with different intersectional identities in planning
3. **Resource Allocation**: Ensure resources are distributed to address specific intersectional needs
4. **Accountability**: Create mechanisms to track and report on intersectional progress

## Conclusion

An intersectional approach to gender equality in technology recognizes that women are not a monolithic group with identical experiences and challenges. By understanding and addressing the unique barriers faced by women across different intersections of identity, organizations can create more effective and inclusive initiatives that benefit everyone. True progress requires moving beyond one-dimensional approaches to embrace the full complexity of human identity and experience in the tech ecosystem.`
  }
];

export const quizzes: Quiz[] = [
  {
    id: '1',
    title: 'Gender Equality Basics',
    description: 'Test your knowledge of fundamental gender equality concepts.',
    questions: [
      {
        id: '1-1',
        question: 'What is gender bias?',
        options: [
          'Preferring one gender over another',
          'Unconscious attitudes that influence our perceptions about gender',
          'Laws that discriminate based on gender',
          'All of the above'
        ],
        correctAnswer: 3,
        explanation: 'Gender bias encompasses all these aspects - conscious preferences, unconscious attitudes, and systemic discrimination.'
      },
      {
        id: '1-2',
        question: 'Which of the following is NOT typically a barrier to gender equality in tech?',
        options: [
          'Lack of role models',
          'Unconscious bias in hiring',
          'Equal pay legislation',
          'Inflexible work arrangements'
        ],
        correctAnswer: 2,
        explanation: 'Equal pay legislation actually aims to promote gender equality, while the other options represent barriers.'
      },
      {
        id: '1-3',
        question: 'What percentage of the global technology workforce is female?',
        options: [
          'Around 50%',
          'Around 35%',
          'Around 25%',
          'Around 10%'
        ],
        correctAnswer: 2,
        explanation: 'Women make up approximately 25% of the global technology workforce, though this varies by country and specific tech field.'
      }
    ]
  },
  {
    id: '2',
    title: 'Digital Inclusion Challenge',
    description: 'How much do you know about creating inclusive digital environments?',
    questions: [
      {
        id: '2-1',
        question: 'Which of these is an example of inclusive design in digital products?',
        options: [
          'Using technical jargon to appear professional',
          'Designing primarily for power users',
          'Ensuring color schemes work for colorblind users',
          'Requiring the latest devices to access features'
        ],
        correctAnswer: 2,
        explanation: 'Inclusive design considers diverse users, including those with disabilities like color blindness.'
      },
      {
        id: '2-2',
        question: 'What is "algorithmic bias"?',
        options: [
          'When AI systems reflect or amplify existing prejudices',
          'When algorithms run more slowly for certain users',
          'A programming error that causes incorrect calculations',
          'The tendency of algorithms to favor simple solutions'
        ],
        correctAnswer: 0,
        explanation: 'Algorithmic bias occurs when AI systems and algorithms reflect or amplify existing social prejudices, often due to biased training data.'
      }
    ]
  },
  {
    id: '3',
    title: 'Women in Computing History',
    description: 'Discover the often overlooked contributions of women to computing history.',
    questions: [
      {
        id: '3-1',
        question: 'Who is considered the first computer programmer?',
        options: [
          'Grace Hopper',
          'Ada Lovelace',
          'Katherine Johnson',
          'Margaret Hamilton'
        ],
        correctAnswer: 1,
        explanation: 'Ada Lovelace wrote the first algorithm intended for implementation on Charles Babbage\'s Analytical Engine in the 1840s, making her the first computer programmer.'
      },
      {
        id: '3-2',
        question: 'Which woman coined the term "software engineering"?',
        options: [
          'Margaret Hamilton',
          'Grace Hopper',
          'Jean Sammet',
          'Frances Allen'
        ],
        correctAnswer: 0,
        explanation: 'Margaret Hamilton, who led the team that wrote the onboard flight software for NASA\'s Apollo missions, coined the term "software engineering" to give legitimacy to the discipline.'
      },
      {
        id: '3-3',
        question: 'Who invented the compiler, which translates written instructions into code that computers can read?',
        options: [
          'Ada Lovelace',
          'Grace Hopper',
          'Katherine Johnson',
          'Hedy Lamarr'
        ],
        correctAnswer: 1,
        explanation: 'Grace Hopper invented the first compiler in 1952, which translated written language into machine code. She also popularized the term "debugging" after removing an actual moth from a computer.'
      }
    ]
  },
  {
    id: '4',
    title: 'Gender-Inclusive Language',
    description: 'Test your knowledge of gender-inclusive language in professional and technical contexts.',
    questions: [
      {
        id: '4-1',
        question: 'Which of the following is an example of gender-inclusive language?',
        options: [
          'Mankind has always strived for technological advancement',
          'The user should enter his password',
          'Each team member should submit their report by Friday',
          'The stewardess will assist you with your luggage'
        ],
        correctAnswer: 2,
        explanation: 'Using "their" as a singular pronoun is gender-inclusive as it doesn\'t assume the gender of the team members.'
      },
      {
        id: '4-2',
        question: 'Which term is most gender-inclusive?',
        options: [
          'Manpower',
          'Workforce',
          'Manmade',
          'Mankind'
        ],
        correctAnswer: 1,
        explanation: '"Workforce" is gender-inclusive because it doesn\'t contain gendered language, unlike "manpower," "manmade," or "mankind."'
      },
      {
        id: '4-3',
        question: 'In technical documentation, what\'s the best approach for gender inclusivity?',
        options: [
          'Alternate between using "he" and "she"',
          'Always use "he/she" or "s/he"',
          'Use gender-neutral terms and plural forms where possible',
          'Always address the reader as "you"'
        ],
        correctAnswer: 2,
        explanation: 'Using gender-neutral terms and plural forms (e.g., "users" instead of "the user") helps avoid gendered pronouns altogether.'
      }
    ]
  },
  {
    id: '5',
    title: 'Unconscious Bias in Tech',
    description: 'Identify and understand unconscious biases that affect gender equality in technology.',
    questions: [
      {
        id: '5-1',
        question: 'What is "affinity bias"?',
        options: [
          'The tendency to prefer people who are similar to ourselves',
          'The assumption that someone is competent based on their appearance',
          'The preference for working with familiar technologies',
          'The bias toward hiring candidates from prestigious universities'
        ],
        correctAnswer: 0,
        explanation: 'Affinity bias is our tendency to connect with people who share similar interests, experiences, and backgrounds, which can lead to homogeneous teams.'
      },
      {
        id: '5-2',
        question: 'Research shows that in performance reviews, women are more likely than men to receive feedback about:',
        options: [
          'Technical skills',
          'Leadership potential',
          'Communication style',
          'Strategic thinking'
        ],
        correctAnswer: 2,
        explanation: 'Studies show women receive more feedback about communication style and personality traits, while men receive more feedback about technical skills and business results.'
      },
      {
        id: '5-3',
        question: 'What is "stereotype threat"?',
        options: [
          'When people avoid stereotyping others',
          'When people conform to negative stereotypes about their group',
          'When people feel at risk of confirming negative stereotypes about their group',
          'When people actively fight against stereotypes'
        ],
        correctAnswer: 2,
        explanation: 'Stereotype threat occurs when people feel at risk of confirming negative stereotypes about their social group, which can impair performance and increase anxiety.'
      }
    ]
  },
  {
    id: '6',
    title: 'Gender Pay Gap in Technology',
    description: 'Understand the factors contributing to the gender pay gap in the tech industry.',
    questions: [
      {
        id: '6-1',
        question: 'On average, women in tech earn what percentage of what men earn for the same work?',
        options: [
          '95-100%',
          '85-95%',
          '75-85%',
          'Less than 75%'
        ],
        correctAnswer: 1,
        explanation: 'Studies consistently show that women in tech earn about 85-95% of what men earn for comparable work, even after controlling for factors like experience and education.'
      },
      {
        id: '6-2',
        question: 'Which of the following is NOT a major contributor to the gender pay gap in tech?',
        options: [
          'Differences in salary negotiation',
          'Unconscious bias in performance evaluation',
          'Women\'s inherent preference for lower-paying roles',
          'Lack of salary transparency'
        ],
        correctAnswer: 2,
        explanation: 'There is no evidence that women inherently prefer lower-paying roles. The gender pay gap is caused by structural and social factors, not inherent preferences.'
      },
      {
        id: '6-3',
        question: 'The gender pay gap typically widens as women advance in their careers. Why?',
        options: [
          'Women become less interested in higher pay as they age',
          'Compounding effects of smaller raises and fewer promotions over time',
          'Men\'s technical skills improve more rapidly with age',
          'Women are more likely to accept pay cuts in senior roles'
        ],
        correctAnswer: 1,
        explanation: 'The gender pay gap often widens with seniority due to the compounding effects of smaller percentage raises, missed promotions, and career interruptions over time.'
      }
    ]
  },
  {
    id: '7',
    title: 'Inclusive Recruitment Practices',
    description: 'Learn about strategies for reducing bias and increasing diversity in tech hiring.',
    questions: [
      {
        id: '7-1',
        question: 'Which of these job description practices is most likely to encourage women to apply?',
        options: [
          'Emphasizing competitive environment and individual achievement',
          'Requiring candidates to meet 100% of listed qualifications',
          'Using gender-neutral language and focusing on company values',
          'Highlighting the technical complexity of the role'
        ],
        correctAnswer: 2,
        explanation: 'Research shows that job descriptions using gender-neutral language and emphasizing values like collaboration and impact attract more female applicants.'
      },
      {
        id: '7-2',
        question: 'What is "blind recruitment"?',
        options: [
          'Hiring without conducting interviews',
          'Removing identifying information like names and gender from applications',
          'Recruiting candidates without telling them the company name',
          'Hiring based solely on technical assessments'
        ],
        correctAnswer: 1,
        explanation: 'Blind recruitment involves removing identifying information (names, gender, age, etc.) from applications to reduce unconscious bias in the initial screening process.'
      },
      {
        id: '7-3',
        question: 'Which interview practice has been shown to reduce gender bias in hiring?',
        options: [
          'Unstructured interviews where each candidate is asked different questions',
          'Structured interviews with consistent questions and evaluation criteria',
          'Group interviews where candidates compete directly',
          'Stress interviews that test how candidates handle pressure'
        ],
        correctAnswer: 1,
        explanation: 'Structured interviews with predetermined questions and clear evaluation criteria reduce the impact of unconscious bias by ensuring all candidates are assessed on the same factors.'
      }
    ]
  },
  {
    id: '8',
    title: 'Gender and AI Ethics',
    description: 'Explore the ethical implications of gender bias in artificial intelligence systems.',
    questions: [
      {
        id: '8-1',
        question: 'Which of the following is an example of gender bias in AI systems?',
        options: [
          'Voice recognition systems that work better for male voices',
          'Facial recognition that works equally well for all genders',
          'Translation software that preserves gender-neutral language',
          'Image search results showing diverse representations'
        ],
        correctAnswer: 0,
        explanation: 'Many voice recognition systems have historically performed better for male voices because they were trained primarily on male voice data, demonstrating how training data bias affects AI performance.'
      },
      {
        id: '8-2',
        question: 'Why might an AI hiring tool discriminate against women?',
        options: [
          'AI is programmed to prefer male candidates',
          'If trained on historical hiring data that favored men',
          'Women typically provide less information on resumes',
          'AI naturally recognizes superior qualifications in male candidates'
        ],
        correctAnswer: 1,
        explanation: 'AI systems learn from historical data. If past hiring favored men, the AI will learn these patterns and perpetuate the bias unless specifically designed to counteract it.'
      },
      {
        id: '8-3',
        question: 'Which approach helps reduce gender bias in AI systems?',
        options: [
          'Using larger datasets without examining their composition',
          'Removing gender as a variable from all AI systems',
          'Having diverse teams develop and test AI systems',
          'Limiting AI to applications where gender is irrelevant'
        ],
        correctAnswer: 2,
        explanation: 'Diverse development teams are more likely to identify potential biases, consider different perspectives, and test for a wider range of scenarios, resulting in more equitable AI systems.'
      }
    ]
  },
  {
    id: '9',
    title: 'Mentorship and Sponsorship',
    description: 'Understand the difference between mentorship and sponsorship and their impact on gender equality.',
    questions: [
      {
        id: '9-1',
        question: 'What is the primary difference between a mentor and a sponsor?',
        options: [
          'Mentors are paid while sponsors are volunteers',
          'Mentors give advice while sponsors advocate for your advancement',
          'Mentors are within your organization while sponsors are external',
          'Mentors focus on technical skills while sponsors focus on soft skills'
        ],
        correctAnswer: 1,
        explanation: 'Mentors provide guidance, feedback, and advice, while sponsors actively advocate for your advancement, recommend you for opportunities, and use their influence to help you progress.'
      },
      {
        id: '9-2',
        question: 'Research shows that women in tech are:',
        options: [
          'More likely to have mentors than men',
          'Less likely to have sponsors than men',
          'Uninterested in mentorship opportunities',
          'More likely to become mentors themselves'
        ],
        correctAnswer: 1,
        explanation: 'Studies show that while women often have mentors, they are less likely than men to have sponsors who advocate for their advancement to leadership positions.'
      },
      {
        id: '9-3',
        question: 'Which of the following is most likely to help women advance to leadership positions in tech?',
        options: [
          'Having multiple mentors who provide advice',
          'Having a sponsor who advocates for them with senior leadership',
          'Participating in women-only networking events',
          'Receiving regular performance feedback'
        ],
        correctAnswer: 1,
        explanation: 'While all these factors can help, research consistently shows that sponsorship—having someone with influence advocate for your advancement—is the most critical factor in reaching leadership positions.'
      }
    ]
  },
  {
    id: '10',
    title: 'Inclusive Product Design',
    description: 'Learn how to create digital products that work well for users of all genders.',
    questions: [
      {
        id: '10-1',
        question: 'What is "default male bias" in product design?',
        options: [
          'When products are explicitly marketed to men',
          'When products are designed based on male preferences',
          'When products are designed with male users as the unstated default',
          'When male designers create products'
        ],
        correctAnswer: 2,
        explanation: 'Default male bias occurs when products are designed with male users as the unstated norm or default, often unintentionally, resulting in products that work less well for women and non-binary users.'
      },
      {
        id: '10-2',
        question: 'Which of these is an example of gender-inclusive product design?',
        options: [
          'Creating separate "for women" versions of products with simplified features',
          'Using pink color schemes for features targeted at women',
          'Designing health tracking apps that accommodate diverse body types and health needs',
          'Assuming gender based on user behavior and customizing accordingly'
        ],
        correctAnswer: 2,
        explanation: 'Gender-inclusive design considers diverse needs without stereotyping. Health apps that accommodate different body types and health needs (including menstruation, pregnancy, etc.) exemplify inclusive design.'
      },
      {
        id: '10-3',
        question: 'Why is diverse user testing important for product design?',
        options: [
          'It\'s a legal requirement for most digital products',
          'It helps identify issues that designers from dominant groups might miss',
          'It\'s only important for products specifically targeting women',
          'It slows down development but is politically necessary'
        ],
        correctAnswer: 1,
        explanation: 'Diverse user testing helps identify usability issues, assumptions, and pain points that designers from dominant groups might not experience or anticipate, resulting in better products for all users.'
      }
    ]
  },
  {
    id: '11',
    title: 'Gender and Cybersecurity',
    description: 'Understand how gender affects online security risks and protective strategies.',
    questions: [
      {
        id: '11-1',
        question: 'Which of the following is a gender-specific online security risk?',
        options: [
          'Phishing attacks',
          'Malware infections',
          'Non-consensual intimate image sharing ("revenge porn")',
          'Password theft'
        ],
        correctAnswer: 2,
        explanation: 'While anyone can be targeted, non-consensual intimate image sharing disproportionately affects women and is often gender-based, with different motivations and impacts than other cybersecurity threats.'
      },
      {
        id: '11-2',
        question: 'Women in public-facing tech roles often experience:',
        options: [
          'Higher salaries due to visibility',
          'Targeted harassment campaigns',
          'Fewer security concerns than men',
          'More support from online communities'
        ],
        correctAnswer: 1,
        explanation: 'Women with public tech roles (like developers, speakers, or content creators) frequently face gender-based harassment campaigns, including doxxing, threats, and coordinated attacks.'
      },
      {
        id: '11-3',
        question: 'Which approach to cybersecurity education is most gender-inclusive?',
        options: [
          'Creating separate security training for women with simplified technical concepts',
          'Focusing exclusively on technical protections rather than social aspects of security',
          'Addressing the full spectrum of risks including harassment and privacy violations',
          'Assuming all users face identical security threats regardless of identity'
        ],
        correctAnswer: 2,
        explanation: 'Gender-inclusive security education addresses both technical protections and the social dimensions of security, including risks that disproportionately affect women and other marginalized groups.'
      }
    ]
  },
  {
    id: '12',
    title: 'Work-Life Integration',
    description: 'Explore policies and practices that support gender equality through better work-life integration.',
    questions: [
      {
        id: '12-1',
        question: 'Which policy has been shown to most effectively support gender equality in tech workplaces?',
        options: [
          'Women-only networking events',
          'Gender-neutral parental leave that encourages all parents to take time off',
          'Flexible hours only for parents',
          'Remote work options only for caregivers'
        ],
        correctAnswer: 1,
        explanation: 'Gender-neutral parental leave policies that actively encourage all parents to take leave help reduce the "motherhood penalty" and promote more equal caregiving responsibilities.'
      },
      {
        id: '12-2',
        question: 'What is "presenteeism culture" and how does it affect gender equality?',
        options: [
          'Requiring employees to present their work frequently; it helps women showcase their contributions',
          'Valuing physical presence in the office over actual productivity; it disadvantages those with caregiving responsibilities',
          'Encouraging employees to be present on social media; it helps with networking',
          'Focusing on presentation skills; it can be biased against different communication styles'
        ],
        correctAnswer: 1,
        explanation: 'Presenteeism culture values visible presence (early arrival, late departure) over actual productivity. This disadvantages people with caregiving responsibilities, who are disproportionately women.'
      },
      {
        id: '12-3',
        question: 'Which approach to flexible work best supports gender equality?',
        options: [
          'Offering flexibility only to mothers',
          'Providing flexible options but subtly penalizing those who use them',
          'Making flexibility available to all employees for any reason',
          'Requiring all employees to work the same flexible schedule'
        ],
        correctAnswer: 2,
        explanation: 'Making flexible work available to all employees for any reason (not just caregiving) normalizes flexibility, reduces stigma, and supports gender equality by preventing the "mommy track" effect.'
      }
    ]
  },
  {
    id: '13',
    title: 'Allyship in Tech',
    description: 'Learn effective ways to be an ally for gender equality in technology workplaces.',
    questions: [
      {
        id: '13-1',
        question: 'Which of these is an example of effective allyship in a technical meeting?',
        options: [
          'Explaining technical concepts to women even when they don\'t ask for help',
          'Amplifying ideas from women that were overlooked and giving proper credit',
          'Suggesting that women take notes or organize the meeting',
          'Complimenting women on their appearance to make them feel welcome'
        ],
        correctAnswer: 1,
        explanation: 'Amplification—repeating ideas from women that were overlooked and giving proper credit—is an effective allyship strategy that helps ensure women\'s contributions are heard and recognized.'
      },
      {
        id: '13-2',
        question: 'What is "performative allyship"?',
        options: [
          'Acting as an ally only when it benefits you personally',
          'Publicly claiming to support gender equality without taking meaningful action',
          'Performing better than others at supporting women in tech',
          'Demonstrating allyship through public speaking and events'
        ],
        correctAnswer: 1,
        explanation: 'Performative allyship is publicly claiming to support gender equality (often for social credit) without taking meaningful action or making changes that might involve personal cost or discomfort.'
      },
      {
        id: '13-3',
        question: 'Which approach is most effective when you witness gender bias or harassment?',
        options: [
          'Immediately publicly calling out the behavior in strong terms',
          'Speaking privately to the woman afterward to offer support',
          'Using the "distract, delegate, delay, direct, document" framework to respond appropriately',
          'Reporting the incident to HR without getting personally involved'
        ],
        correctAnswer: 2,
        explanation: 'The 5Ds framework (distract, delegate, delay, direct, document) provides multiple intervention options for different situations, allowing allies to respond effectively while considering safety and context.'
      }
    ]
  },
  {
    id: '14',
    title: 'Gender and Technical Communication',
    description: 'Understand how gender affects communication in technical contexts and strategies for inclusive communication.',
    questions: [
      {
        id: '14-1',
        question: 'Research shows that in technical discussions, women are more likely than men to be:',
        options: [
          'Given more speaking time',
          'Interrupted while speaking',
          'Asked for their opinions',
          'Praised for their technical insights'
        ],
        correctAnswer: 1,
        explanation: 'Studies consistently show that women are interrupted more frequently than men in professional settings, particularly in technical discussions.'
      },
      {
        id: '14-2',
        question: 'Which communication pattern can disadvantage women in technical roles?',
        options: [
          'Direct communication being valued over collaborative approaches',
          'Technical jargon being used frequently',
          'Written communication being preferred over verbal',
          'Formal communication being required in all contexts'
        ],
        correctAnswer: 0,
        explanation: 'When direct, assertive communication is the only style valued (often coded as masculine), it can disadvantage women who may use more collaborative approaches or face backlash for being assertive.'
      },
      {
        id: '14-3',
        question: 'Which strategy helps create more inclusive technical discussions?',
        options: [
          'Having longer meetings to ensure everyone speaks',
          'Implementing a "no questions" policy to avoid interruptions',
          'Using a round-robin format where each person speaks in turn',
          'Assuming technical competence from all participants regardless of gender'
        ],
        correctAnswer: 3,
        explanation: 'Assuming technical competence from all participants regardless of gender helps counteract the common pattern where women are asked to prove their technical knowledge more than men.'
      }
    ]
  },
  {
    id: '15',
    title: 'Intersectionality in Tech',
    description: 'Understand how gender intersects with other aspects of identity in technology contexts.',
    questions: [
      {
        id: '15-1',
        question: 'What is "intersectionality" in the context of gender equality in tech?',
        options: [
          'The intersection of hardware and software development',
          'How different technologies interact with each other',
          'How gender combines with other aspects of identity to shape experiences',
          'The point where gender bias becomes illegal discrimination'
        ],
        correctAnswer: 2,
        explanation: 'Intersectionality refers to how different aspects of identity (gender, race, class, disability, etc.) combine to create unique experiences that cannot be understood by examining any single factor alone.'
      },
      {
        id: '15-2',
        question: 'Which statement about women of color in tech is supported by research?',
        options: [
          'They face fewer challenges than white women because of diversity initiatives',
          'They experience the same challenges as white women, just more intensely',
          'They face unique challenges that differ from both white women and men of color',
          'Their experiences are identical to those of men of color'
        ],
        correctAnswer: 2,
        explanation: 'Research shows women of color face unique challenges that differ qualitatively (not just quantitatively) from both white women and men of color, demonstrating the importance of intersectional approaches.'
      },
      {
        id: '15-3',
        question: 'Which approach best addresses intersectional challenges in tech?',
        options: [
          'Focusing exclusively on gender and addressing other aspects of identity separately',
          'Creating separate initiatives for each combination of identity factors',
          'Designing inclusive programs that consider how different aspects of identity interact',
          'Addressing only the most common identity combinations'
        ],
        correctAnswer: 2,
        explanation: 'Effective approaches consider how different aspects of identity interact and create programs flexible enough to address diverse experiences, rather than treating each aspect of identity in isolation.'
      }
    ]
  }
];

export const assessments: Assessment[] = [
  {
    id: '1',
    title: 'Organizational Gender Equality Assessment',
    description: 'Evaluate your organization\'s approach to gender equality in the digital workplace.',
    questions: [
      {
        id: '1-1',
        question: 'Does your organization have a formal policy on gender equality?',
        options: [
          'Yes, comprehensive and actively implemented',
          'Yes, but implementation is inconsistent',
          'No formal policy, but informal practices exist',
          'No policy or practices addressing gender equality'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '1-2',
        question: 'How would you describe the gender balance in technical roles?',
        options: [
          'Roughly equal representation of men and women',
          'Some representation of women, but still male-dominated',
          'Very few women in technical roles',
          'No women in technical roles'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '1-3',
        question: 'Does your organization analyze pay data to identify gender pay gaps?',
        options: [
          'Yes, regularly with transparent results and action plans',
          'Yes, but results are not widely shared',
          'Occasionally or informally',
          'Never'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '1-4',
        question: 'How would you rate your recruitment processes for reducing gender bias?',
        options: [
          'Comprehensive measures (blind resumes, diverse panels, inclusive job descriptions)',
          'Some measures in place',
          'Limited awareness but few concrete measures',
          'No specific measures to address gender bias in recruitment'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '1-5',
        question: 'Does your organization offer flexible working arrangements?',
        options: [
          'Yes, comprehensive options available to all employees',
          'Some options available but with limitations',
          'Limited flexibility for certain roles only',
          'No flexible working arrangements'
        ],
        weights: [3, 2, 1, 0]
      }
    ]
  },
  {
    id: '2',
    title: 'Digital Product Inclusivity Assessment',
    description: 'Evaluate how inclusive your digital products and services are for users of all genders.',
    questions: [
      {
        id: '2-1',
        question: 'How do you consider gender diversity in your user research?',
        options: [
          'We actively ensure diverse gender representation in all user research',
          'We sometimes consider gender diversity in user research',
          'We rarely consider gender in our user research approach',
          'We don\'t conduct user research or don\'t consider gender at all'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '2-2',
        question: 'How do your products handle user gender information?',
        options: [
          'We only collect gender data when necessary and provide inclusive options',
          'We collect gender data with binary options (male/female) only',
          'We collect gender data without clear purpose and with limited options',
          'We make assumptions about user gender based on behavior or other data'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '2-3',
        question: 'How inclusive is the language and imagery in your digital products?',
        options: [
          'We use gender-neutral language and diverse, non-stereotypical imagery',
          'We sometimes use inclusive language and imagery but not consistently',
          'We rarely consider gender implications in our language and imagery',
          'Our products contain gendered language and stereotypical imagery'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '2-4',
        question: 'How do you address potential algorithmic bias related to gender?',
        options: [
          'We actively test for and mitigate algorithmic bias related to gender',
          'We are aware of potential bias issues but address them inconsistently',
          'We have limited awareness of algorithmic bias related to gender',
          'We don\'t consider algorithmic bias in our products'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '2-5',
        question: 'How do you handle user feedback related to gender inclusivity?',
        options: [
          'We actively seek feedback on inclusivity and make changes accordingly',
          'We respond to feedback when received but don\'t actively seek it',
          'We acknowledge feedback but rarely make changes based on it',
          'We don\'t have a process for handling inclusivity feedback'
        ],
        weights: [3, 2, 1, 0]
      }
    ]
  },
  {
    id: '3',
    title: 'Recruitment Process Assessment',
    description: 'Evaluate how inclusive your hiring practices are for candidates of all genders.',
    questions: [
      {
        id: '3-1',
        question: 'How do you write job descriptions?',
        options: [
          'We use gender-neutral language, focus on essential requirements, and highlight inclusive policies',
          'We use mostly neutral language but haven\'t fully reviewed for bias',
          'We use standard templates without specific attention to gender inclusivity',
          'We haven\'t considered gender implications in our job descriptions'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '3-2',
        question: 'How diverse are your candidate sourcing channels?',
        options: [
          'We use multiple channels including those targeting underrepresented genders in tech',
          'We use some diverse channels but could expand further',
          'We rely mainly on standard job boards and employee referrals',
          'We haven\'t considered diversity in our sourcing strategy'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '3-3',
        question: 'How do you structure your interview process?',
        options: [
          'We use structured interviews with consistent questions and diverse interview panels',
          'We have some structure but vary by interviewer or department',
          'We have limited standardization in our interview process',
          'We use unstructured interviews that vary significantly'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '3-4',
        question: 'How do you evaluate technical skills?',
        options: [
          'We use blind technical assessments and structured evaluation criteria',
          'We have standard technical questions but evaluation may vary',
          'We assess technical skills differently depending on the interviewer',
          'We have no standard approach to technical evaluation'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '3-5',
        question: 'How do you make final hiring decisions?',
        options: [
          'We use diverse hiring panels and objective criteria with checks for bias',
          'We use hiring panels but with limited diversity or bias checks',
          'Decisions are made by individual hiring managers with some oversight',
          'Decisions are made informally with limited structure or oversight'
        ],
        weights: [3, 2, 1, 0]
      }
    ]
  },
  {
    id: '4',
    title: 'Workplace Culture Assessment',
    description: 'Evaluate how inclusive your workplace culture is for employees of all genders.',
    questions: [
      {
        id: '4-1',
        question: 'How would you describe day-to-day interactions between genders in your workplace?',
        options: [
          'Consistently respectful with equal participation and recognition',
          'Generally respectful but with occasional issues',
          'Somewhat problematic with noticeable differences in treatment',
          'Frequently problematic with clear patterns of exclusion or disrespect'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '4-2',
        question: 'How are social and networking events structured in your organization?',
        options: [
          'Designed to be inclusive and accessible to all genders and life circumstances',
          'Somewhat inclusive but could be improved',
          'Tend to favor traditionally masculine activities or schedules',
          'Frequently exclude certain genders due to content or timing'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '4-3',
        question: 'How does your organization handle reports of gender-based harassment or discrimination?',
        options: [
          'Clear processes that are consistently followed with appropriate consequences',
          'Processes exist but implementation is inconsistent',
          'Limited formal processes with ad hoc responses',
          'No clear process or reports are not taken seriously'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '4-4',
        question: 'How are work contributions recognized in your organization?',
        options: [
          'Systematic approach that ensures fair recognition regardless of gender',
          'Generally fair but with some inconsistencies',
          'Recognition tends to favor certain genders or work styles',
          'Clear patterns of unequal recognition based on gender'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '4-5',
        question: 'How comfortable would employees of all genders feel expressing concerns about inclusivity?',
        options: [
          'Very comfortable with multiple channels and no fear of retaliation',
          'Somewhat comfortable but with some hesitation',
          'Likely uncomfortable with concerns about consequences',
          'Very uncomfortable with clear risks to career or treatment'
        ],
        weights: [3, 2, 1, 0]
      }
    ]
  },
  {
    id: '5',
    title: 'Leadership and Advancement Assessment',
    description: 'Evaluate how equitable your promotion and leadership development practices are across genders.',
    questions: [
      {
        id: '5-1',
        question: 'What is the gender balance in your organization\'s leadership?',
        options: [
          'Roughly equal representation across all leadership levels',
          'Some women in leadership but less representation at higher levels',
          'Very few women in leadership positions',
          'No women in leadership positions'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '5-2',
        question: 'How transparent are your promotion criteria and processes?',
        options: [
          'Fully transparent with clear, objective criteria applied consistently',
          'Somewhat transparent but with some subjective elements',
          'Limited transparency with unclear criteria',
          'No transparency in how promotion decisions are made'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '5-3',
        question: 'How do you identify employees for leadership development?',
        options: [
          'Systematic approach with checks for gender bias and equal access',
          'Somewhat structured approach but with potential for bias',
          'Primarily based on manager recommendations with limited oversight',
          'Ad hoc process with no consideration of gender equity'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '5-4',
        question: 'How do you support women and underrepresented genders in developing leadership skills?',
        options: [
          'Comprehensive programs including mentorship, sponsorship, and targeted development',
          'Some support programs but limited in scope or access',
          'General leadership development with no gender-specific components',
          'No specific support for leadership development'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '5-5',
        question: 'How do you monitor and address gender disparities in advancement?',
        options: [
          'Regular data analysis with clear action plans and accountability',
          'Some monitoring but limited action planning',
          'Occasional or informal review without systematic action',
          'No monitoring of gender disparities in advancement'
        ],
        weights: [3, 2, 1, 0]
      }
    ]
  },
  {
    id: '6',
    title: 'Compensation Equity Assessment',
    description: 'Evaluate how equitable your compensation practices are across genders.',
    questions: [
      {
        id: '6-1',
        question: 'How does your organization determine starting salaries?',
        options: [
          'Structured process with predetermined ranges and checks for bias',
          'General salary bands but with negotiation that could introduce bias',
          'Primarily based on candidate\'s salary history or negotiation',
          'No clear process for determining starting salaries'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '6-2',
        question: 'How transparent is your organization about compensation?',
        options: [
          'Full transparency with published salary ranges and clear criteria',
          'Partial transparency with some information shared',
          'Limited transparency with general policies only',
          'No transparency about how compensation is determined'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '6-3',
        question: 'How does your organization conduct pay equity analyses?',
        options: [
          'Regular comprehensive analyses with action plans to address disparities',
          'Occasional analyses but limited follow-up',
          'Informal or limited analyses without systematic approach',
          'No pay equity analyses conducted'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '6-4',
        question: 'How are raises and bonuses determined?',
        options: [
          'Structured process with clear criteria and checks for bias',
          'Some structure but with subjective elements that could introduce bias',
          'Primarily manager discretion with limited oversight',
          'No clear process for determining raises and bonuses'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '6-5',
        question: 'How does your organization handle salary negotiation?',
        options: [
          'Limited negotiation with clear parameters to prevent gender disparities',
          'Structured negotiation process with some oversight',
          'Standard negotiation practices without consideration of potential bias',
          'Unstructured negotiation that likely advantages assertive candidates'
        ],
        weights: [3, 2, 1, 0]
      }
    ]
  },
  {
    id: '7',
    title: 'Work-Life Integration Assessment',
    description: 'Evaluate how well your policies support work-life integration for employees of all genders.',
    questions: [
      {
        id: '7-1',
        question: 'What parental leave policies does your organization offer?',
        options: [
          'Generous, equal leave for all parents with support for taking full leave',
          'Moderate leave with some differences based on caregiver status',
          'Minimal leave or significant differences between primary/secondary caregivers',
          'Only what is legally required with no additional support'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '7-2',
        question: 'How flexible are your organization\'s work arrangements?',
        options: [
          'Comprehensive flexibility options available to all employees',
          'Some flexibility but with limitations or inconsistent application',
          'Limited flexibility available only for certain roles or situations',
          'Rigid work arrangements with little to no flexibility'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '7-3',
        question: 'How does your organization handle work outside regular hours?',
        options: [
          'Clear boundaries with rare after-hours work and no penalty for disconnecting',
          'Some expectations for availability but generally reasonable',
          'Frequent expectation of after-hours availability',
          'Constant connectivity expected with negative consequences for boundaries'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '7-4',
        question: 'How are caregiving responsibilities viewed in your organization?',
        options: [
          'Normalized for all genders with supportive policies and culture',
          'Generally accepted but with some career impact',
          'Accepted for women but viewed negatively for men',
          'Viewed as a lack of commitment regardless of gender'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '7-5',
        question: 'How does your organization schedule meetings and events?',
        options: [
          'Considerate of various life circumstances with core hours for meetings',
          'Generally considerate but with occasional issues',
          'Limited consideration of outside commitments',
          'No consideration of personal commitments or caregiving responsibilities'
        ],
        weights: [3, 2, 1, 0]
      }
    ]
  },
  {
    id: '8',
    title: 'Technical Team Inclusion Assessment',
    description: 'Evaluate how inclusive your technical teams are for members of all genders.',
    questions: [
      {
        id: '8-1',
        question: 'How are technical tasks assigned within teams?',
        options: [
          'Systematic approach ensuring equal access to high-value work regardless of gender',
          'Generally fair but with some patterns of gendered task allocation',
          'Noticeable patterns where certain genders get more career-enhancing tasks',
          'Clear bias in task allocation with gender stereotyping'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '8-2',
        question: 'How inclusive are technical discussions and decision-making?',
        options: [
          'Structured to ensure all voices are heard with equal consideration',
          'Generally inclusive but with some domination by certain team members',
          'Often dominated by specific genders with others frequently interrupted',
          'Consistently exclusive with clear patterns of whose input is valued'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '8-3',
        question: 'How is technical credibility established in your teams?',
        options: [
          'Based on demonstrated skills and contributions regardless of gender',
          'Generally merit-based but with some bias in whose expertise is trusted',
          'Noticeably harder for certain genders to establish credibility',
          'Clear patterns where technical credibility is assumed or questioned based on gender'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '8-4',
        question: 'How do team members give and receive feedback on technical work?',
        options: [
          'Consistent, constructive approach applied equally regardless of gender',
          'Generally consistent but with some differences in tone or detail',
          'Noticeable differences in how feedback is given based on gender',
          'Clearly biased feedback patterns (harsher/softer, technical/interpersonal) based on gender'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '8-5',
        question: 'How is credit for technical contributions allocated?',
        options: [
          'Systematic approach ensuring proper attribution regardless of gender',
          'Generally fair but with occasional issues of misattribution',
          'Noticeable patterns where certain genders\' contributions are overlooked',
          'Frequent misattribution with clear gender patterns'
        ],
        weights: [3, 2, 1, 0]
      }
    ]
  },
  {
    id: '9',
    title: 'Mentorship and Sponsorship Assessment',
    description: 'Evaluate how equitable your mentorship and sponsorship opportunities are across genders.',
    questions: [
      {
        id: '9-1',
        question: 'How formalized are mentorship opportunities in your organization?',
        options: [
          'Structured program with equal access and monitoring for gender equity',
          'Some formal opportunities but with inconsistent access',
          'Primarily informal mentorship with limited oversight',
          'No mentorship opportunities or completely ad hoc'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '9-2',
        question: 'How does sponsorship (advocacy for advancement) work in your organization?',
        options: [
          'Intentional sponsorship initiatives with attention to gender equity',
          'Some sponsorship occurs but without systematic approach',
          'Sponsorship happens informally and unevenly across genders',
          'Little to no sponsorship culture or clear bias in who receives sponsorship'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '9-3',
        question: 'How are high-visibility projects and opportunities allocated?',
        options: [
          'Transparent process ensuring equal access regardless of gender',
          'Somewhat transparent but with potential for bias',
          'Limited transparency with noticeable patterns of unequal access',
          'No transparency with clear bias in allocation'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '9-4',
        question: 'How diverse are the mentors and sponsors in your organization?',
        options: [
          'Diverse group reflecting the organization\'s gender diversity goals',
          'Some diversity but with room for improvement',
          'Limited diversity with mentorship/sponsorship concentrated among one gender',
          'No diversity with clear homogeneity in who provides mentorship/sponsorship'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '9-5',
        question: 'How does your organization support cross-gender mentoring relationships?',
        options: [
          'Proactive support with guidelines and resources for effective cross-gender mentoring',
          'Some support but limited guidance',
          'No specific support but cross-gender mentoring is allowed',
          'Barriers exist to cross-gender mentoring relationships'
        ],
        weights: [3, 2, 1, 0]
      }
    ]
  },
  {
    id: '10',
    title: 'Gender Inclusion in AI and Product Development',
    description: 'Evaluate how well your AI systems and product development processes address gender considerations.',
    questions: [
      {
        id: '10-1',
        question: 'How do you address potential gender bias in AI training data?',
        options: [
          'Comprehensive approach to identifying and mitigating bias in all training data',
          'Some processes to address obvious bias but not systematic',
          'Limited awareness with minimal action',
          'No consideration of gender bias in training data'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '10-2',
        question: 'How diverse are the teams developing your AI systems or products?',
        options: [
          'Teams reflect gender diversity goals at all levels including technical and leadership roles',
          'Some diversity but not consistent across all teams or levels',
          'Limited diversity with few women in technical roles',
          'No gender diversity in AI/product development teams'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '10-3',
        question: 'How do you test AI systems or products for gender bias before deployment?',
        options: [
          'Rigorous testing specifically designed to identify gender bias with clear standards',
          'Some testing for bias but not comprehensive',
          'Limited or ad hoc testing without specific focus on gender',
          'No testing for gender bias'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '10-4',
        question: 'How do you handle user feedback related to gender bias in AI systems or products?',
        options: [
          'Systematic collection and prioritization of bias-related feedback with clear response protocols',
          'Feedback is collected but response is inconsistent',
          'Limited mechanisms for bias-specific feedback',
          'No specific process for handling gender bias feedback'
        ],
        weights: [3, 2, 1, 0]
      },
      {
        id: '10-5',
        question: 'How transparent are you about potential limitations or biases in your AI systems or products?',
        options: [
          'Full transparency with clear documentation of limitations and potential biases',
          'Some transparency but not comprehensive',
          'Limited transparency with minimal disclosure',
          'No transparency about potential gender bias issues'
        ],
        weights: [3, 2, 1, 0]
      }
    ]
  }
];