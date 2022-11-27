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
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-50">Lorem ipsum dolor sit amet.</h1>
                                <p className="mt-6 leading-relaxed text-slate-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                                <p className="mt-4 leading-relaxed text-slate-400"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section> 
    );
  }
  
export default About;
  