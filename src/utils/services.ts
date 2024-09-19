export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Diseño Intencional",
    description:
      "Creamos sitios web teniendo en mente los objetivos de las marca en todo momento para ayudarles a alcanzarlos más rápido.",
    icon: "int-design",
  },
  {
    title: "Integraciones",
    description:
      "Conectamos tu sitio web a las herramientas que amas, como Notion, Airtable, Google Sheets y más.",
    icon: "integrations",
  },
  {
    title: "Iteracción Avanzada",
    description:
      "Desde animaciones básicas hasta lineas del tiempo complejas, cautivamos a los usuarios con una experiencia de alto nivel aprovechando al máximo la narración visual.",
    icon: "adv-interactions",
  },
  {
    title: "Creación de Contenido",
    description:
      "Creamos contenido de alta calidad para tu blog y lo gestionamos a través de un CMS personalizado para que tu sitio sea fácilmente encontrable en buscadores.",
    icon: "content-creation",
  },
  {
    title: "Optimización SEO",
    description:
      "Auditamos, optimizamos y limpiamos tu sitio web para que tenga una clasificación más rápida y más alta en los motores de búsqueda y para que los proyectos futuros sean más accesibles.",
    icon: "seo",
  },
  {
    title: "Analiticas",
    description:
      "Realizamos un seguimiento del rendimiento de tu sitio mediante Google Analytics y otras herramientas para ayudarte a comprender cómo interactúan tus usuarios con tu marca.",
    icon: "analytics",
  },
];
