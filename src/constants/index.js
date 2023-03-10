import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cisco,
  slack,
  zoom,
  carnegie,
  C,
  Cplus,
  elastic,
  gym,
  java,
  jenkins,
  jira,
  python,
  pytorch,
  R,
  sml,
  tensor,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "jenkins",
    icon: jenkins,
  },
  {
    name: "jira",
    icon: jira,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "C++",
    icon: Cplus,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "R",
    icon: R,
  },
  {
    name: "Standard ML",
    icon: sml,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Zoom Video Communications",
    icon: zoom,
    iconBg: "#E6DEDD",
    date: "June 2018 - August 2018",
    points: [
      "Identified closed captioning and accessibility issues on the Zoom platform",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to  troubleshoot accessibility violations on the platform and website",
      "Created solutions using Javascript/HTML/CSS for Zoom’s conflicts with the updated Web Content Accessibility Guidelines 2.1",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "Carnegie Mellon College of Engineering",
    icon: carnegie,
    iconBg: "#E6DEDD",
    date: "May 2020 - September 2020",
    points: [
      "Worked on a Bill and Melinda Gates Foundation funded computer vision project that uses webcam/cellphone cameras to capture pulse rate, respiratory rate, and other important body vitals",
      "Adapted the lab’s computer vision application to mobile using React Native and Node.js",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Cisco Systems",
    icon: cisco,
    iconBg: "#E6DEDD",
    date: "May 2021 - August 2021",
    points: [
      "Engineered a dashboard view providing useful insights and metrics used by the entire Cisco MIG team",
      "Developed all metrics from scratch using Elasticsearch/Java for backend API development and React/Javascript for frontend visualizations",
      "Held end to end ownership of deliverables to production- including code, test, debug, document, analysis, scoping, grooming, planning, model, design, develop, and push to production",
      "Excelled in agile development, regularly pushing more code than assigned",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Slack",
    icon: slack,
    iconBg: "#E6DEDD",
    date: "May 2022 - August 2022",
    points: [
      "Implemented a new feature from concept through deployment within Slack API’s Block Kit which was set to be released to open beta within Q4 of 2022",
      "Migrated outdated Javascript components to Typescript functional components",
      "Collaborated extensively with engineers across platforms to design a standardized UI for the new feature",
      "Identified and resolved front-end bugs submitted on JIRA in between feature  code reviews",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
