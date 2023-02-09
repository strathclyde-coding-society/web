import React from 'react';

import Project from '../components/Project';

import events from '../data/events.json';



class Projects extends React.Component {
    render() {
        const empty = Object.keys(events).length > 0;
        return (
            <section id="events" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
                <div className="flex flex-col justify-center h-full w-[60rem] gap-2">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">2023 SCS Events</h2>
                            <h1 className="text-2xl font-medium title-font mb-4 text-slate-50">Strathclyde Coding Events</h1>
                            <p className="md:w-2/3 w-1/3 mx-auto leading-relaxed text-slate-400">Come join us at one our events</p>
                        </div>
                        <div className="sm:columns-2 ">
                            {empty ? (
                                <>
                                    {Object.entries(events).map(([title, elements], key) => (
                                        <Project data={elements} key={key} title={title} />
                                    ))}
                                </>
                            ) : (
                                <h1 className="text-2xl font-medium title-font mb-4 text-slate-50 w-full text-center">No upcoming events!</h1>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
  
export default Projects;