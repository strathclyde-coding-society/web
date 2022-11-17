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
        <section id="commiteee" className="bg-black w-screen h-1/2 overflow-x-hidden flex flex-col items-center">
            <div className="flex flex-col justify-center h-full w-[60rem] gap-2">
                <div className="text-center border-dashed border-2 border-purple-700 m-5">
                    <h1 className="text-4xl leading-normal font-bold text-gray-50 m-2">Our Team</h1>
                </div>
                    <Member members={members[0]}/>
                    
                   
               
             </div>
        </section> 
    );
  }
  
export default Committee;
  