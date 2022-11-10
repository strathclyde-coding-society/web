import Nav from '../components/Nav';
import Background from '../components/Background';

import logo from '../static/logo.png';

import React, { useEffect } from 'react';

import { motion } from "framer-motion";

import 'bootstrap-icons/font/bootstrap-icons.css';

function Title() {
    useEffect(() => {
        document.title = 'SCS - Strathclyde Coding Society';
    });
}

function Home() {
    Title()
    return (
        <section className="bg-black w-screen h-screen overflow-x-hidden flex flex-col items-center text-gray-400">
            <Nav />
            <div className="flex flex-col justify-center items-center h-[80rem] max-w-[60rem]">
                <div className="flex-row grid grid-flow-col gap-4">
                    <div className="row-span-3">
                        <motion.img 
                            className="w-44 h-44" 
                            src={logo}
                            initial={{opacity: 0, y:35}} 
                            animate={{opacity: 1, y:0, transition: {type: "spring", stiffness: 100, duration: 0.65}}}>
                        </motion.img>
                    </div>
                    <div className="row-span-1 auto-cols-max text-5xl leading-normal font-bold text-gray-50">
                        <h1>Strathclyde Coding Society</h1>
                    </div>
                    <div className="row-span-1 auto-cols-max">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate consequatur ab quidem expedita corrupti modi eum, voluptates, sit sequi animi! Magni vero quaerat doloremque perspiciatis sint inventore. Molestiae, animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, explicabo?</p>
                    </div>

                    <div className="row-span-1 auto-cols-max mt-2"> 
                          
                                <a href="https://www.strathunion.com/groups/find-a-society/society/coding/" target="_blank" rel="noopener" aria-label="strathclyde coding society">
                                    <button className="text-sm text-white font-semibold pt-[10px] pb-[10px] pl-[40px] pr-[40px] rounded-md opacity-70 hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-r from-blue-700 to-purple-700">
                                        Learn More
                                    </button>
                                </a>

                        

                          




                       
                        

                    </div>

                 
                </div>


                




              





            </div>


            <i className="bi bi-chevron-down m-5"></i>

        </section> 
    );
  }
  
export default Home;
  