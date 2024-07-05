import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <section id="education" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-2">Bachelor of Engineering in Information Technology</h3>
            <p>Aug-2021 To Jun-2024</p>
            <p>College: NEW LJ INSTITUTE OF ENGINEERING AND TECHNOLOGY(GTU)<br/>
            Grade:  8.43 CGPA</p><br/><br/>

            <h3 className="text-2xl font-bold mb-2">Diploma in Engineering in Computer Engineering</h3>
            <p>Aug-2018 To Jun-2021</p>
            <p>College: R.C. Technical Institute(GTU)<br/>
            Grade:  8.84 CGPA</p><br/><br/>

            <h3 className="text-2xl font-bold mb-2">10th</h3>
            <p>May-2017 To March-2018</p>
            <p>School: Gurukrupa Vidhyalay(GSEB)<br/>
            Grade:  74.16 %</p><br/><br/>
          </motion.div>
          {/* Add more education entries as needed */}
        </div>
      </div>
    </section>
  );
}

export default Education;
