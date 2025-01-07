import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>
        <motion.ul 
          className="flex flex-wrap justify-center" 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">ReactJS</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">NodeJS</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">ExpressJS</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">MySQL</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">PostgreSQL</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">MongoDB</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">Postman</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">Java</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">Hibernate</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">Spring</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">HTML</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">CSS</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">Javascript</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">JQuery</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">Bootstrap</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">Basic of Networking</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">Git</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">GitHub</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">GitLab</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">Leadership</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">Problem Solving</li>
          <li className="m-4 p-4 bg-white rounded-lg shadow-lg">Time Management</li>
          {/* Add more skills as needed */}
        </motion.ul>
      </div>
    </section>
  );
}

export default Skills;
