export interface ArchitecturePoint {
  component: string;
  role: string;
  detail: string;
}

export interface SolidPrincipleItem {
  letter: string;
  name: string;
  status: string;
  badgeSeverity: 'success' | 'info' | 'warn' | 'secondary';
  evaluation: string;
  improvementTip?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Backend';
  badge: string;
  description: string;
  architectureType: string;
  pattern: string;
  technologies: string[];
  repositoryUrl: string;
  demoUrl?: string; // Sin demo funcional según requerimiento
  keyHighlights: string[];
  architectureDetails?: ArchitecturePoint[];
  githubReferences?: { label: string; url: string }[];
}
