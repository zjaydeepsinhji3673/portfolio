import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h2>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <span>jaydeepsinh36.zala@gmail.com</span>
          </div>
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <span>+91 6353390190</span>
          </div>
          <div className="mb-4 flex items-center">
          <div className='mr-2 fw-bold' >< FaLinkedin/></div>
            <a href="https://www.linkedin.com/in/jaydeepsinh-zala-3673j" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
          <div className="mb-4 flex items-center">
            <div className='mr-2 fs-2' >< FaSquareGithub/></div>
            <a href="https://github.com/zjaydeepsinhji3673" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
          {/* Add more social media links as needed */}
        </div>
      </div>
      <h2 className='mt-5'>Made By Jaydeepsinh Zala ❤</h2>
    </section>
  );
}

export default Contact;
