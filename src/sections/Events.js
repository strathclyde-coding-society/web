import React from 'react';

import Button from '../components/Button';

import events from '../data/events.json';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display: 'none'}
    }

    componentDidMount() {
        this.props.closedByDefault || this.showModal();
    }

    showModal() {
        this.setState({display: 'block'});
    }
    
    hideModal() {
        this.setState({display: 'none'});
    }

    closeOnBackground(event) {
        if(event.target.id == 'modal-background') { this.hideModal(); }
    }

    render() {
        var button;
        if (this.props.closedByDefault) { 
            {/* var button = <button id='modal-open-btn' onClick={(event) => this.showModal(event)}><i className="bi bi-info-square"></i></button>; */}
            var button = <Button content="Learn more" size="small" onClick={(event) => this.showModal(event)}/>
        }
        return(
            <span>
		        {button}
                <div id="modal-background" className="py-12 z-50 absolute inset-0 backdrop-blur-sm" style={this.state} onClick={(event) => this.closeOnBackground(event)}>
                    <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                        {/* Modal body */}
                        <div className="relative bg-black shadow-md rounded border border-indigo-600">
                            <div className="flex flex-row justify-between px-3 pt-3">
                                <h3 className="text-xl lg:text-2xl font-semibold text-slate-50">{this.props.title}</h3>
                                <button className="cursor-pointer text-gray-400 hover:text-slate-50 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-indigo-600 p-1" onClick={(event) => this.hideModal(event)}><i className="bi bi-x-lg"></i></button>
                            </div>
                            <div className="grid grid-rows-3 grid-flow-col gap-4 p-3">
                                <div className="row-span-3">
                                    <div className="flex flex-row justify-between border-b-2 border-slate-50">
                                        <p>Room | Type</p>
                                        <i className="bi bi-square-fill"></i>
                                    </div>
                                    <p className="pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam omnis labore voluptatum corporis eum natus consequuntur a accusamus reprehenderit odit!</p>
                                </div>
                                <div className="row-span-2 col-span-2">
                                    <img className="hidden sm:block h-48 w-full object-cover md:h-full md:w-48 rounded" src="assests/events/sample_img.jpg" alt="avatar"/>
                                </div>
                                <div className="col-span-2">
                                    <div className="flex flex-col sm:flex-row justify-around">
                                        <i className="bi bi-geo-alt text-2xl"></i>
                                        <i className="bi bi-calendar-event text-2xl"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        );
    }
}

class Event extends React.Component {
    render() {
        return (
            <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl border-l-2 border-indigo-600">
                <div className="grid grid-cols-6 p-5 gap-y-2">
                    <div className="col-span-5 md:col-span-4 ml-4">
                        <p className="uppercase tracking-wide text-xs text-indigo-600 font-semibold">{this.props.data.type}</p>
                        <p className="text-slate-50 font-bold text-xl">{this.props.title}</p>
                        <p className="text-slate-400">{this.props.data.timestamp}</p>
                        <p className="text-slate-400">{this.props.data.location}</p>
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
                            <h1 className="text-2xl font-medium title-font mb-4 text-slate-50">Upcoming Strathclyde Coding Events</h1>
                            <p className="md:w-2/3 w-1/3 mx-auto leading-relaxed text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita necessitatibus inventore ipsa, consequatur, vel libero voluptates nulla odio culpa quasi ratione. Odit minima natus eum perspiciatis mollitia molestiae iure.</p>
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