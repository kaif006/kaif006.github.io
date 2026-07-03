import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Muhammad Kaif", //[cite: 1]
  initials: "MK",
  url: "https://github.com/kaif006", //[cite: 1]
  location: "Karachi, Pakistan", //[cite: 1]
  locationLink: "https://www.google.com/maps/place/Karachi",
  description:
    "Third-year CS student with a strong focus on software architecture, game development, and graphics programming.[cite: 1]",
  summary:
    "I am a Computer Science student at NED University of Engineering & Technology. I specialize in software architecture, game development, and graphics programming. I have experience with C#, C++, Python, JavaScript, and SQL, and I actively develop projects using Unity, Unreal Engine, and custom shaders.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from custom game engines to full-stack applications. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7, enabled: true,
      label: "Hackathons",
      heading: "I like building things",
      text: "I enjoy participating in game jams and hackathons to challenge myself and build incredible things under strict time constraints.",
    },
    photos: {
      order: 6, enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Feel free to reach out via email or LinkedIn.",
    },
  },
  photos: [],
  skills: [
    { name: "C#", icon: Icons.code }, //[cite: 1]
    { name: "C++", icon: Icons.code }, //[cite: 1]
    { name: "Python", icon: Python }, //[cite: 1]
    { name: "JavaScript", icon: Icons.code }, //[cite: 1]
    { name: "SQL", icon: Postgresql }, //[cite: 1]
    { name: "Unity", icon: Icons.code }, //[cite: 1]
    { name: "Unreal Engine", icon: Icons.code }, //[cite: 1]
    { name: "OpenGL", icon: Icons.code }, //[cite: 1]
    { name: "Django", icon: Icons.code }, //[cite: 1]
    { name: "React", icon: ReactLight }, //[cite: 1]
    { name: "Git & GitHub", icon: Icons.github }, //[cite: 1]
    { name: "Linux (Ubuntu)", icon: Icons.code }, //[cite: 1]
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "kaifjallalani@gmail.com", //[cite: 1]
    tel: "0309-3281070", //[cite: 1]
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kaif006", //[cite: 1]
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/kaif-j/", //[cite: 1]
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kaifjallalani@gmail.com", //[cite: 1]
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "NED University BCIT Department", //[cite: 1]
      href: "",
      badges: [],
      location: "Karachi, Pakistan", //[cite: 1]
      title: "Software Engineering Intern", //[cite: 1]
      logoUrl: "", 
      start: "July 2025", //[cite: 1]
      end: "July 2025", 
      description:
        "Assisted in developing a full stack Inventory Management System to track and manage university resources.[cite: 1] Built the backend architecture utilizing Python and Django to handle relational data processing.[cite: 1] Engineered the frontend interface using React to provide a seamless, responsive user experience.[cite: 1]",
    },
  ],
  education: [
    {
      school: "NED University of Engineering & Technology", //[cite: 1]
      href: "",
      degree: "Bachelor of Science in Computer Science", //[cite: 1]
      logoUrl: "", 
      start: "",
      end: "Expected 2027", //[cite: 1]
    },
  ],
  projects: [
    {
      title: "Tiptoe Thief", //[cite: 1]
      href: "https://kaif006.itch.io/tiptoe-thief", //[cite: 1]
      dates: "Feb. 2026", //[cite: 1]
      active: true,
      description:
        "Collaborated with 'Team Untitled' to develop a stealth focused game under a strict 48 hour time constraint for the Global Game Jam, securing the Runner Up position.[cite: 1] Programmed custom player controllers emphasizing precise stealth mechanics over standard speed, specifically implementing left-shift sneak states and eliminating default running behaviors.[cite: 1] Managed project version control and repository integration with teammates to ensure collision-free merges during the rapid development cycle.[cite: 1] Created a custom post process effect to imitate CCTV footage for a visual differentiating factor.[cite: 1]",
      technologies: [
        "Unity", //[cite: 1]
        "C#", //[cite: 1]
      ],
      links: [
        {
          type: "Website",
          href: "https://kaif006.itch.io/tiptoe-thief", //[cite: 1]
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Local Multiplayer Ragdoll Party Game", //[cite: 1]
      href: "",
      dates: "April 2026", //[cite: 1]
      active: true,
      description:
        "Developed a local multiplayer course project focused on robust game loop architecture.[cite: 1] Engineered active ragdoll capabilities for characters to be affected by physics while still under player control.[cite: 1] Programmed a combat system with combo mechanics, and physics based attacks.[cite: 1]",
      technologies: [
        "Unreal Engine", //[cite: 1]
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Comic Fight (2.5D Fighting Game)", //[cite: 1]
      href: "",
      dates: "October 2025", //[cite: 1]
      active: true,
      description:
        "Designed a custom toon shader by combining a sobel shader, and a cel shader.[cite: 1] Programmed responsive fighting mechanics with animation triggered hit boxes, and combo system with cool down capability.[cite: 1]",
      technologies: [
        "Unity", //[cite: 1]
        "C#", //[cite: 1]
        "HLSL", //[cite: 1]
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Harsh Dunes (3D Narrative Adventure Game)", //[cite: 1]
      href: "",
      dates: "November 2025", //[cite: 1]
      active: true,
      description:
        "Programmed a scalable event triggered dialogue system complete with responsive UI.[cite: 1] Architected a robust character controller utilizing a Finite State Machine (FSM) to seamlessly manage and transition between locomotion, combat, stealth, and aerial mechanics.[cite: 1] Engineered a responsive combat system, utilizing layered animation state machines and blend trees to seamlessly integrate upper body attack states with lower body locomotion.[cite: 1]",
      technologies: [
        "Unity", //[cite: 1]
        "C#", //[cite: 1]
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Global Game Jam", //[cite: 1]
      dates: "Feb. 2026", //[cite: 1]
      location: "Karachi, Pakistan",
      description: "Collaborated with 'Team Untitled' to develop a stealth focused game under a strict 48 hour time constraint, securing the Runner Up position with 'Tiptoe Thief'.[cite: 1]",
      image: "",
      win: "Runner-Up", //[cite: 1]
      links: [
        {
          title: "Itch.io",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://itch.io/tiptoe-thief", //[cite: 1]
        },
      ],
    }
  ],
} as const;