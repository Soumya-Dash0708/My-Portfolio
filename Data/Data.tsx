import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
  CardProps,
} from "@/Types";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const services: ServiceProps[] = [
  { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 113 },
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 209 },
  { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 369 },
  { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 313 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 4,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 22,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 12,
    text: "Design Items",
  },
  {
    id: 4,
    number: 32,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/univer.png",
    name: "Educational Website",
    tools: ["React", "Typescript", "Tailwind CSS"],
  },
  {
    id: 2,
    img: "/e-commerce.png",
    name: "React E-commerce Website",
    tools: ["React", "Typescript", "Tailwind CSS"],
  },
  {
    id: 3,
    img: "/winwadi.png",
    name: "Affiliate marketing Website",
    tools: ["React", "Typescript", "Tailwind CSS"],
  },
  {
    id: 4,
    img: "/realestate.png",
    name: "Real-Estate Website",
    tools: ["React", "Typescript", "Tailwind CSS"],
  },
];

const skills = [
  { name: "HTML", level: 80 },
  { name: "ReactJS", level: 75 },
  { name: "NextJS", level: 65 },
  { name: "TypeScript", level: 60 },
  { name: "JavaScript", level: 75 },
  { name: "Tailwind CSS", level: 70 },
];

const servicecards: CardProps[] = [
  {
    id: 1,
    img: "/eng.png",
    service: "Engineering",
    desc: "21",

    gradientColor: "bg-gradient-to-tl from-indigo-300 to-purple-500",
  },
  {
    id: 2,
    img: "/analytics.png",
    service: "Business",
    desc: "12",

    gradientColor: "bg-gradient-to-tl from-red-200 to-red-500",
  },
  {
    id: 3,
    img: "/healthcare.png",
    service: "Medicine",
    desc: "5",

    gradientColor: "bg-gradient-to-tl from-cyan-300 to-cyan-500",
  },

  {
    id: 4,
    img: "/social-science.png",
    service: "Social Science",
    desc: "9",

    gradientColor: "bg-gradient-to-tl from-pink-300 to-pink-500",
  },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "Bhubaneswar,Odisha,India" },
  { id: 2, title: "Phone", text: "+91 6371754107" },
  { id: 3, title: "Email", text: "soumyaranjandash0708@gmail.com" },
];

export {
  navLinks,
  projects,
  countUpItems,
  services,
  skills,
  contacts,
  servicecards,
};
