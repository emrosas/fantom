export interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  imageSrc: string;
}

export const projects = [
  {
    id: 1,
    name: "La Postreria 77",
    description:
      "The La Postreria 77 website was built using Webflow and its CMS solution. The website is fully responsive and features a dynamic menu solution that allows the client to easily update the menu items and prices. This feature alse enables them to divide their menu into multiple branches by utilizing stylized and reusable components.",
    tags: [
      "Web Design",
      "Web Development",
      "Webflow",
      "Javascript",
      "CMS",
      "Dynamic Menu Solution",
    ],
    imageSrc: "/lp.jpg",
  },
  {
    id: 2,
    name: "The Wrap Co.",
    description:
      "This is a fully responsive website featuring static and dynamic elements throughtout the site. Built with Astro for it's unmatched speed and React for it's dynamic capabilities.",
    tags: [
      "Web Design",
      "Web Development",
      "Astro JS",
      "Typescript",
      "Dynamic Menu Solution",
    ],
    imageSrc: "/twc.jpg",
  },
  {
    id: 3,
    name: "La Pasteleria de La Postreria 77",
    description:
      "This simple website is both elegant and informative, it aims to provide the user with a quick and easy way to find the location of the bakery and to contact them.",
    tags: ["Web Design", "Web Development", "Astro JS", "React"],
    imageSrc: "/lpdlp.jpg",
  },
  {
    id: 4,
    name: "Party Game Companion",
    description:
      "This is a simple, fully responsive web application that allows the user to keep track of score and displays a leaderboard to be used when playing party games with friends.",
    tags: ["UX/UI Design", "Web Development", "React", "Vite", "Zustand"],
    imageSrc: "/pgc.jpg",
  },
  {
    id: 5,
    name: "Herrmat",
    description:
      "Herrmat's site features an integrated search and filter solution that allows the user to easily find the product they are looking for. The site is fully responsive and features a dynamic catalog solution that allows the client to easily update the catalogs items and prices.",
    tags: [
      "Web Design",
      "Web Development",
      "Webflow",
      "CMS",
      "Dynamic Catalog",
    ],
    imageSrc: "/herrmat.jpg",
  },
];
