// Database Types
export interface ContactForm {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  newsletter: boolean;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface JobApplication {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  position: string;
  experience_years: number;
  resume_url: string;
  cover_letter?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface InternshipApplication {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  program: string;
  university: string;
  graduation_year: number;
  resume_url: string;
  cover_letter?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface NewsletterSubscription {
  id?: string;
  email: string;
  first_name?: string;
  last_name?: string;
  preferences?: string[];
  status: string;
  created_at?: string;
  updated_at?: string;
}

export interface EventRegistration {
  id?: string;
  event_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  organization?: string;
  role?: string;
  dietary_restrictions?: string;
  special_requirements?: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

export interface GameSubmission {
  id?: string;
  title: string;
  description: string;
  developer_name: string;
  developer_email: string;
  game_url?: string;
  source_code_url?: string;
  screenshots?: string[];
  genre: string;
  platform: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

// Component Props Types
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image?: string;
  slug: string;
}

export interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: string;
  image?: string;
  registration_required: boolean;
}

export interface GameCardProps {
  id: string;
  title: string;
  description: string;
  genre: string;
  platform: string;
  developer: string;
  image?: string;
  download_url?: string;
}

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

// Theme Types
export interface Theme {
  name: string;
  value: 'light' | 'dark' | 'system';
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
