export interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'article' | 'pdf' | 'video' | 'link';
  url: string;
  thumbnail?: string;
  tags: string[];
}

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Managing Test Anxiety: Strategies for Success',
    description: 'Learn practical techniques to reduce anxiety before and during exams, including breathing exercises, positive self-talk, and preparation strategies.',
    type: 'article',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Academic Success', 'Stress Management', 'Mental Health'],
  },
  {
    id: 2,
    title: 'Mindfulness Practice Guide',
    description: 'A comprehensive guide to incorporating mindfulness practices into your daily routine to reduce stress and improve focus.',
    type: 'pdf',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/3759659/pexels-photo-3759659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Self-Care', 'Stress Management', 'Mental Health'],
  },
  {
    id: 3,
    title: 'Introduction to Cognitive Behavioral Therapy',
    description: 'This video explains the basics of CBT and how it can help you identify and change negative thought patterns.',
    type: 'video',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Mental Health', 'Therapy Approaches', 'Self-Care'],
  },
  {
    id: 4,
    title: 'Career Exploration Workbook',
    description: 'A step-by-step workbook to help you identify your values, interests, skills, and potential career paths.',
    type: 'pdf',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Career Development', 'Self-Assessment', 'Planning'],
  },
  {
    id: 5,
    title: 'Building Healthy Relationships: Communication Skills',
    description: 'This article covers essential communication techniques for developing and maintaining healthy relationships with roommates, friends, partners, and family.',
    type: 'article',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Relationships', 'Communication', 'Social Skills'],
  },
  {
    id: 6,
    title: 'National Alliance on Mental Health',
    description: 'External resource providing comprehensive information about mental health conditions, treatment options, and support networks.',
    type: 'link',
    url: 'https://www.nami.org',
    tags: ['Mental Health', 'Support Resources', 'Education'],
  },
  {
    id: 7,
    title: 'Time Management Matrix Workshop',
    description: 'Learn how to prioritize tasks effectively using the Eisenhower Matrix and other time management techniques.',
    type: 'video',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Academic Success', 'Productivity', 'Stress Management'],
  },
  {
    id: 8,
    title: 'Grief and Loss: Understanding the Process',
    description: 'This guide explains the stages of grief and provides coping strategies for dealing with loss, whether it\'s a loved one, a relationship, or a significant life change.',
    type: 'article',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/1099972/pexels-photo-1099972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Mental Health', 'Grief', 'Emotional Support'],
  },
  {
    id: 9,
    title: 'Interview Preparation Checklist',
    description: 'A comprehensive checklist to help you prepare for job interviews, including research tips, common questions, and presentation advice.',
    type: 'pdf',
    url: '#',
    tags: ['Career Development', 'Job Search', 'Professional Skills'],
  },
  {
    id: 10,
    title: 'Stress-Reducing Breathing Techniques',
    description: 'A quick tutorial demonstrating effective breathing exercises you can use anywhere to reduce stress and anxiety.',
    type: 'video',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/3822283/pexels-photo-3822283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Self-Care', 'Stress Management', 'Mental Health'],
  },
  {
    id: 11,
    title: 'Sleep Hygiene Guide',
    description: 'Learn how to improve your sleep habits to enhance your overall well-being and academic performance.',
    type: 'article',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Self-Care', 'Physical Health', 'Wellness'],
  },
  {
    id: 12,
    title: 'Nutrition for Brain Health',
    description: 'This resource covers how diet affects cognitive function and provides practical tips for eating to support brain health and academic performance.',
    type: 'article',
    url: '#',
    tags: ['Self-Care', 'Physical Health', 'Academic Success'],
  },
];