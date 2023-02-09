import React from 'react';

class About extends React.Component {
    render() {
        return (
            <section id="about" className="bg-black w-screen flex flex-col items-center pb-[5rem] z-10">
                <div className="flex flex-col justify-center items-center h-full w-full z-10">
                    <div className="pt-16 text-center sm:text-left">  
                        <div className="container m-auto px-6 text-slate-50 md:px-12 xl:px-6">
                            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                <div className="md:5/12 lg:w-5/12">
                                    <img className="rounded" src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                                </div>
                                <div className="md:7/12 lg:w-6/12">
                                    <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">Lorem ipsum dolor sit amet.</h2>
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-50">Who are we?</h1>
                                    <p className="mt-6 leading-relaxed text-slate-400">The Strathclyde Coding Society is one of the biggest societies at strathclyde - a student led body that aims to encourage students from all backgrounds to increase their coding skills, we do this by hosting workshops and social events to help students connect with each other and industry!</p>
                                    <p className="mt-6 leading-relaxed text-slate-400">The Strathclyde Coding welcomes everyone regardless of their background, gender or religion. If you are a woman or a member of the LGBTQ+ community consider also joining <a href="https://www.strathunion.com/groups/find-a-society/society/strathwit/" className="text-indigo-600">StrathWIT</a></p>
                                    <p className="mt-4 leading-relaxed text-slate-400"> Check out our socials</p>

                                    <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start pt-3 text-5xl text-indigo-600">
                                        <div className="hover:scale-125 transition ease-in-out delay-50">
                                        <a  href="https://discord.com/invite/zbPVc68kX7" target="_blank" rel="noopener noreferrer"><i className="bi bi-discord ml-1 px-1"></i></a>
                                        </div>
                                        <div className="hover:scale-125 transition ease-in-out delay-50">
                                        <a  href="https://www.instagram.com/strathcoding/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram ml-1 px-1"></i></a>
                                        </div>
                                        <div className="hover:scale-125 transition ease-in-out delay-50">
                                        <a  href="https://www.linkedin.com/company/strathcoding/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin ml-1 px-1"></i></a>
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
}
  
export default About;
  