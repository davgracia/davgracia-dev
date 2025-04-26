import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "@davgracia",
  EMAIL: "contact@davgracia.dev",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_TOOLS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Inicio",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Una colección de artículos donde comparto todo lo que me apasiona.",
};

export const TOOLS: Metadata = {
  TITLE: "Herramientas",
  DESCRIPTION: "Algunas herramientas que he hecho y que quizá puedan ayudarte.",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos en los que he trabajado y que me gustaría compartir.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/davgracia"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/davgracia",
  }
];
