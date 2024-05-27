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
  sliders04,
  telegram,
  twitter,
  github,
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
    text: " Transforming creative visions into interactive, user-friendly web applications through cutting-edge front-end technologies.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Backend Development",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Databases",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration & Deployment",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
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
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
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
    title: "Web4L Portfolio",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    link:"https://github.com/rohan196/portfolio_jsm",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "OffShop.co",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    link:"https://github.com/rohan196/offShop",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Memories",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    link:"https://github.com/rohan196/memories",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "SD Coaching",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    link:"https://github.com/Cypher0214/Edu-Website",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "CloudCraft",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    link:"https://github.com/rohan196/weather-app-using-react",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Gericht",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    link:"https://github.com/rohan196/Restaurant-Brochure-App",
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
    iconUrl: github,
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
    url: "#",
  },
];
