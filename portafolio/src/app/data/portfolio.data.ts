import { PortfolioProject, SolidPrincipleItem } from '../core/models/portfolio-project.model';

export const PROFILE = {
  name: 'Juan José',
  role: 'Frontend Angular Developer & UI Specialist (PrimeNG)',
  photoUrl: 'images/foto hoja de vida.jpeg',
  summary:
    'Desarrollador enfocado en el ecosistema Angular y la biblioteca de componentes PrimeNG, complementado con bases sólidas de backend en Django REST Framework, Java SpringBoot y PostgreSQL. Experiencia práctica implementando arquitectura por capas, patrón MTV/MVC adaptado a APIs REST, diseño modular por funcionalidades e inyección de dependencias.',
  location: 'Medellín, Colombia',
  email: 'juanjosedavidco@gmail.com',
  linkedin: 'https://www.linkedin.com',
  github: 'https://github.com/BonzJJ11'
};

export const STATS = [
  { label: 'Proyectos Revisados', value: '3+', icon: 'pi pi-folder-open' },
  { label: 'Arquitectura', value: 'Capas & Modular', icon: 'pi pi-sitemap' },
  { label: 'Librería UI', value: 'PrimeNG 21', icon: 'pi pi-palette' },
  { label: 'Stack Principal', value: 'Angular + DRF', icon: 'pi pi-server' }
];

