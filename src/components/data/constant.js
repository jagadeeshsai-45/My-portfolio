import RoboImg from "../data/Robo.jpg";
import Plant from "../data/Plant.png";
import Blynk from "../data/Blynk.jpg";
import Gym from "../data/Gym.png";
import Python from "../data/Python.png";
import Java from "../data/Java.png";
import C from "../data/C.png";
import React from "../data/React.png";
import JavaScript from "../data/JavaScript.png";
import Android from "../data/Android.svg";
import Css from "../data/CSS.png";
import Html from "../data/HTML.png";
import platproject from "./gym.png";
import { image } from "framer-motion/client";
import safe from "../data/safe.png"



const personalInfo = {
  greeting: "Hello, welcome to my website!",
  intro: "I am a software developer.",
  description: "I specialize in full-stack development.",
  message: "Feel free to explore my projects.",
  contact: "Contact me for more information."
};

const skills = [
  {
    name: "Java",
    description: "Proficient in data analysis and machine learning.",
    img:Java
  },
   
  
  {
    name: "JavaScript",
    description: "Experienced in ES6+, React",
    img: JavaScript
  },
  {
    name: "Python",
    description: "Proficient in data analysis and machine learning.",
    img:Python
  },
  {
    name: "HTML",
    description: "Expertise in building responsive web designs.",
    img:Html
  },

  {
    name: "CSS",
    description: "Expertise in building responsive web designs.",
    img:Css
  },
  {
    name: "SQL",
    description: "Experienced with relational databases like MySQL.",
    img:JavaScript
  },
   
  {
    name: "React",
    description: "Version control and collaboration tools.",
    img:React
  }
];

const projects = [
 
  {
    name: "App-Based Plant Disease Detection",
    description: "Developed a mobile application that uses image analysis to identify plant diseases accurately",
    image: Plant,
    technologies: ["Python", "Data Analysis", "Machine Learning"], // Make sure this is an array
    url:"https://github.com/jagadeeshsai-45/Plant_disease_detection-main.git",
  },
  
  {
    name: "Gym Management System",
    description: "Created a comprehensive web page for managing gym members, staff, and equipment efficiently.",
    image: Gym,
    technologies: ["React+Vite", "MySQL"], // Make sure this is an array
    url:"https://github.com/jagadeeshsai-45/gym-management-system.git",
  },

  {
    name: "Safecommute AI",
    description: "Real-time Transportation Intelligence platform leveraging ML models for smarter commutes.",
    image: safe, // Make sure this image exists in the data folder
    technologies: ["TypeScript", "ML models", "Node.js"],
    url: "https://safecommuteai.netlify.app"
  },

];
export { personalInfo, skills, projects };
