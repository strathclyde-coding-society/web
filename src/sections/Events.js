import React from 'react';

import Modal from '../components/Modal';

import events from '../data/events.json';



class Event extends React.Component {
    render() {
        let next = this.props.data.next == "yes";
        return (
            <div className={"max-w-md mx-auto overflow-hidden md:max-w-2xl border-l-2 "+ (next ? "border-green-600":"border-indigo-600")}>
                <div className={"grid grid-cols-6 p-5 gap-y-2 " + (next ? "pl-8":"")}>
                    <div className="col-span-5 md:col-span-4 ml-4">
                        <p className={"uppercase tracking-wide font-semibold " + (next ? "text-green-600":"text-indigo-600 text-xs ")}>{(next ? "next ":"") + this.props.data.type }</p>
                        <p className={"text-slate-50 font-bold "+ (next ? " text-2xl ":"text-xl")}>{this.props.title}</p>
                        <p className={"text-slate-400 "+ (next ? "text-xl":"")}>{this.props.data.date + " | " + this.props.data.time}</p>
                        <p className={"text-slate-400 "+ (next ? "text-xl":"")}>{this.props.data.location}</p>
                    </div>
                    <div className="m-auto">
                    <Modal data={this.props.data} closedByDefault={true} title={this.props.title} />
                    </div>
               </div>
            </div>  
        );
    }
}

class Events extends React.Component {
    render() {
        const empty = Object.keys(events).length > 0;
        return (
            <section id="events" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
                <div className="flex flex-col justify-center h-full w-[60rem] gap-2">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">Weekly SCS Events /more playful</h2>
                            <h1 className="text-2xl font-medium title-font mb-4 text-slate-50">Strathclyde Coding Events</h1>
                            <p className="md:w-2/3 w-1/3 mx-auto leading-relaxed text-slate-400">Come join us at one our events</p>
                        </div>
                        <div className="sm:columns-2 ">
                            {empty ? (
                                <>
                                    {Object.entries(events).map(([title, elements], key) => (
                                        <Event data={elements} key={key} title={title} />
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
  
export default Events;