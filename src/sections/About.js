import React from 'react';

function About() {
    return (
        <section id="about" className="bg-black w-screen flex flex-col items-center pb-[5rem]">
            <div className="flex flex-col justify-center items-center h-full w-full">
                <div className="py-16">  
                    <div className="container m-auto px-6 text-slate-50 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:5/12 lg:w-5/12">
                                <img className="rounded" src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                            </div>
                            <div className="md:7/12 lg:w-6/12">
                                <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">Lorem ipsum dolor sit amet.</h2>
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-50">Who are we?</h1>
                                <p className="mt-6 leading-relaxed text-slate-400">The Strathclyde Coding Society is a student led body that aims to encourage students from all backgrounds to increase their coding skills, we do this by hosting workshops and social events to help students connect with each other and industry!</p>
                                <p className="mt-4 leading-relaxed text-slate-400"> Check out one of our events below!</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section> 
    );
  }
  
export default About;
  