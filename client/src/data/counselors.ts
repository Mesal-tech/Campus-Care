export interface Counselor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  imageUrl: string;
  bio: string;
  email?: string
}

export const counselors: Counselor[] = [
  {
    id: 'martin-davis',
    name: 'Dr. Martin Davis',
    title: 'Clinical Psychologist',
    specialties: ['Anxiety', 'Depression', 'Stress Management', 'Cognitive Behavioral Therapy'],
    imageUrl: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    bio: 'Dr. Davis specializes in helping students manage anxiety and depression using evidence-based approaches. With over 15 years of experience in university counseling, he creates a supportive environment for students to develop effective coping strategies.',
    email: 'martin.davis@university.edu'
  },
  {
    id: 'sophia-chen',
    name: 'Dr. Sophia Chen',
    title: 'Mental Health Counselor',
    specialties: ['Cultural Adjustment', 'Identity Development', 'Family Relationships', 'LGBTQ+ Support'],
    imageUrl: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    bio: 'Dr. Chen focuses on supporting students navigating cultural transitions and identity development. She provides culturally responsive counseling and specializes in helping international students adjust to campus life while maintaining connections to their heritage.',
    email: 'sophia.chen@university.edu',
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    title: 'Academic Success Coach',
    specialties: ['Learning Strategies', 'Test Anxiety', 'Time Management', 'Study Skills'],
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    bio: 'James helps students develop effective academic strategies to reach their full potential. He specializes in helping students overcome test anxiety, improve time management, and develop personalized study techniques that match their learning style.',
    email: 'james.wilson@university.edu'
  },
  {
    id: 'amara-okafor',
    name: 'Dr. Amara Okafor',
    title: 'Career Counselor',
    specialties: ['Career Exploration', 'Professional Development', 'Job Search Strategies', 'Interview Preparation'],
    imageUrl: 'https://images.pexels.com/photos/6203795/pexels-photo-6203795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    bio: 'Dr. Okafor helps students align their values, interests, and strengths with potential career paths. She provides guidance on resume building, interview skills, and professional networking to help students transition confidently into their chosen careers.',
    email: 'amara.okafor@university.edu'
  },
  {
    id: 'miguel-rodriguez',
    name: 'Miguel Rodriguez',
    title: 'Licensed Social Worker',
    specialties: ['Trauma Recovery', 'Crisis Intervention', 'Grief Counseling', 'Relationship Issues'],
    imageUrl: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    bio: 'Miguel specializes in trauma-informed care and crisis intervention. With experience in both clinical and community settings, he helps students process difficult experiences and develop resilience through challenging life transitions.',
    email: 'miguel.rodriguez@university.edu'
  },
  {
    id: 'aisha-patel',
    name: 'Aisha Patel',
    title: 'Wellness Coordinator',
    specialties: ['Mindfulness', 'Stress Reduction', 'Sleep Hygiene', 'Work-Life Balance'],
    imageUrl: 'https://images.pexels.com/photos/7869243/pexels-photo-7869243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    bio: 'Aisha focuses on holistic wellness approaches to help students maintain balance in their lives. She leads mindfulness workshops and helps students develop practical strategies for managing stress, improving sleep, and maintaining overall wellbeing.',
    email: 'aisha.patel@university.edu'
  },
];