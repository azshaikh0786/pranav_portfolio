'use client';

import React, { useState, useEffect, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Code, Zap } from "lucide-react";
import { useDarkMode } from '../context/DarkModeContext';
import Avatar3D from "./Avatar";

interface Skill {
  icon: JSX.Element;
  text: string;
}


const Hero = () => {
  const { darkMode } = useDarkMode();
  const [showExpertise, setShowExpertise] = useState<boolean>(false);
  const [activeSkill, setActiveSkill] = useState<number>(0);

  const skills: Skill[] = [
    { icon: <Code className="w-6 h-6" />, text: "Developer" },
    { icon: <Zap className="w-6 h-6" />, text: "Coder" },
    { icon: <Zap className="w-6 h-6" />, text: "Competitive Programmer" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowExpertise(true);
    }, 1000);

    const skillTimer = setInterval(() => {
      if (showExpertise) {
        setActiveSkill((prev) => (prev + 1) % skills.length);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(skillTimer);
    };
  }, [showExpertise]);

  return (
    <section className={`relative min-h-screen flex items-center transition-colors duration-300 overflow-hidden ${
      darkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#fafafa] text-gray-900'
    }`}>
      

      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-lg font-medium ${
                darkMode ? 'text-lime-400' : 'text-lime-500'
              }`}
            >
              Hello, I&apos;m{' '}
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-5xl lg:text-6xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Pranav Sonawane
            </motion.h1>
          </div>

          <AnimatePresence mode="wait">
            {showExpertise && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="h-16 relative"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSkill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center space-x-2 text-xl ${
                      darkMode ? 'text-lime-400' : 'text-lime-600'
                    }`}
                  >
                    {skills[activeSkill].icon}
                    <span>{skills[activeSkill].text}</span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`text-lg max-w-xl leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            I’m a problem solver at heart, blending logic with creativity to build efficient and scalable solutions.
            I thrive on tackling challenges in the ever-evolving tech landscape. With a passion for innovation and a drive for continuous learning.
          </motion.p>

          <div className="flex space-x-4">
            {[ 
              { href: "https://github.com/pranavs15", icon: Github },
              { href: "https://www.linkedin.com/in/pranav-sonawane-982126251", icon: Linkedin },
              { href: "mailto:pranav.sonawane@mitaoe.ac.in", icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'text-gray-300 hover:text-lime-400' 
                    : 'text-gray-600 hover:text-lime-600'
                }`}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Avatar Component with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: ["0%", "-4%", "0%"]
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8, type: "spring", stiffness: 100 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative max-w-lg mx-auto"
        >
          <Avatar3D /> {/* Using Avatar component here */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
