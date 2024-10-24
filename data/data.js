import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export const projects = [1, 1, 1, 1, 1, 1, 1];

export const typeTitles = [
  "Frontend Engineer",
  500,
  "MERN Stack Developer",
  500,
  "React.js Developer",
  500,
  "Next.js Developer",
  500,
  "Full-Stack Developer",
  500,
  "Web Developer",
  500,
];

export const download = {
  name: "Resume",
  url: "",
};

export const listItems = [
  {
    _id: 1,
    name: "Home",
    path: "/",
  },
  {
    _id: 2,
    name: "About",
    path: "/About",
  },
  {
    _id: 3,
    name: "Projects",
    path: "/Projects",
  },
  {
    _id: 4,
    name: "Articles",
    path: "/Articles",
  },
  {
    _id: 5,
    name: "Contact",
    path: "/Contact",
  },
];

export const icons = [
  {
    _id: 1,
    link: "https://www.linkedin.com/in/44fahadhasan",
    icon: FaLinkedinIn,
  },
  {
    _id: 2,
    link: "https://github.com/44fahadhasan",
    icon: FaGithub,
  },
  {
    _id: 3,
    link: "https://www.facebook.com/44fahadhasan",
    icon: FaFacebookF,
  },
];

export const overview = [
  {
    icon: "📁",
    title: "Project Name & Purpose",
    para: "A personal portfolio website to showcase my work and skills as a Junior MERN Stack Developer.",
  },
  {
    icon: "⚙️",
    title: "Tech Stack",
    listType: "horizontal",
    lists: ["HTML", "CSS", "Tailwind css", "javaScript", "React.js"],
  },
  {
    icon: "⭐",
    title: "Key Features",
    lists: [
      " Fully Responsive Design: Optimized for mobile, tablet, and desktop viewing.",
      "Interactive Project Showcase: Displays detailed descriptions and live demos of all projects.",
      "Contact Form: Fully functional form with integrated email sending functionality.",
      "Dark/Light Mode (Optional): Enables users to switch themes according to preference.",
    ],
  },
  {
    icon: "🔗",
    title: "Links",
    lists: [
      "linkedLists",
      [
        { linkLabel: "Project Live", url: "" },
        { linkLabel: "GitHub Client", url: "" },
        { linkLabel: "GitHub Server", url: "" },
      ],
    ],
  },
];
