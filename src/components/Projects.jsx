import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-2">Safe Travel Home to School App</h3>
            <p>The Safe Travel Home to School Project is an innovative application designed to enhance student security during their daily school commutes. This app provides real-time tracking of school buses and includes features tailored for both drivers and parents. Drivers can update the status of each student during pick-up and drop-off, while parents receive notifications and can track their child's location. Additional features include setting bus late alerts, applying for leave, viewing attendance, changing pickup points, and contacting drivers. This project ensures seamless communication and transparency, fostering a safer and more reliable school transportation experience.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-2">Toy Shop E-commerce Website</h3>
            <p>Toy-Shop is a dynamic e-commerce platform where users can easily browse and purchase products while sellers have comprehensive tools to list, update, and remove their items. Built using core Java and advanced Java concepts, Toy-Shop features user-friendly navigation and robust seller management capabilities, ensuring a seamless and efficient online shopping experience.</p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-2">Appointment Booking System for jan seva kendra</h3>
            <p>The Jan Seva Kendra Appointment Booking System is designed to streamline the process of booking slots for government services. Users can easily select and reserve time slots for their required services, which are then confirmed via email and SMS notifications. This system ensures efficient scheduling and reduces wait times, enhancing the overall user experience.</p>
          </motion.div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
