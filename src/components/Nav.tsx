'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 flex justify-between items-center px-6 py-4 ${
        isScrolled
          ? darkMode
            ? 'bg-gray-900 shadow-lg shadow-gray-800/50'
            : 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className={`text-2xl font-bold ${
        darkMode 
          ? 'text-gray-200 hover:text-lime-400' 
          : 'text-gray-900 hover:text-lime-600'
      }`}>
        Pranav Sonawane
      </div>
      
      {/* Navigation Items */}
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href} 
            className={`transition-colors duration-300 ${
              darkMode 
                ? 'text-gray-200 hover:text-lime-400' 
                : 'text-gray-900 hover:text-lime-600'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      
      {/* Right Corner - Dark Mode & Resume */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleDarkMode} 
          aria-label="Toggle dark mode"
          className={`transition-colors duration-300 ${
            darkMode 
              ? 'text-gray-200 hover:text-lime-400' 
              : 'text-gray-900 hover:text-lime-600'
          }`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        
        <a 
          href="https://drive.google.com/file/d/1eaeOf9VOZYM3foh2aG0I62jAUwloLxyE/view?usp=drivesdk" 
          target="_blank"
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${
            darkMode 
              ? 'bg-lime-500 text-gray-900 hover:bg-lime-400' 
              : 'bg-gray-900 text-gray-200 hover:bg-gray-800'
          }`}
        >
          Resume
        </a>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`transition-colors duration-300 ${
            darkMode 
              ? 'text-gray-200 hover:text-lime-400' 
              : 'text-gray-900 hover:text-lime-600'
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className={`md:hidden absolute top-full left-0 w-full py-4 px-6 shadow-lg ${
            darkMode 
              ? 'bg-gray-900 text-gray-200' 
              : 'bg-white text-gray-900'
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 transition-colors duration-300 ${
                darkMode 
                  ? 'text-gray-200 hover:text-lime-400' 
                  : 'text-gray-900 hover:text-lime-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;