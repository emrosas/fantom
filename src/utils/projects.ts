export interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  siteType: "Marketing site" | "E-commerce site" | "Web app";
  service: "Design & Development" | "Development" | "Design";
}


export const projects: Project[] = [
  {
    id: 1,
    title: "La Postreria 77",
    description:
      "The La Postreria 77 website was built using Webflow and its CMS solution. The website is fully responsive and features a dynamic menu solution that allows the client to easily update the menu items and prices. This feature alse enables them to divide their menu into multiple branches by utilizing stylized and reusable components.",
    imageSrc: "/images/lp.jpg",
    imageAlt: "La Postreria 77",
    siteType: "Marketing site",
    service: "Design & Development",
  },
  {
    id: 2,
    title: "Party Game Companion",
    description:
      "This is a simple, fully responsive web application that allows the user to keep track of score and displays a leaderboard to be used when playing party games with friends.",
    imageSrc: "/images/pgc.jpg",
    imageAlt: "Party Game Companion",
    siteType: "Web app",
    service: "Design & Development",
  },
  {
    id: 3,
    title: "La Pasteleria de La Postreria 77",
    description:
      "This simple website is both elegant and informative, it aims to provide the user with a quick and easy way to find the location of the bakery and to contact them.",
    imageSrc: "/images/lpdlp.jpg",
    imageAlt: "La Pasteleria de La Postreria 77",
    siteType: "Marketing site",
    service: "Design & Development",
  },
  {
    id: 4,
    title: "Herrmat",
    description:
      "Herrmat's site features an integrated search and filter solution that allows the user to easily find the product they are looking for. The site is fully responsive and features a dynamic catalog solution that allows the client to easily update the catalogs items and prices.",
    imageSrc: "/images/herrmat.jpg",
    imageAlt: "Herrmat",
    siteType: "E-commerce site",
    service: "Design & Development",
  },
  {
    id: 5,
    title: "The Wrap Co.",
    description:
      "This is a fully responsive website featuring static and dynamic elements throughtout the site. Built with Astro for it's unmatched speed and React for it's dynamic capabilities.",
    imageSrc: "/images/twc.jpg",
    imageAlt: "The Wrap Co.",
    siteType: "Marketing site",
    service: "Design",
  },
  {
    id: 6,
    title: "Instituto Victoria",
    description:
      "Herrmat's site features an integrated search and filter solution that allows the user to easily find the product they are looking for. The site is fully responsive and features a dynamic catalog solution that allows the client to easily update the catalogs items and prices.",
    imageSrc: "/images/herrmat.jpg",
    imageAlt: "Herrmat",
    siteType: "E-commerce site",
    service: "Design & Development",
  },
];
