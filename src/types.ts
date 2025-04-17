export interface NavItem {
    label: string;
    href: string;
  }
  
  export interface Project {
    title: string;
    description: string;
    skills: string[];
    link?: string;
  }
  
  export interface SkillCategory {
    category: string;
    skills: string[];
  }
  export interface Experience {
    title: string;
    company: string;
    duration: string;
    description: string;
  }
  
  export interface Achievement {
    icon: any; // Or more specific Lucide icon type
    title: string;
    count: string;
    description: string;
  }