import React from 'react';
import { motion } from "framer-motion";

import logo from '../static/logo.png';

function Header() {
    return (
        <section id="header" className="bg-black w-screen h-screen overflow-x-hidden flex flex-col items-center space-y-2">
            <div className="flex flex-col justify-center items-center h-[80rem] max-w-[60rem]">
                <section className="py-24 flex items-center min-h-screen justify-center">
                    <div className="mx-auto max-w-[43rem]">
                        <div className="text-center">
                            <p className="text-lg font-medium leading-8 text-indigo-600">Lorem ipsum dolor sit amet.</p>
                            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-slate-50">Lorem ipsum dolor&nbsp;sit amet consectetur.</h1>
                            <p className="mt-3 text-lg leading-relaxed text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugit obcaecati omnis blanditiis perspiciatis minus!</p>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-4">
                            <a href="#" className="transform rounded-md bg-indigo-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Lorem ipsum dolor sit.</a>
                        </div>
                    </div>
                </section>
            </div>
            <i className="bi bi-chevron-down m-5"></i>
        </section> 
    );
  }
  
export default Header;
  