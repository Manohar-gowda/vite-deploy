// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 p-6 text-white text-center space-y-4 shadow-inner">
  <p className="text-lg font-semibold">
    © 2024 <span className="text-orange-500">Manohar</span>. All rights reserved.
  </p>
  <div className="space-y-2">
    <p>
      <span className="font-semibold">Contact:</span>{" "}
      <a
        href="mailto:gowdamanohar45@gmail.com"
        className="text-orange-400 hover:text-orange-500 transition duration-200"
      >
        gowdamanohar45@gmail.com
      </a>{" "}
      | <span className="font-semibold">Mobile:</span>{" "}
      <a
        href="tel:+918073825148"
        className="text-orange-400 hover:text-orange-500 transition duration-200"
      >
        8073825148
      </a>
    </p>
    <p>
      <span className="font-semibold">LinkedIn:</span>{" "}
      <a
        href="https://www.linkedin.com/in/manohar-gowda-24a64b255/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-400 hover:text-orange-500 transition duration-200"
      >
        Manohar Gowda
      </a>
    </p>
    <p>
      <span className="font-semibold">GitHub:</span>{" "}
      <a
        href="https://github.com/Manohar-gowda"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-400 hover:text-orange-500 transition duration-200"
      >
        github.com/Manohar-gowda
      </a>
    </p>
  </div>
  <div className="space-y-2">
    <p className="font-medium">
      <span className="text-orange-500">Java Full Stack Intern</span> at{" "}
      <a
        href="https://www.kodnest.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-400 hover:text-orange-500 transition duration-200"
      >
        Kodnest EdTech Bangalore
      </a>
    </p>
    <p>Graduated 2024 - Computer Science and Engineering</p>
  </div>
</footer>

  );
};

export default Footer;