export const SKILLS: { name: string; icon: string; category: string; highlight?: boolean }[] = [
  { name: 'Angular 21', icon: 'pi pi-bolt', category: 'Frontend', highlight: true },
  { name: 'PrimeNG (Aura & Custom)', icon: 'pi pi-palette', category: 'UI / UX', highlight: true },
  { name: 'TypeScript', icon: 'pi pi-code', category: 'Frontend', highlight: true },
  { name: 'HTML5 & CSS3 Moderno', icon: 'pi pi-desktop', category: 'Frontend' },
  { name: 'Django REST Framework', icon: 'pi pi-shield', category: 'Backend', highlight: true },
  { name: 'Python', icon: 'pi pi-file-code', category: 'Backend' },
  { name: 'PostgreSQL', icon: 'pi pi-database', category: 'Database', highlight: true },
  { name: 'Java & SpringBoot', icon: 'pi pi-server', category: 'Backend' },
  { name: 'Git & GitHub', icon: 'pi pi-github', category: 'Tools' },
  { name: 'API REST & JSON', icon: 'pi pi-cloud', category: 'Arquitectura' },
  { name: 'Arquitectura por Capas', icon: 'pi pi-layers', category: 'Arquitectura' },
  { name: 'Inyección de Dependencias', icon: 'pi pi-share-alt', category: 'Arquitectura' }
];

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'lastpage',
    title: 'LastPage — Blog de Sentimientos',
    category: 'Full Stack',
    badge: 'Arquitectura por Capas + REST',
    description:
      'Plataforma blog orientada a la publicación y gestión de sentimientos e interacciones sociales. Implementa arquitectura por capas con desacoplamiento total entre frontend en Angular y backend API REST en Django.',
    architectureType: 'Arquitectura por Capas + API REST',
    pattern: 'Patrón MTV/MVC adaptado a DRF (ViewSets)',
    technologies: ['Angular', 'Django REST Framework', 'Python', 'API REST', 'PrimeNG', 'TypeScript'],
    repositoryUrl: 'https://github.com/BonzJJ11/LastPage',
    keyHighlights: [
      'Separación limpia de responsabilidades en backend: models, serializers, views y urls.',
      'Uso de ViewSets de Django REST Framework (PublicacionViewSet, ComentarioViewSet, ReaccionViewSet).',
      'Consumo asíncrono y desacoplado mediante servicios HTTP en el cliente Angular.',
      'Endpoints organizados de forma semántica y predecible.'
    ],
    architectureDetails: [
      {
        component: 'models.py',
        role: 'Persistencia & Entidades',
        detail: 'Representación de tablas, modelos de dominio para publicaciones, reacciones y comentarios con relaciones ORM.'
      },
      {
        component: 'serializers.py',
        role: 'Transformación & Validación',
        detail: 'Conversión bidireccional entre datos JSON y modelos de Django, garantizando tipado y validación de entrada.'
      },
      {
        component: 'views.py',
        role: 'Controladores / ViewSets',
        detail: 'Orquestación de operaciones CRUD y lógica HTTP a través de ViewSets especializados.'
      },
      {
        component: 'urls.py',
        role: 'Enrutamiento REST',
        detail: 'Mapeo de rutas hacia routers y endpoints de la API REST.'
      }
    ],
    githubReferences: [
      {
        label: 'models.py (Entidades)',
        url: 'https://github.com/BonzJJ11/LastPage/blob/main/BackSentimiento/blog/models.py'
      },
      {
        label: 'views.py (ViewSets)',
        url: 'https://github.com/BonzJJ11/LastPage/blob/main/BackSentimiento/blog/views.py'
      },
      {
        label: 'serializers.py (Validaciones)',
        url: 'https://github.com/BonzJJ11/LastPage/blob/main/BackSentimiento/blog/serializers.py'
      }
    ]
  },
  {
    id: 'herederos-alzate',
    title: 'Herederos-Alzate — Sistema de Inventario',
    category: 'Full Stack',
    badge: 'Arquitectura Modular por Funcionalidades',
    description:
      'Sistema integral de gestión de inventarios para control de stock, productos, proveedores y empleados. Estructurado con arquitectura por capas en backend con PostgreSQL y organización modular por dominios en Angular.',
    architectureType: 'Arquitectura Modular por Funcionalidades',
    pattern: 'Organización Modular Angular + DRF & PostgreSQL',
    technologies: ['Angular', 'Django REST Framework', 'PostgreSQL', 'TypeScript', 'PrimeNG', 'CSS3'],
    repositoryUrl: 'https://github.com/BonzJJ11/Herederos-Alzate',
    keyHighlights: [
      'Estructura modular en frontend dividida en compartido/, nucleo/ y páginas por funcionalidades.',
      'Inyección de dependencias para servicios de autenticación y consumo de API (auth.service.ts).',
      'Backend en Django REST con soporte de persistencia transaccional en PostgreSQL.',
      'Módulos funcionales desacoplados: autenticación, inventario, empleados y proveedores.'
    ],
    architectureDetails: [
      {
        component: 'src/app/compartido/',
        role: 'Diseños & UI Compartida',
        detail: 'Plantillas visuales, componentes de diseño reutilizables y estilos consistentes.'
      },
      {
        component: 'src/app/nucleo/',
        role: 'Servicios & Guardias Core',
        detail: 'Servicios transversales singleton (ej. auth.service.ts) y control de acceso con Route Guards.'
      },
      {
        component: 'src/app/paginas/funcionalidades/',
        role: 'Módulos de Negocio',
        detail: 'Vistas funcionales encapsuladas: autenticacion/, empleados/, inventario/, prove/.'
      },
      {
        component: 'Backend & PostgreSQL',
        role: 'Persistencia & Capa REST',
        detail: 'Modelado relacional robusto con serializers y vistas DRF para transacciones de inventario.'
      }
    ],
    githubReferences: [
      {
        label: 'Estructura Modular (README)',
        url: 'https://github.com/BonzJJ11/Herederos-Alzate/blob/master/README.md'
      },
      {
        label: 'views.py (Backend DRF)',
        url: 'https://github.com/BonzJJ11/Herederos-Alzate/blob/master/herederos/views.py'
      },
      {
        label: 'auth.service.ts (Servicio Core)',
        url: 'https://github.com/BonzJJ11/Herederos-Alzate/blob/master/PPI-master/src/app/nucleo/servicios/auth.service.ts'
      }
    ]
  },
  {
    id: 'portafolio-primeng',
    title: 'Portafolio Personal PrimeNG',
    category: 'Frontend',
    badge: 'Angular 21 + PrimeNG Aura',
    description:
      'Portafolio interactivo de alto rendimiento desarrollado con Angular 21 y la suite de componentes PrimeNG. Diseñado bajo la regla armónica 60-30-10, componentes Standalone y experiencia responsive completa.',
    architectureType: 'Arquitectura Modular Standalone',
    pattern: 'Componentes Standalone + Lazy Loading + PrimeNG UI',
    technologies: ['Angular 21', 'PrimeNG', 'TypeScript', 'Aura Theme', 'CSS3 Moderno', 'HTML5'],
    repositoryUrl: 'https://github.com/BonzJJ11/Portafolio',
    keyHighlights: [
      'Integración profunda de la biblioteca PrimeNG: Botones, Cards, SelectButton, Chips, Tags y Tooltips.',
      'Arquitectura de componentes independientes (Standalone Components) sin sobrecarga de NgModules.',
      'Carga diferida (Lazy Loading) mediante rutas declarativas con importaciones dinámicas.',
      'Diseño visual equilibrado con paleta 60-30-10, variables CSS nativas y diseño responsivo.'
    ],
    architectureDetails: [
      {
        component: 'core/ & shared/',
        role: 'Fundamentos & Reusabilidad',
        detail: 'Definición de modelos de dominio TypeScript y componentes reutilizables (ProjectCard, SectionTitle).'
      },
      {
        component: 'features/',
        role: 'Páginas por Dominio',
        detail: 'Rutas perezosas independientes para Home, About, Projects y Contact.'
      },
      {
        component: 'PrimeNG Theming',
        role: 'Sistema de Diseño',
        detail: 'Configuración de PrimeNG preset Aura en app.config.ts con soporte nativo de Ripple y tipografía personalizada.'
      }
    ],
    githubReferences: [
      {
        label: 'Repositorio del Portafolio',
        url: 'https://github.com/BonzJJ11/Portafolio'
      }
    ]
  }
];

