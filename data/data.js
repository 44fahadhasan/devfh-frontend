import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export const projects = [
  {
    _id: "1",
    website_name: "Frnsup",
    website_type: "Online Newspaper Website",
    scroll_image_url: "https://i.imgur.com/rF7B2GT.jpg",
    overview: [
      {
        icon: "📁",
        title: "Project Name & Purpose",
        description:
          "An online newspaper platform offering news, articles, and subscriptions for both free and premium users.",
      },
      {
        icon: "⚙️",
        title: "Tech Stack",
        listType: "horizontal",
        lists: [
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Node.js",
          "Express",
          "MongoDB",
        ],
      },
      {
        icon: "⭐",
        title: "Key Features",
        lists: [
          "Separate News Sections: Premium and normal users can access content tailored to their subscription level.",
          "User Authentication: Secure login for users to view and manage their account.",
          "Admin Dashboard: Allows admins to manage news posts, users, and subscription statuses.",
          "Responsive Design: Works seamlessly across all devices.",
        ],
      },
      {
        icon: "🔗",
        title: "Links",
        lists: [
          "linkedLists",
          [
            { linkLabel: "Project Live", url: "https://frnsup.com" },
            {
              linkLabel: "GitHub Client",
              url: "https://github.com/44fahadhasan/frnsup-client",
            },
            {
              linkLabel: "GitHub Server",
              url: "https://github.com/44fahadhasan/frnsup-server",
            },
          ],
        ],
      },
    ],
    images_url: [
      "https://i.imgur.com/AH3YsYy.jpg",
      "https://i.imgur.com/4xq89kL.jpg",
      "https://i.imgur.com/2Ml69wS.jpg",
    ],
  },
  {
    _id: "2",
    website_name: "HireNow",
    website_type: "Job Portal Website",
    scroll_image_url: "https://i.imgur.com/BY2E3qT.jpg",
    overview: [
      {
        icon: "📁",
        title: "Project Name & Purpose",
        description:
          "A job portal for employers to post job listings with payment and for job seekers to apply.",
      },
      {
        icon: "⚙️",
        title: "Tech Stack",
        listType: "horizontal",
        lists: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js", "Node.js"],
      },
      {
        icon: "⭐",
        title: "Key Features",
        lists: [
          "Job Postings with Payment: Employers can post jobs after completing payments.",
          "Advanced Job Filters: Job seekers can search and filter based on category, location, and more.",
          "User Roles: Separate interfaces for job seekers, employers, and admins with dedicated features.",
          "Admin Control: Full access for managing users, job posts, and applications.",
        ],
      },
      {
        icon: "🔗",
        title: "Links",
        lists: [
          "linkedLists",
          [
            { linkLabel: "Project Live", url: "https://hiringplatform.com" },
            {
              linkLabel: "GitHub Client",
              url: "https://github.com/44fahadhasan/hirenow-client",
            },
            {
              linkLabel: "GitHub Server",
              url: "https://github.com/44fahadhasan/hirenow-server",
            },
          ],
        ],
      },
    ],
    images_url: [
      "https://i.imgur.com/EnWltZI.jpg",
      "https://i.imgur.com/2Vp8fqz.jpg",
      "https://i.imgur.com/9VklRHj.jpg",
    ],
  },
  {
    _id: "3",
    website_name: "MFS Connect",
    website_type: "Mobile Financial Service Application",
    scroll_image_url: "https://i.imgur.com/XGq9j6z.jpg",
    overview: [
      {
        icon: "📁",
        title: "Project Name & Purpose",
        description:
          "A mobile financial service app allowing users to transfer funds, check balances, and manage financial activities with role-based access.",
      },
      {
        icon: "⚙️",
        title: "Tech Stack",
        listType: "horizontal",
        lists: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "MongoDB"],
      },
      {
        icon: "⭐",
        title: "Key Features",
        lists: [
          "User Roles: Separate roles for Users, Agents, and Admins with unique privileges.",
          "Fund Transfers: Secure and fast money transfer with tracking options.",
          "Balance Inquiry: Users can quickly check their balance and transaction history.",
          "Responsive UI: Optimized for mobile and desktop views.",
        ],
      },
      {
        icon: "🔗",
        title: "Links",
        lists: [
          "linkedLists",
          [
            { linkLabel: "Project Live", url: "https://mfsconnect.com" },
            {
              linkLabel: "GitHub Client",
              url: "https://github.com/44fahadhasan/mfs-client",
            },
            {
              linkLabel: "GitHub Server",
              url: "https://github.com/44fahadhasan/mfs-server",
            },
          ],
        ],
      },
    ],
    images_url: [
      "https://i.imgur.com/p1B2ZRs.jpg",
      "https://i.imgur.com/1XdBcGJ.jpg",
      "https://i.imgur.com/vK5d5gT.jpg",
    ],
  },
];

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
