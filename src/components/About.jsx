import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-lg max-w-4xl mx-auto" 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello! I'm Jaydeepsinh Zala, a MERN Stack Developer with a deep passion for ReactJS and NodeJS. Throughout my career, I've developed a strong proficiency in ReactJS-NodeJS-ExpressJS-MongoDB and MySQL also have interested in Java and also have knowledge about Core Java, Advance Java Concepts, Hibernate and Spring Frameworks, which has allowed me to create a Projects. Outside of work, Let's connect and discuss how we can create meaningful opportunities together!
        </motion.p>
      </div>
    </section>
  );
}

export default About;
