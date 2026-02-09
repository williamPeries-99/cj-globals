
import type { Destination, Service, Testimonial } from './types';
import { IMAGES } from './assets';

export const COLORS = {
  primary: '#002855', // Professional Navy Blue
  secondary: '#D4AF37', // Elegant Gold
  dark: '#1A1A1A', // Deep Black
  light: '#FFFFFF', // Pure White
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'australia',
    name: 'Australia',
    image: IMAGES.destinations.australia,
    description: 'Home to world-class universities and a high standard of living.',
    benefits: ['Post-study work rights', 'High quality of life', 'Multicultural environment'],
    process: ['Apply to University', 'Receive CoE', 'Lodge Visa Subclass 500', 'Pre-departure briefing']
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    image: IMAGES.destinations.uk,
    description: 'Experience academic excellence in the land of historic institutions.',
    benefits: ['Global reputation', 'Accelerated degrees', 'Rich cultural heritage'],
    process: ['UCAS/Direct Application', 'Receive CAS', 'Apply for Student Visa', 'Enrollment']
  },
  {
    id: 'usa',
    name: 'USA',
    image: IMAGES.destinations.usa,
    description: 'The global hub for innovation and diverse educational opportunities.',
    benefits: ['Cutting-edge research', 'Campus diversity', 'OPT opportunities'],
    process: ['I-20 Issuance', 'SEVIS Fee Payment', 'DS-160 Form', 'Visa Interview']
  },
  {
    id: 'canada',
    name: 'Canada',
    image: IMAGES.destinations.canada,
    description: 'A welcoming nation with a strong focus on immigration and research.',
    benefits: ['Affordable tuition', 'PR pathways', 'Stunning natural beauty'],
    process: ['Letter of Acceptance', 'Study Permit Application', 'Biometrics', 'Approval']
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    image: IMAGES.destinations.newZealand,
    description: 'Safe, beautiful, and world-renowned for its innovative learning.',
    benefits: ['Safety and security', 'Work rights while studying', 'Unique lifestyle'],
    process: ['Offer Letter', 'Financial Verification', 'Fee Payment', 'Visa Grant']
  },
  {
    id: 'ireland',
    name: 'Ireland',
    image: IMAGES.destinations.ireland,
    description: 'The Silicon Valley of Europe with a friendly, vibrant atmosphere.',
    benefits: ['English-speaking country', 'Major tech hub', 'Rich literary history'],
    process: ['Application submission', 'Proof of Funds', 'Medical Insurance', 'Visa lodgement']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'consultation',
    title: 'Study Abroad Consultation',
    description: 'One-on-one expert guidance to help you choose the right course and university.',
    icon: 'Globe'
  },
  {
    id: 'application',
    title: 'University Assistance',
    description: 'Seamless application processing and documentation support for global admissions.',
    icon: 'BookOpen'
  },
  {
    id: 'visa',
    title: 'Visa Guidance',
    description: 'Comprehensive support for student visa applications with high success rates.',
    icon: 'FileCheck'
  },
  {
    id: 'scholarship',
    title: 'Scholarship Support',
    description: 'Assistance in finding and applying for financial aid and merit-based scholarships.',
    icon: 'GraduationCap'
  },
  {
    id: 'departure',
    title: 'Pre-departure & Post-landing',
    description: 'Briefings on travel, accommodation, and settling into your new home abroad.',
    icon: 'PlaneTakeoff'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amara Perera',
    university: 'University of Melbourne',
    country: 'Australia',
    quote: 'CJ Global made my dream of studying in Australia a reality. Their team was professional and guided me through every step.',
    image: IMAGES.testimonials.student1
  },
  {
    id: '2',
    name: 'Dinesh Wickramasinghe',
    university: 'University of Toronto',
    country: 'Canada',
    quote: 'The visa process can be daunting, but with CJ Global, it was smooth sailing. Highly recommended for their attention to detail.',
    image: IMAGES.testimonials.student2
  },
  {
    id: '3',
    name: 'Sarah Mendis',
    university: 'King\'s College London',
    country: 'UK',
    quote: 'Outstanding support for my Masters application. They helped me secure a partial scholarship as well!',
    image: IMAGES.testimonials.student3
  }
];
