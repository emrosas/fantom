export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Intentional Design",
    description: "We make your website with your brand’s goals in mind at every turn to help you achieve them faster.",
    icon: "int-design",
  },
  {
    title: "Advanced Interactions",
    description: "From basic to complex animations we help set your site apart by fully leveraging visual storytelling and captivating your users with a high end experience.",
    icon: "adv-interactions"
  },
  {
    title: "Integrations",
    description: "Connect your website to tools you love like Notion, Airtable, Google Sheets and more.",
    icon: "integrations"
  },
  {
    title: "Content Creation",
    description: "We create hight-quality content for your blog and manage it through a personalized CMS to make your site easily findable.",
    icon: "content-creation"
  },
  {
    title: "SEO optimization",
    description: "We audit, optimize and cleanup your website to make it rank faster and higher on search engines and make future endeavors more easily approachable.",
    icon: "seo"
  },
  {
    title: "Analytics",
    description: "We track your site’s performance using Google Analytics and other tools to help you understand how your users are interacting with your brand.",
    icon: "analytics"
  },
];
