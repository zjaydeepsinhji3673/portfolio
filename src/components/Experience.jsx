import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
    return (
        <section id="experience" className="py-16">
            <div className="container mx-auto">
                <motion.h2
                    className="text-3xl font-bold mb-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Experience
                </motion.h2>
                <div className="space-y-8">
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-2xl font-bold mb-2">Full Stack(MERN Stack) Internship At Hyperlink Infosystem</h3>
                        <p>Jan-2024 To July-2024</p>
                        <p>● Gain knowledge about in depth of HTML, CSS, JAVASCRIPT AND JQUERY. <br />● Gain in depth knowledge of Nodejs and and creating REST APIs for projects.<br />● Gain in depth knowledge of ReactJS and created many projects</p><br /><br />


                        <h3 className="text-2xl font-bold mb-2">ReactJS Intern At NRCREW</h3>
                        <p>July-2023 To Aug-2023</p>
                        <p>● Learn about concepts of ReactJS like Function components, Props and states, Event handling, hooks and redux.</p><br/><br/>


                        <h3 className="text-2xl font-bold mb-2">Java Programming Internship At Tops Technology</h3>
                        <p>Feb-2023 To July-2023</p>
                        <p>● Gained knowledge about core Java and advance Java concepts.<br />● By using concepts of core and advance Java worked on e-commerce project.<br /> ● Gained knowledge of Frameworks like hibernate and spring.<br />● Performed CURD operation by using spring MVC.</p>
                    </motion.div>
                    {/* Add more experiences as needed */}
                </div>
            </div>
        </section>
    );
}

export default Experience;
