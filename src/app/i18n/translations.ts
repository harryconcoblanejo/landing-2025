export const translations = {
  en: {
    hero: {
      title: "Centered Image"
    },
    projects: {
      title: "Portfolio Projects",
      description: "Project description"
    }
  },
  es: {
    hero: {
      title: "Imagen Centrada"
    },
    projects: {
      title: "Proyectos de Portafolio",
      description: "Descripción del proyecto"
    }
  }
} as const;

export type Language = keyof typeof translations; 