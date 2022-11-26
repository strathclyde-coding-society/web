import React from 'react';

import Button from '../components/Button';

const events = [
    {title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente reiciendis modi reprehenderit.", href: "#"},
    {title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente reiciendis modi reprehenderit.", href: "#"},
    {title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente reiciendis modi reprehenderit.", href: "#"},
    {title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente reiciendis modi reprehenderit.", href: "#"},
    {title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente reiciendis modi reprehenderit.", href: "#"},
];

function Events() {
    const GridEvents = () => {
        return (
            events.map(event => {
                return (
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-slate-400 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-slate-50 font-medium title-font mb-2">{event.title}</h2>
                        <p className="leading-relaxed text-slate-400 mb-4">{event.description}</p>
                        <Button content="Learn more" href={event.href} size="small"/>
                    </div>
                )
            })
        );
    }
    const TimelineEvents = () => {
        return (
            events.map(event => {
                return (
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-indigo-600 rounded-full mt-1.5 -left-1.5 border border-indigo-600"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-slate-400">Lorem, ipsum.</time>
                        <h3 className="text-lg font-semibold text-slate-50">{event.title}</h3>
                        <p className="mb-4 text-base font-normal text-slate-400">{event.description}</p>
                        <Button content="Learn more" href={event.href} size="small"/>
                    </li>
                )
            })
        );
    }

    return (
        <section id="events" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
            <div className="flex flex-col justify-center h-full w-[60rem] gap-2">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">Lorem ipsum dolor sit amet.</h2>
                        <h1 className="text-2xl font-medium title-font mb-4 text-slate-50">Lorem ipsum dolor sit amet.</h1>
                        <p className="md:w-2/3 w-1/3 mx-auto leading-relaxed text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita necessitatibus inventore ipsa, consequatur, vel libero voluptates nulla odio culpa quasi ratione. Odit minima natus eum perspiciatis mollitia molestiae iure.</p>
                    </div>
                    <div className="mb-20">
                        <ol className="relative border-l border-indigo-600">                  
                            <TimelineEvents />
                        </ol>
                    </div>
                    <div className="flex flex-wrap">
                        <GridEvents />
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
export default Events;