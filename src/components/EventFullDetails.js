import React from 'react'

import Button from '../components/Button';

function EventFullDetails(props) {
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

        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-1/2 md:border-r border-b border-slate-50 md:border-b-0">
            <img className="rounded object-cover lg:max-h-96 lg:max-w-96 lg:float-right p-5" src={props.event.img}/>
          </div>
          <div className="md:7/12 lg:w-1/2 text-center p-5">
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
  )
}

export default EventFullDetails