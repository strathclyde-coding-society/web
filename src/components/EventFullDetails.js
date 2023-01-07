import React from 'react'

import Button from '../components/Button';
import image from '../assests/events/sample_img.jpg'

function EventFullDetails(props) {
  console.log(props)
  //  {title: "CV Workshop", img: "../assests/events/sample_img.jpg", href: "#", date: "12/12/22", time: "6PM - Late", location:"Committee Room No.9",maps_link:"https://goo.gl/maps/mHfiMHtxQwq2tw2H7", description: "Lorem Workshop dolor sit:"},
  // ^ current data structure

  const hide_tickets = props.event.href != "#" ? "" : "hidden"
  //dynamically displays link button for events with tickets
  return (
    <div className="text-gray-50">
      <div className="border-b border-slate-50 p-5 flex items-start justify-between">
        <h2 className="text-4xl font-extrabold">{props.event.title}</h2>
        <button onClick={props.close} className="rounded-lg p-1.5 text-gray-50" type="button">
          <i className="bi bi-x-lg text-xl"></i>
        </button>
      </div>
      <div className="p-5">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img className="rounded object-cover h-96 w-96" src={image}/>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-50">{props.event.headline}</h1>
            <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">Time: {props.event.date} | {props.event.time}</h2>
            <a href={props.event.maps_link} className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">Place: {props.event.location}</a>
            <p className="mt-6 leading-relaxed text-slate-400">{props.event.description}</p>
            <div className={hide_tickets}>
            <Button content="Buy Tickets" href={props.event.href} size="small"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventFullDetails