import React from 'react';
import Modal from 'react-modal';

import Button from '../components/Button';
import Event from '../components/Event';
import EventFullDetails from '../components/EventFullDetails';


const events = [
    {title: "CV Workshop", headline:"Ayo come sus this out", img: "assests/events/sample_img.jpg", href: "#", date: "12/12/22", time: "6PM - Late", location:"Committee Room No.9", maps_link:"https://goo.gl/maps/mHfiMHtxQwq2tw2H7", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "Refresher Social", headline:"Ayo come sus this out", img: "assests/events/sample_img.jpg", href: "#", date: "12/12/22", time: "6PM - Late", location:"Committee Room No.9", maps_link:"https://goo.gl/maps/mHfiMHtxQwq2tw2H7", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "AI Workshop", headline:"Ayo come sus this out", img: "assests/events/sample_img.jpg", href: "#", date: "12/12/22", time: "6PM - Late", location:"Committee Room No.9", maps_link:"https://goo.gl/maps/mHfiMHtxQwq2tw2H7", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "Coding Cafe with EME", headline:"Ayo come sus this out", img: "assests/events/sample_img.jpg", href: "#", date: "12/12/22", time: "6PM - Late", location:"Committee Room No.9", maps_link:"https://goo.gl/maps/mHfiMHtxQwq2tw2H7", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "Front-End Workshop", headline:"Ayo come sus this out", img: "assests/events/sample_img.jpg", href: "#", date: "12/12/22", time: "6PM - Late", location:"Committee Room No.9", maps_link:"https://goo.gl/maps/mHfiMHtxQwq2tw2H7", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "Back-End Workshop", headline:"Ayo come sus this out", img: "%PUBLIC_URL%/assests/events/sample_img.jpg", href: "#", date: "12/12/22", time: "6PM - Late", location:"Committee Room No.9", maps_link:"https://goo.gl/maps/mHfiMHtxQwq2tw2H7", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
];

//const events = [];

function Events() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [event, setevent] = React.useState([]);
    function openModal() {
        setIsOpen(true);
      }
      
      function moreDetails(props) {
        setevent(props); 
        openModal()
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    
    const GridEvents = () => {
        return (
            events.map(event => {
                return (
                    <Event event={event} moreDetails={moreDetails}/>
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
                        <time className="mb-1 text-sm font-normal leading-none text-slate-400">{event.date} : {event.time}</time>
                        <h3 className="text-lg font-semibold text-slate-50">{event.title}</h3>
                        <p className="mb-4 text-base font-normal text-slate-400">{event.headline}</p>
                        <Button content="Learn more" href={event.href} size="small"/>
                    </li>
                )
            })
        );
    }

    return (
        <>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            className = "absolute inset-18 top-20 lg:inset-40 m-5 bg-black rounded-lg items-center border-indigo-600 border-solid border-2"
            overlayClassName = "bg-black/75 fixed left-0 right-0 top-0 bottom-0"
            contentLabel="Example Modal"
            >
                <EventFullDetails event={event} close={closeModal}/>
            </Modal>
            <section id="events" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
                <div className="flex flex-col justify-center h-full w-[60rem] gap-2">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">Weekly SCS Events /more playful</h2>
                            <h1 className="text-2xl font-medium title-font mb-4 text-slate-50">Upcoming Strathclyde Coding Events</h1>
                            <p className="md:w-2/3 w-1/3 mx-auto leading-relaxed text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita necessitatibus inventore ipsa, consequatur, vel libero voluptates nulla odio culpa quasi ratione. Odit minima natus eum perspiciatis mollitia molestiae iure.</p>
                        </div>
                        <div className="mb-20">
                            <ol className="relative border-l border-indigo-600">  
                            {events.length > 0 &&                
                                <TimelineEvents />
                            }
                            </ol>
                        </div>
                    
                        <div className="flex flex-col items-center md:flex-wrap md:flex-row">
                            {events.length > 0 &&
                                <GridEvents />
                            }
                            {events.length == 0 && 
                                <h1 className="text-2xl font-medium title-font mb-4 text-slate-50 w-full text-center">No upcoming events!</h1>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
  }
  
export default Events;