import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white fixed w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div 
          className="text-2xl font-bold" 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Mr.Developer 👨‍💻
        </motion.div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:justify-between">
            <li className="lg:mx-4"><a href="#about" className="block mt-4 lg:inline-block lg:mt-0 hover:underline">About</a></li>
            <li className="lg:mx-4"><a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 hover:underline">Projects</a></li>
            <li className="lg:mx-4"><a href="#skills" className="block mt-4 lg:inline-block lg:mt-0 hover:underline">Skills</a></li>
            <li className="lg:mx-4"><a href="#experience" className="block mt-4 lg:inline-block lg:mt-0 hover:underline">Experience</a></li>
            <li className="lg:mx-4"><a href="#education" className="block mt-4 lg:inline-block lg:mt-0 hover:underline">Education</a></li>
            <li className="lg:mx-4"><a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;