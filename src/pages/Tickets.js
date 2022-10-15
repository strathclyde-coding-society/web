import Nav from '../components/Nav';
import Ticket from '../components/Ticket';
import Background from '../components/Background';

import React, { useEffect } from 'react';
import { motion } from "framer-motion";

const tickets = [
    {title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel enim nec purus ultrices lobortis sodales quis odio. Sed rutrum ornare mollis. Nullam sed lacus."},
    {title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel enim nec purus ultrices lobortis sodales quis odio. Sed rutrum ornare mollis. Nullam sed lacus."},
    {title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel enim nec purus ultrices lobortis sodales quis odio. Sed rutrum ornare mollis. Nullam sed lacus."},
    {title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel enim nec purus ultrices lobortis sodales quis odio. Sed rutrum ornare mollis. Nullam sed lacus."},
]

function Title() {
    useEffect(() => {
        document.title = 'Tickets';
    });
}

function Tickets() {
    Title()
    return (
        <div className="bg-black w-screen h-screen overflow-x-hidden flex flex-col items-center space-y-2 text-gray-400">
            <Nav />
            <div className="relative max-w-2xl flex flex-col justify-center space-y-16">
                <Background />
                <div className="flex flex-col justify-center space-y-10 z-10">
                    <div className="flex flex-col items-center">
                        <div className="text-5xl leading-normal font-bold text-gray-50">
                            <motion.h1 initial={{opacity: 0, y:-50}} animate={{opacity: 1, y:0}} transition={{type: "spring", stiffness: 200, duration: 0.78}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                            </motion.h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="space-y-4 leading-relaxed">
                            <motion.p initial={{opacity: 0, x:-55}}  animate={{opacity: 1, x:0}} transition={{type: "spring", stiffness: 175, duration: 0.83}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt dui at dui rutrum, nec posuere leo bibendum. Suspendisse et imperdiet neque. Aenean sit amet dui sed enim consequat suscipit at in augue. Cras tempor nisl vitae urna auctor, non faucibus justo pulvinar. Morbi a lorem viverra, accumsan turpis et, fringilla justo. Donec quis mollis ante, sed tincidunt nulla. Etiam semper suscipit felis, sed congue metus porta ac.
                            </motion.p>
                            <motion.p initial={{opacity: 0, x:55}}  animate={{opacity: 1, x:0}} transition={{type: "spring", stiffness: 175, duration: 0.88}}>
                                Cras scelerisque pharetra arcu, auctor lacinia velit vehicula a. Suspendisse fringilla mi ligula, et vestibulum elit rutrum ut. Quisque lobortis volutpat enim quis mattis. Fusce vel blandit velit. Mauris ut posuere augue, et tincidunt risus. Donec non orci nec diam hendrerit maximus. Aliquam lobortis id felis id rutrum.
                            </motion.p>
                        </div>
                    </div>
                    <hr className="my-32 border-purple-000 opacity-20 border-1" />
                    <div className="items-start">
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <Ticket tickets={tickets[0]}/>
                            <Ticket tickets={tickets[1]}/>
                            <Ticket tickets={tickets[2]}/>
                            <Ticket tickets={tickets[3]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Tickets;
  