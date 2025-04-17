"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDarkMode } from "../context/DarkModeContext"; // Import the dark mode context

const skills = [
  { name: "HTML", icon: "/html.png", category: "Frontend" },
  { name: "CSS", icon: "/css.png", category: "Frontend" },
  { name: "JavaScript", icon: "/javascript.jpeg", category: "Frontend" },
  { name: "C++", icon: "/cpp.png", category: "language" },
  { name: "MongoDB", icon: "/mongodb.png", category: "Database" },
  { name: "MySQL", icon: "/mysql.png", category: "Database" },
  { name: "RHL", icon: "/rhl.png", category: "OS" },
  { name: "Git", icon: "/git.png", category: "Tools" },
  { name: "GitHub", icon: "/github.png", category: "Tools" },
  { name: "AWS", icon: "/aws.png", category: "Cloud" },
  { name: "Docker", icon: "/docker.png", category: "DevOps" },
  { name: "GCP", icon: "/GCP.png", category: "Cloud" }
  
];

const Expertise = () => {
  const { darkMode } = useDarkMode(); // Get dark mode state

  return (
    <section id= "skills"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className={`w-20 h-1 mx-auto rounded ${darkMode ? "bg-lime-400" : "bg-blue-500"}`} />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              <div
                className={`rounded-xl p-6 h-full flex flex-col items-center justify-center border transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 group-hover:border-lime-400"
                    : "bg-white border-gray-300 group-hover:border-blue-500"
                }`}
              >
                <div className="relative w-16 h-16 mb-4">
                  <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-medium text-center">{skill.name}</h3>
                <span
                  className={`text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    darkMode ? "text-lime-400" : "text-blue-500"
                  }`}
                >
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
