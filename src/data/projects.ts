export interface Project {
  slug: string;
  title: string;
  description: string;
  cover?: string;
  heroMedia?: {
    type: 'image' | 'video';
    src: string;
  };
  slides?: string[];
  layout?: 'narrow' | 'full';
  tags?: string;
  collaborator?: string;
  hoverVideo?: string;
  pdfUrl?: string;
}

export const recentProjects: Project[] = [
  {
    slug: 'microinterventions',
    title: 'Microinterventions on digital activities',
    description: 'Project description placeholder for Microinterventions on digital activities.',
    cover: '/plugins-work1.jpg',
    heroMedia: {
      type: 'video',
      src: '/plugins-animation-hero1.mp4'
    },
    tags: 'UX, UI, AI, Motion design. Concept with Szymon Łabuś',
    collaborator: 'Concept with Szymon Łabuś',
    hoverVideo: '/plugins-hoover.mp4'
  },
  {
    slug: 'communication-gear',
    title: 'Communication Gear',
    description: 'Project description placeholder for Communication Gear.',
    cover: '/communication-gear-work.jpg',
    heroMedia: {
        type: 'video',
        src: '/communication-gear-hero.mp4'
    },
    tags: 'Product design, human-centered, 3d'
  },
  {
    slug: 'watch-me-burn',
    title: 'Watch me burn',
    description: 'Project description placeholder for Watch me burn.',
    cover: '/watchmeburn-work.jpg',
    heroMedia: {
    type: 'video',
    src: 'https://res.cloudinary.com/dooodtng5/video/upload/v1785146477/watchmeburn-animation_nwzgcf.mp4'
},
    tags: 'UX research, tech, 3d'
  },
];

export const archivedProjects: Project[] = [
  {
    slug: 'extended-data-font',
    title: 'Extended data font',
    description: 'Project description placeholder for Extended data font.',
    heroMedia: {
        type: 'video',
        src: '/font-animation.mp4'
    }
  },
  {
    slug: 'metabolism-research',
    title: 'Metabolism research',
    description: '',
    tags: 'Research, publication',
    pdfUrl: '/metabolism-research.pdf'
},
  {
    slug: 'color-of-air',
    title: 'The Color of Air (student code-installation)',
    description: 'Project description placeholder for The Color of Air.',
    slides: ['/Color-air-one.jpg', '/Color-air-two.jpg'],
    layout: 'narrow',
    tags: 'Code, installation, architecture',
  },
];

export const allProjects: Project[] = [...recentProjects, ...archivedProjects];
