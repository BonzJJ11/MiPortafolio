import { PortfolioProject } from '../core/models/portfolio-project.model';

export const PROFILE = {
  name: 'Juan José.',
  role: 'Angular Frontend Developer',
  photoUrl: 'images/foto hoja de vida.jpeg',
  summary:
    'Desarrollo experiencias web modernas y escalables con enfoque mobile-first, rendimiento y buenas prácticas.',
  location: 'Colombia, Antioquia, Medellín',
  email: 'juanjosedavidco@gmail.com',
  linkedin: 'https://www.linkedin.com',
  github: 'https://github.com'
};

export const SKILLS: string[] = [
  'Angular',
  'TypeScript',
  'Java',
  'SpringBoot',
  'HTML/CSS',
  'Node.js',
  'Git',
  'Django REST Framework',
  'PostgreSQL'  
];

export const PROJECTS: PortfolioProject[] = [
  {
    title: 'App de Gestion de inventario',
    description:
      'Aplicación para registrar entradas y salidas de inventario, visualizar reportes y controlar niveles de stock.',
    technologies: ['Angular', 'PostgreSQL', 'Django REST Framework'],
    demoUrl: 'https://example.com/demo-inventario',
    repositoryUrl: 'https://github.com/BonzJJ11/PPI'
  },
  {
    title: 'Portafolio personal',
    description:
      'Interfaz web para mostrar proyectos, habilidades y experiencia profesional de forma atractiva y responsiva.',
    technologies: ['Angular', 'TypeScript', 'CSS'],
    demoUrl: 'https://example.com/demo-ecommerce',
    repositoryUrl: 'https://github.com/example/ecommerce'
  },
//   {
//     title: 'Dashboard de Tareas',
//     description:
//       'Panel para organizar tareas con estados, prioridad y seguimiento de productividad.',
//     technologies: ['Angular', 'TypeScript', 'LocalStorage'],
//     demoUrl: 'https://example.com/demo-tareas',
//     repositoryUrl: 'https://github.com/example/tareas'
//   }
];