export const SOLID_EVALUATION: SolidPrincipleItem[] = [
  {
    letter: 'S',
    name: 'Responsabilidad Única (Single Responsibility)',
    status: 'Parcial / En Evolución',
    badgeSeverity: 'info',
    evaluation:
      'Existe una clara separación estructural entre modelos (models.py), serializers (serializers.py) y vistas (views.py). En Angular se segregan componentes, servicios y vistas por funcionalidad. Oportunidad identificada: extraer la lógica de negocio acumulada en algunos ViewSets hacia capas dedicadas de servicios (services.py).',
    improvementTip: 'Desacoplar la orquestación CRUD de la lógica de notificaciones y limpiezas en cascada.'
  },
  {
    letter: 'O',
    name: 'Abierto / Cerrado (Open/Closed)',
    status: 'En Consolidación',
    badgeSeverity: 'secondary',
    evaluation:
      'Se aprovechan las clases base y genéricos de Django REST Framework (ModelViewSet) y componentes extensibles de Angular. La arquitectura modular permite sumar nuevas páginas y modelos sin modificar la configuración raíz existente.',
    improvementTip: 'Fomentar el uso de interfaces y decoradores para extender comportamiento sin tocar módulos estables.'
  },
  {
    letter: 'L',
    name: 'Sustitución de Liskov (Liskov Substitution)',
    status: 'Correcto en Herencia Base',
    badgeSeverity: 'success',
    evaluation:
      'Los ViewSets y Serializers heredan e implementan correctamente los contratos esperados por DRF sin romper el comportamiento de las clases abstractas. En Angular, los servicios inyectados cumplen con sus contratos de interfaz.',
    improvementTip: 'Mantener consistencia en las respuestas de los ViewSets personalizados.'
  },
  {
    letter: 'I',
    name: 'Segregación de Interfaces (Interface Segregation)',
    status: 'En Implementación Tipada',
    badgeSeverity: 'secondary',
    evaluation:
      'En frontend TypeScript se aplican interfaces específicas (PortfolioProject, ArchitecturePoint) evitando tipos sobrecargados. En backend se utilizan serializers específicos para lectura y escritura según el caso de uso.',
    improvementTip: 'Dividir serializers grandes en versiones especializadas para listas vs. detalles completos.'
  },
  {
    letter: 'D',
    name: 'Inversión de Dependencias (Dependency Inversion)',
    status: 'Aplicado mediante DI en Angular',
    badgeSeverity: 'success',
    evaluation:
      'Angular provee un contenedor de Inyección de Dependencias nativo donde los componentes dependen de abstracciones y servicios inyectables (como auth.service.ts y servicios HTTP) en lugar de instanciarlos directamente.',
    improvementTip: 'Implementar servicios e inyecciones de interfaces desacopladas en el backend Django mediante inyectores o fábricas.'
  }
];

