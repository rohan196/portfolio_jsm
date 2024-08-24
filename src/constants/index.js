import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  html,
  css,
  js,
  node,
  react,
  mongo,
  express,
  java,
  sliders04,
  telegram,
  twitter,
  github,
  linkedin,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#hero",
  }, 
  {
    id: "1",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "2",
    title: "Expertise",
    url: "#skills",
  },
  {
    id: "3",
    title: "Experience",
    url: "#experience",
  },
  // {
  //   id: "4",
  //   title: "Roadmap",
  //   url: "#roadmap",
  // }
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "UI/UX - Fronend Development",
    text: "Transforming creative visions into interactive, user-friendly web applications through cutting-edge front-end technologies.",
    date: "May 2023",
    part: 1,
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Backend Development",
    text: "Architecting resilient backend systems to drive functionality and performance, ensuring reliable data processing and seamless application logic.",
    date: "May 2023",
    part: 2,
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Databases",
    text: "Harnessing the power of data with efficient database management, ensuring seamless storage, retrieval, and management of critical information.",
    date: "May 2023",
    part: 3,
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration & Deployment",
    text: "Seamlessly integrating diverse systems and APIs, bridging functionalities to create cohesive and efficient digital ecosystems.",
    date: "May 2023",
    part: 4,
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Blending creativity with technical expertise to build dynamic, user-friendly web applications. Proficient in front-end & back-end technologies.";

export const collabContent = [
  {
    id: "0",
    title: "Front-End Technologies",
    text: "Figma, HTML, CSS, JavaScript, React, Tailwind ",
  },
  {
    id: "1",
    title: "Backend Technologies",
    text: "Node.js, Express, MySQL, MongoDB, FireBase",
  },
  {
    id: "2",
    title: "Additional Skills",
    text: "Git/GitHub, Vercel",
  },
];

export const techStack = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "HTML",
    icon: html,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "CSS",
    icon: css,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "JS",
    icon: js,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "React",
    icon: react,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Node",
    icon: node,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Mongo",
    icon: mongo,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Java",
    icon: java,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "SD Coaching",
    description: "Created an website for a coaching center as a freelance project",
    price: "0",
    link: "https://github.com/Cypher0214/Edu-Website",
    features: [
      "An educational website, enhancing its online visibility.",
      "Utilized React.js, Tailwind CSS, for robust development.",
      "Created a MongoDB Admin Portal for easy website updates.",
    ],
  },
  // {
  //   id: "1",
  //   title: "Premium",
  //   description: "Advanced AI chatbot, priority support, analytics dashboard",
  //   price: "9.99",
  //   features: [
  //     "An advanced AI chatbot that can understand complex queries",
  //     "An analytics dashboard to track your conversations",
  //     "Priority support to solve issues quickly",
  //   ],
  // },
  {
    id: "1",
    title: "OffShop.co",
    description: "An E-Commerce Website made as a group project",
    price: null,
    link: "https://github.com/rohan196/offShop",
    features: [
      "Created a Full Stack E-commerce website with MERN.",
      "Includes advanced E-commerce funstionalities and features.",
      "Gained enhanced skills in scalable web app development.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "CarePulse: Helthcare",
    text: "Book doctor appointments without the hassle of standing in hospital queues. Keep patient records and manage appointments too.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    link: "https://carepulse-rohan.vercel.app/",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "OffShop.co",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    link: "https://github.com/rohan196/offShop",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Promptopia",
    text: "Open Source AI prompting tool for developers to discover, create and share creative prompts among the community.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    link: "https://promptopia-rps.vercel.app/",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "SD Coaching",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    link: "https://github.com/Cypher0214/Edu-Website",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "CloudCraft",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    link: "https://github.com/rohan196/weather-app-using-react",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Gericht",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    link: "https://github.com/rohan196/Restaurant-Brochure-App",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "GitHub",
    iconUrl: github,
    url: "https://github.com/rohan196",
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/rohan196/",
  },
  {
    id: "2",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/rohan_rajput196",
  },
  {
    id: "3",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/rajput.rohan196/",
  },
];
