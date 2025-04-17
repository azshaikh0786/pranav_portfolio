import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer
      className={`py-10 text-center transition-all duration-300 ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-gray-800"
      }`}
    >
      {/* Name / Branding */}
      <h3
        className={`text-2xl font-bold mb-4 ${
          darkMode ? "text-gray-200 hover:text-lime-400" : "text-gray-900 hover:text-lime-600"
        }`}
      >
        Pranav Sonawane
      </h3>

      {/* Navigation Links */}
      <nav className="my-4">
        {["Education", "Certifications", "Projects"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`mx-3 text-sm font-medium transition-colors ${
              darkMode ? "text-gray-400 hover:text-lime-400" : "text-gray-600 hover:text-lime-600"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 my-6">
        {[
          { href: "https://www.linkedin.com/in/pranav-sonawane-982126251", icon: Linkedin },
          { href: "https://github.com/pranavs15", icon: Github },
          { href: "mailto:pranav.sonawane@mitaoe.ac.in", icon: Mail },
          { href: "tel:+917249271363", icon: Phone },
        ].map(({ href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full border transition-all ${
              darkMode
                ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                : "bg-gray-100 border-gray-300 hover:bg-gray-300"
            }`}
          >
            <Icon className={`w-6 h-6 ${darkMode ? "text-lime-400" : "text-gray-900"}`} />
          </a>
        ))}
      </div>

      {/* Copyright Notice */}
      <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-600"}`}>
        &copy; {new Date().getFullYear()} Pranav Sonawane | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
