import React from 'react';

import Member from '../components/Member.js';

const members = [
    {name: "Lorem ipsum", role: "Lorem, ipsum.", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "#", linkedin: "#", twitter: "#"},
    {name: "Lorem ipsum", role: "Lorem, ipsum.", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "#", linkedin: "#", twitter: "#"},
    {name: "Lorem ipsum", role: "Lorem, ipsum.", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "#", linkedin: "#", twitter: "#"},
    {name: "Lorem ipsum", role: "Lorem, ipsum.", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "#", linkedin: "#", twitter: "#"},
    {name: "Lorem ipsum", role: "Lorem, ipsum.", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "#", linkedin: "#", twitter: "#"},
    {name: "Lorem ipsum", role: "Lorem, ipsum.", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "#", linkedin: "#", twitter: "#"},
    {name: "Lorem ipsum", role: "Lorem, ipsum.", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "#", linkedin: "#", twitter: "#"},
    {name: "Lorem ipsum", role: "Lorem, ipsum.", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "#", linkedin: "#", twitter: "#"},
    {name: "Lorem ipsum", role: "Lorem, ipsum.", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "#", linkedin: "#", twitter: "#"},
    {name: "Lorem ipsum", role: "Lorem, ipsum.", img: "https://www.zooborns.com/.a/6a010535647bf3970b02a2eec93591200d-800wi", github: "#", linkedin: "#", twitter: "#"},
]

function Committee() {
    return (
        <section id="commitee" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
            <div className="flex flex-col justify-center h-full w-[60rem] gap-2">
                <div className="container px-5 py-24 mx-auto text-slate-400">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">Lorem ipsum dolor sit amet.</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-50">Lorem ipsum dolor sit amet.</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita necessitatibus inventore ipsa, consequatur, vel libero voluptates nulla odio culpa quasi ratione. Odit minima natus eum perspiciatis mollitia molestiae iure.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={members[0].img} alt="avatar"/>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-slate-50">{members[0].name}</h2>
                                    <h3 className="text-gray-500 mb-3">{members[0].role}</h3>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, est?</p>
                                    <div className="inline-flex">
                                        <i className="bi bi-twitter"></i>
                                        <i className="bi bi-twitter ml-1"></i>
                                        <i className="bi bi-twitter ml-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={members[0].img} alt="avatar"/>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-slate-50">{members[0].name}</h2>
                                    <h3 className="text-gray-500 mb-3">{members[0].role}</h3>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, est?</p>
                                    <div className="inline-flex">
                                        <i className="bi bi-twitter"></i>
                                        <i className="bi bi-twitter ml-1"></i>
                                        <i className="bi bi-twitter ml-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={members[0].img} alt="avatar"/>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-slate-50">{members[0].name}</h2>
                                    <h3 className="text-gray-500 mb-3">{members[0].role}</h3>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, est?</p>
                                    <div className="inline-flex">
                                        <i className="bi bi-twitter"></i>
                                        <i className="bi bi-twitter ml-1"></i>
                                        <i className="bi bi-twitter ml-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={members[0].img} alt="avatar"/>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-slate-50">{members[0].name}</h2>
                                    <h3 className="text-gray-500 mb-3">{members[0].role}</h3>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, est?</p>
                                    <div className="inline-flex">
                                        <i className="bi bi-twitter"></i>
                                        <i className="bi bi-twitter ml-1"></i>
                                        <i className="bi bi-twitter ml-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
  }
  
export default Committee;
  