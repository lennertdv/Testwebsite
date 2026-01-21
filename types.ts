import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., 'Particulier' or 'Bedrijfseigenaar'
  content: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}