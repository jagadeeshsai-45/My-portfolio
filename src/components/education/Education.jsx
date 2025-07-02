import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Secondary School (10th)",
      institution: "Roots School Of Essential Faculties",
      year: "2018 - 2019",
      cgpa: "8.8", // Changed from Percentage to CGPA
    },
    {
      id: 2,
      degree: "Intermediate (12th)",
      institution: "XYZ Junior College",
      year: "2019 - 2021",
      percentage: "88%", // Still in Percentage
    },
    {
      id: 3,
      degree: "Bachelor of Engineering (B.Tech)",
      institution: "DEF Engineering College",
      year: "2021 - 2025",
      cgpa: "7.29", // Changed from Percentage to CGPA
    },
  ];

  return (
    <div className="education">
      <h2 className="education-title">Education</h2>
      <div className="education-container">
        {educationData.map((edu) => (
          <div key={edu.id} className="education-card">
            <FaGraduationCap className="edu-icon" />
            <h3>{edu.degree}</h3>
            <p className="edu-institution">{edu.institution}</p>
            <p className="edu-year">{edu.year}</p>
            {edu.cgpa ? (
              <p className="edu-score">CGPA: {edu.cgpa}</p>
            ) : (
              <p className="edu-score">Percentage: {edu.percentage}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
