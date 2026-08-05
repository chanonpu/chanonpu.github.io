export interface OverviewData {
    name: string;
    description: string;
    contact: string;
  }
  
  export interface EducationData {
    degree: string;
    institution: string;
    year: string;
  }
  
  export interface ExperienceData {
    jobTitle: string;
    company: string;
    year: string;
  }
  
  export interface VolunteerData {
    jobTitle: string;
    company: string;
    year: string;
  }
  
  export interface ProjectData {
    title: string;
    description: string;
    techStack: string[];
    link: string;
    image?: string; //optional so it wont break
    imageType?: "desktop" | "mobile"; // if mobile
    demoLink?: string; //optional
  }
  
  export interface ResumeData {
    overview: OverviewData;
    education: EducationData[];
    experience: ExperienceData[];
    volunteer: VolunteerData[];
    project: ProjectData[];
  }