export const ARCHITECTURE_PILLARS = [
  {
    title: 'Arquitectura por Capas + API REST',
    icon: 'pi pi-server',
    color: 'blue',
    description:
      'Separación clara entre frontend (Angular) y backend (Django REST Framework) comunicados por HTTP. En el backend, las entidades (models.py), validaciones (serializers.py) y controladores (views.py) operan en capas aisladas.'
  },
  {
    title: 'Patrón MTV adaptado a REST API',
    icon: 'pi pi-code',
    color: 'purple',
    description:
      'Django tradicionalmente usa MTV (Model-Template-View). Al construir una API REST desacoplada para Angular, se omite el Template HTML y el Serializer asume la transformación de datos, conservando la pureza de responsabilidades.'
  },
  {
    title: 'Arquitectura Modular en Angular',
    icon: 'pi pi-sitemap',
    color: 'green',
    description:
      'Organización estructurada por dominios de negocio: carpeta compartido/ para diseño reutilizable, nucleo/ para servicios core y guardias singleton, y paginas/funcionalidades/ para módulos independientes (inventario, empleados, etc.).'
  },
  {
    title: 'Especialización en PrimeNG',
    icon: 'pi pi-palette',
    color: 'orange',
    description:
      'Dominio de la biblioteca PrimeNG para construir interfaces ricas, visualmente consistentes, accesibles y tematizadas con la paleta 60-30-10, combinando SelectButtons, Cards, Chips, Tags, Badges y Tooltips.'
  }
];

export const TARGET_ARCHITECTURE_PROPOSAL = {
  title: 'Evolución Arquitectónica Recomendada',
  description:
    'Para proyectos Django escalables, evolucionar de vistas monolíticas a una arquitectura modular por funcionalidades con separación de servicios y selectores:',
  layers: [
    { name: 'models.py', purpose: 'Entidades, campos relacionales y persistencia de base de datos.' },
    { name: 'serializers.py', purpose: 'Validación de esquema y transformación JSON <-> Modelo.' },
    { name: 'views.py', purpose: 'Recepción de requests HTTP, autenticación y retorno de respuestas.' },
    { name: 'services.py', purpose: 'Lógica de negocio, transacciones, notificaciones y reglas de dominio.' },
    { name: 'selectors.py', purpose: 'Consultas ORM complejas, filtros y recuperación optimizada de datos.' }
  ]
};

export const SECURITY_BEST_PRACTICES = [
  {
    title: 'Hashing Seguro de Contraseñas',
    icon: 'pi pi-lock',
    current: 'Uso previo de SHA-256 directo en proyectos anteriores.',
    solution:
      'Implementación del sistema nativo de Django make_password / check_password utilizando PBKDF2 o Argon2 con sal aleatoria y factor de trabajo para mitigar ataques de diccionario y rainbow tables.',
    priority: 'Alta'
  },
  {
    title: 'Autenticación Criptográfica con Tokens JWT',
    icon: 'pi pi-key',
    current: 'Tokens simulados o endpoints de pruebas de desarrollo.',
    solution:
      'Adopción de JSON Web Tokens (djangorestframework-simplejwt) con firmas criptográficas válidas, expiración programada y refresco de tokens seguro.',
    priority: 'Alta'
  }
];
