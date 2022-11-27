import React from 'react';

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
];

function Committee() {
    const Members = () => {
        return( 
            members.map(member => {
                return(
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={member.img} alt="avatar"/>
                            <div className="flex-grow md:p-4">
                                <h2 className="title-font font-medium text-lg text-slate-50">{member.name}</h2>
                                <h3 className="text-gray-500 mb-3 text-sm">{member.role}</h3>
                                <p className="mb-4 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, est?</p>
                                <div className="inline-flex">
                                    <i className="bi bi-twitter"></i>
                                    <i className="bi bi-twitter ml-1"></i>
                                    <i className="bi bi-twitter ml-1"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })  
        );
    }  

    return (
        <section id="commitee" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
            <div className="flex flex-col justify-center h-full w-[60rem] gap-2">
                <div className="container px-5 py-24 mx-auto text-slate-400">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">Lorem ipsum dolor sit amet.</h2>
                        <h1 className="text-2xl font-medium title-font mb-4 text-slate-50">Lorem ipsum dolor sit amet.</h1>
                        <p className="md:w-2/3 w-1/3 mx-auto leading-relaxed text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita necessitatibus inventore ipsa, consequatur, vel libero voluptates nulla odio culpa quasi ratione. Odit minima natus eum perspiciatis mollitia molestiae iure.</p>
                    </div>
                    <div className="flex md:flex-wrap md:flex-row flex-col -m-4">
                        <Members/>
                    </div>
                </div>
            </div>
        </section> 
    );
  }
  
export default Committee;
  