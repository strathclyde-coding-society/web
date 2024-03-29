import React from 'react';

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
            button = <button id='modal-open-btn' className="hover:scale-110 transition ease-in-out delay-50" onClick={(event) => this.showModal(event)}><i className="bi bi-info-square animate-pulse text-3xl "></i></button>; 
            // var button = <Button content="Learn more" size="small" onClick={(event) => this.showModal(event)}/>
        }
        var ticketVis =""; 
        if(this.props.data.ticketPrice==""){ticketVis=" hidden"}; 
        var speakerVis =""; 
        if(this.props.data.speakerName==""){speakerVis=" hidden"}; 
        return(
            <span>
		        {button}
                <div id="modal-background" className="py-12 z-50 absolute inset-0 backdrop-blur-sm" style={this.state} onClick={(event) => this.closeOnBackground(event)}>
                    <div id="modal-container" className="container mx-auto w-11/12 h-11/12 md:w-2/3  md:h-2/3">
                        {/* Modal body */}
                        <div id="modal" className="relative bg-black shadow-md rounded border border-indigo-600 ">
                            <div className="flex flex-row justify-between px-8 pt-6">
                                <h3 className="text-xl lg:text-2xl font-semibold text-slate-50">{this.props.title}</h3>
                                <button className="cursor-pointer text-gray-400 hover:text-slate-50 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-indigo-600 p-1" onClick={(event) => this.hideModal(event)}><i className="bi bi-x-lg"></i></button>
                            </div>

                            <div className="grid grid-flow-col gap-4 p-8">
                                {/* Left side */}
                                <div className="row-span-3 col-span-2">
                                    {/* Top row */}
                                    <div className="sm:flex flex-row justify-between border-b-2 border-slate-50">
                                        <p>{this.props.data.room} | {this.props.data.type}</p>

                                        <div className="flex justify-right">
                                        {this.props.data.collabs.map(collab => {
                                            return (
                                                <a href={collab.link} target="_blank" rel="noopener noreferrer">
                                                <img class="h-7 w-7 mr-1" src={collab.icon}/>
                                                </a>
                                                )})}
                                        </div>
                                    </div>
                                    {/* Description */}
                                    <p className="pt-3 text-2xl">{this.props.data.description}</p>
                                </div>

                                {/* Right side */}
                                

                                {/* Image */}
                                <div className="hidden row-span-2 col-span-2 sm:flex justify-center p-4">
                                    <img className="hidden sm:block h-9/12 w-9/12 object-cover  rounded" src={this.props.data.image} alt="avatar"/>
                                </div>

                                {/* Icons */}
                                <div className="col-span-1 sm:col-span-2 row-span-3 sm:row-span-1">
                                    <div className="flex flex-col sm:flex-row justify-around">
                                        {/* Ticket */}
                                        <div className={" flex flex-col items-center hover:scale-110 transition ease-in-out delay-50 relative pb-2" + ticketVis}>
                                        <a href={this.props.data.ticketLink} target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-ticket text-4xl sm:text-5xl justify-center text-indigo-700 absolute blur-sm"/>
                                        <i className="bi bi-ticket text-4xl sm:text-5xl justify-center relative"/>
                                        </a>
                                        <a href={this.props.data.ticketLink} target="_blank" rel="noopener noreferrer">
                                        <p className="text-center underline underline-offset-4 text-indigo-700 absolute blur-sm">{this.props.data.ticketPrice}</p>
                                        <p className="text-center underline underline-offset-4 relative">{this.props.data.ticketPrice}</p>
                                        </a>
                                        </div>
                                        {/* Location */}
                                        <div className=" flex flex-col items-center hover:scale-110 transition ease-in-out delay-50 relative pb-2">
                                        <a href={this.props.data.locationLink} target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-geo-alt text-4xl sm:text-5xl justify-center text-indigo-700 absolute blur-sm"/>
                                        <i className="bi bi-geo-alt text-4xl sm:text-5xl justify-center relative"/>
                                        </a>
                                        <a href={this.props.data.locationLink} target="_blank" rel="noopener noreferrer">
                                        <p className="text-center underline underline-offset-4 text-indigo-600 absolute blur-sm">{this.props.data.locationName}</p>
                                        <p className="text-center underline underline-offset-4 relative">{this.props.data.locationName}</p>
                                        </a>
                                        </div>
                                        {/* Date */}
                                        <div className=" flex flex-col items-center pb-2">  
                                        <i className="bi bi-calendar-event text-4xl sm:text-5xl"/>
                                        <p className="text-center">{this.props.data.date}</p>
                                        </div>
                                        {/* Speaker */}
                                        <div className={" flex flex-col items-center hover:scale-110 transition ease-in-out delay-50 relative pb-2 pr-4" + speakerVis}>
                                        <a href={this.props.data.speakerLink} target="_blank" rel="noopener noreferrer">
                                        <i className="bbi bi-person text-4xl sm:text-5xl justify-center text-indigo-700 absolute blur-sm"/>
                                        <i className="bbi bi-person text-4xl sm:text-5xl justify-center relative"/>
                                        </a>
                                        <a href={this.props.data.speakerLink} target="_blank" rel="noopener noreferrer">
                                        <p className="text-center underline underline-offset-4 text-indigo-700 absolute blur-sm">{this.props.data.speakerName}</p>
                                        <p className="text-center underline underline-offset-4 relative">{this.props.data.speakerName}</p>
                                        </a>
                                        </div>
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

class Collab extends React.Component {
    render() {
        return (
            <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl border-l-2 border-indigo-600">
                {/* <a href={this.props}><img/></a> */}
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

export default Modal;