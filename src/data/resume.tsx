import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Varun S",
  initials: "VS",
  url: "https://dillion.io",
  location: "Bengaluru, IN",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Results-driven engineer skilled in Python and SQL, with experience building scalable data pipelines and software applications.",
  summary:
    "Results driven engineer with experience in building scalable data pipelines and software applications. Skilled in Python, SQL, and cloud platforms with strong knowledge of algorithms, databases, and distributed systems. Dedicated to turning business needs into efficient technical solutions in data processing and application development. Collaborative team player focused on clean code and high performance systems.",
  avatarUrl: "/varavroom.jpeg",
  skills: [
    "Python",
    "SQL",
    "PySpark",
    "Azure Databricks",
    "IICS (Informatica Intelligent Cloud Services)",
    "Power BI",
    "Azure SQL",
    "Microsoft SQL Server",
    "Java",
    "Vue",
    "Javascript"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "varunsomashekar18@gmail.com",
    tel: "+91 7338093538",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/VaraVroom",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/varun-s-054771298/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Resume:{
        name: "Resume",
        url: "https://drive.google.com/file/d/1tgRsj-4rD_H2KWkO2277-iD1VW-pT3M3/view",
        icon: Icons.resume,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "varunsomashekar@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Informatica",
      href: "https://www.informatica.com/",
      badges: [],
      location: "Bengaluru, IN",
      title: "Data Engineer Trainee",
      logoUrl: "/informatica.jpg",
      start: "June 2025",
      end: "Present",
      description:
        "At Informatica, I work as a Data Engineer Intern, contributing to the design, development, and optimization of data pipelines. My role involves working with large datasets, ensuring data quality, and preparing data for analysis and reporting. I collaborate with the team to implement ETL processes and improve data workflows, supporting business intelligence and analytics initiatives.",
    },
  ],
  education: [
    {
      school: "Reva University",
      href: "https://buildspace.so",
      degree: "Bachelor's of Technology in Artificial Intelligence and Data Sceince",
      logoUrl: "/reva.jpg",
      start: "2025",
      end: "2021",
    },
    
  ],
  projects: [
    {
      title: "Tech Bridge",
      href: "https://github.com/VaraVroom/TechBridge",
      dates: "Nov 2024 - Mar 2025",
      active: true,
      description:
        "TechBridge is a career assistance platform designed to help users assess their technical skills, identify their proficiency level, recommend targeted courses to bridge skill gaps, and provide job recommendations based on their resume.",
      technologies: [
        "Vue",
        "Javascript",
        "Python",
        "Flask",
        "Machine Learning"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/VaraVroom/TechBridge",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/TechBridge.png",
      video:
        "",
    },
    {
      title: "LexWarp",
      href: "https://github.com/VaraVroom/LexWarp",
      dates: "Jan 2024",
      active: true,
      description:
        "Built a Chrome extension for dyslexia assistance with word tracking, OpenDyslexic font customization, a reading ruler, and text-to-speech for selected words.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/VaraVroom/LexWarp",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/lexwarp.png",
      video: "",
    },
    {
      title: "Youtube Summarizer",
      href: "https://github.com/VaraVroom/youtube_transcript_summarizer",
      dates: "April 2024",
      active: true,
      description:
        "Developed a Chrome extension with Flask to fetch YouTube transcripts via API and generate concise summaries using NLTK for quick content overviews.",
      technologies: [
        "Python",
        "NLTK",
        "Flask",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/VaraVroom/youtube_transcript_summarizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/youtube.png",
      video: "",
    },
    {
      title: "Zen",
      href: "https://automatic.chat",
      dates: "Feb 2024 - March 2024",
      active: true,
      description:
        "Developed a gamified web app for managing stress, anxiety, and depression, measuring mental health levels, assigning daily activities, and enabling self-rewards with periodic reassessments.",
      technologies: [
        "Vue",
        "Javascript",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://zen-red.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/VaraVroom/zen",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/zen.jpeg",
      video:
        "",
    },
  ],
} as const;
