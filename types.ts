// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Project interface
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_name: string;
    description?: string;
    technologies?: string;
    project_url?: string;
    github_url?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    project_status?: {
      key: string;
      value: string;
    };
    featured_project?: boolean;
  };
}

// Skill interface
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    skill_name: string;
    category?: {
      key: string;
      value: string;
    };
    proficiency_level?: {
      key: string;
      value: string;
    };
    years_experience?: number;
  };
}

// Work Experience interface
export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    job_title: string;
    company_name: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    start_date: string;
    end_date?: string | null;
    current_position?: boolean;
    description?: string;
    location?: string;
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    client_title?: string;
    company?: string;
    testimonial_text: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    rating?: {
      key: string;
      value: string;
    };
    featured_testimonial?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Category types for skills
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools';

// Project status types
export type ProjectStatus = 'completed' | 'in_progress' | 'maintenance';

// Proficiency level types
export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

// Contact Submission interface
export interface ContactSubmission extends CosmicObject {
  type: 'contact-submissions';
  metadata: {
    name: string;
    email: string;
    subject: string;
    message: string;
    submission_date: string;
    status?: {
      key: string;
      value: string;
    };
  };
}