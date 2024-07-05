import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="bg-blue-900 text-white py-16">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-5xl font-bold mt-4" 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Jaydeepsinh Zala
        </motion.h1>
        <motion.p 
          className="text-xl mt-4" 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          MERN Stack Developer
        </motion.p>
        <motion.img 
          src="http://localhost:3000/myPic.jpg" 
          alt="Your Name" 
          className="mx-auto mt-6 rounded-full w-32 h-32"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </header>
  );
}

export default Header;
