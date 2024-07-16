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
            <h3 className="text-2xl font-bold mb-2">Library Store</h3>
            <p>In this project, the admin has the capability to add new books to the inventory, ensuring the collection stays current and diverse. Users can easily sign up and log in to access their accounts, browse through the available books, and place orders. Once an order is placed, the admin plays a crucial role by having the authority to approve or reject the order based on availability or other criteria. Additionally, users have the flexibility to manage their cart data by updating the quantity of products, allowing for a seamless and customizable shopping experience.</p>
          </motion.div>


          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-2">Voting / Polling Site</h3>
            <p>In this project, users are able to register and log in to the website, where they can create polls on various topics. Other users can actively participate in these polls by submitting their votes. A live timer feature displays the remaining time until the poll concludes, ensuring participants are aware of the voting period. Users who create polls have the additional capability to view live results as they come in, providing real-time feedback on the poll's progress. Furthermore, users retain the ability to manage their polls, including the option to delete them if necessary, ensuring control over their created content.</p>
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
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
