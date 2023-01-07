import React from 'react';
import image from '../assests/members/sample_img.png'

const members = [
    {name: "Hamada Alosh", role: "President", img: image, description:"A 3rd year Software Engineering Student with a passion for networking and a like for functional programming.", links:[{link: "https://www.linkedin.com/in/hamada-alosh/", icon: "bi bi-linkedin"}]},

    {name: "Ayushi Badiyani", role: "Vice President", img: image, description:"A 3rd year Computing Science Student with a passion for data science", links:[{link: "https://www.linkedin.com/in/ayushi-badiyani/", icon: "bi bi-linkedin"}]},

    {name: "Cameron Bell", role: "Technical Officer", img: image, description:"Pretties boy of them all.", links:[{link: "https://www.linkedin.com/in/bell-cameron/", icon: "bi bi-linkedin"}]},

    {name: "Shelly Master", role: "Treasurer", img: image, description:"A Cyber Security Graduate with experience in hosting academia events with a passion.", links:[{link: "https://www.linkedin.com/in/shelly-master-47b89b185/", icon: "bi bi-linkedin"}]},

    {name: "Charles Watson", role: "Events Coordinator", img: image, description:"Passionate about java, cloud networking, solving problems using new technology and software.", links:[{link: "https://www.linkedin.com/in/charles-watson-3b7903189/", icon: "bi bi-linkedin"}]},
    
    {name: "Kelechi Nwokeabia", role: "Events Coordinator", img: image, description:"The mum of the group", links:[{link: "https://www.linkedin.com/in/kelechi-nwokeabia-657013247/", icon: "bi bi-linkedin"}]},
];

function Committee() {
    function Links (props) {
        console.log(props)
        return(
            props.pairs.map(pair =>{
                return(
                    <div>
                    <a href={pair.link}>
                    <i className={pair.icon}></i>
                    </a>
                    </div>
                )
            })
        )
    }

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
                                <p className="mb-4 hidden md:block">{member.description}</p>
                                <div className="inline-flex">
                                    <Links pairs={member.links}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })  
        );
    }  

    return (
        <section id="committee" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
            <div className="flex flex-col justify-center h-full w-[60rem] gap-2">
                <div className="container px-5 py-24 mx-auto text-slate-400">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">For students by students</h2>
                        <h1 className="text-2xl font-medium title-font mb-4 text-slate-50">Meet the Committee</h1>
                        {/* <p className="md:w-2/3 w-1/3 mx-auto leading-relaxed text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita necessitatibus inventore ipsa, consequatur, vel libero voluptates nulla odio culpa quasi ratione. Odit minima natus eum perspiciatis mollitia molestiae iure.</p> */}
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
  