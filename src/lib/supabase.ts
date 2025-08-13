import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
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
  created_at?: string;
  status?: 'new' | 'contacted' | 'qualified' | 'converted';
}

export interface JobApplication {
  id?: string;
  job_title: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  resume_url?: string;
  cover_letter?: string;
  experience_years: number;
  skills: string[];
  created_at?: string;
  status?: 'applied' | 'reviewing' | 'interviewing' | 'hired' | 'rejected';
}

export interface InternshipApplication {
  id?: string;
  program_title: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  university: string;
  graduation_year: number;
  resume_url?: string;
  motivation_letter?: string;
  skills: string[];
  created_at?: string;
  status?: 'applied' | 'reviewing' | 'interviewing' | 'accepted' | 'rejected';
}

export interface PartnershipInquiry {
  id?: string;
  partnership_type: string;
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  company_size: string;
  industry: string;
  description: string;
  goals: string[];
  created_at?: string;
  status?: 'new' | 'reviewing' | 'discussing' | 'partnership_formed';
}

export interface VolunteerApplication {
  id?: string;
  opportunity_title: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  availability: string;
  skills: string[];
  motivation: string;
  experience: string;
  created_at?: string;
  status?: 'applied' | 'reviewing' | 'accepted' | 'rejected';
}

export interface NewsletterSubscription {
  id?: string;
  email: string;
  first_name?: string;
  last_name?: string;
  company?: string;
  interests: string[];
  subscribed: boolean;
  created_at?: string;
  unsubscribed_at?: string;
}

export interface EventRegistration {
  id?: string;
  event_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  team_name?: string;
  participants_count: number;
  experience_level: string;
  created_at?: string;
  status?: 'registered' | 'confirmed' | 'attended' | 'cancelled';
}

export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  tags: string[];
  featured_image?: string;
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface NewsArticle {
  id?: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  featured_image?: string;
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface AdminUser {
  id?: string;
  username: string;
  password: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'moderator';
  is_active: boolean;
  created_at?: string;
  last_login?: string;
}

export interface GameSubmission {
  id?: string;
  title: string;
  developer_name: string;
  developer_email: string;
  developer_phone: string;
  game_description: string;
  genre: string;
  platform: string;
  download_url?: string;
  trailer_url?: string;
  screenshots: string[];
  created_at?: string;
  status?: 'submitted' | 'reviewing' | 'approved' | 'rejected' | 'featured';
}
