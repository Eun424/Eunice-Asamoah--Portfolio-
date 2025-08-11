// src/data/data.js
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloudUploadAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: FaLaptopCode,
    description:
      "Build responsive, accessible and performant user interfaces with React and Tailwind CSS. I create component-driven UIs that scale and provide great user experiences across devices.",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: FaServer,
    description:
      "Design and implement robust server-side logic, RESTful APIs and microservices using Node.js/Express (or similar). I focus on security, performance and clean architecture.",
  },
  {
    id: 3,
    title: "Database Design",
    icon: FaDatabase,
    description:
      "Model and maintain reliable databases (SQL & NoSQL). I optimise schemas, write efficient queries and ensure data integrity and backups for production-ready applications.",
  },
  {
    id: 4,
    title: "Deployment & Maintenance",
    icon: FaCloudUploadAlt,
    description:
      "Automate builds, CI/CD pipelines and deployments. I deploy apps to cloud providers, configure monitoring, and maintain uptime and performance for production systems.",
  },
];

export const skills = [
  { id: 1, title: "HTML", icon: FaHtml5, color: "#FF6B6B" },
  { id: 2, title: "CSS", icon: FaCss3Alt, color: "#FFC75F" },
  { id: 3, title: "TailwindCSS", icon: SiTailwindcss, color: "#4ECDC4" },
  { id: 4, title: "ReactJS", icon: FaReact, color: "#9D94FF" },
  { id: 5, title: "JavaScript", icon: FaJsSquare, color: "#FFAB76" },
  { id: 6, title: "Node.js", icon: FaNodeJs, color: "#6C7BFF" },
];
