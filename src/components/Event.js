import React from 'react'
import Button from '../components/Button';

function Event(props) {
    function click(){
        props.moreDetails(props.event)
    }
  return (
    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-slate-400 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-slate-50 font-medium title-font mb-2">{props.event.title}</h2>
        <time className="mb-1 text-sm font-normal leading-none text-slate-400">{props.event.date} : {props.event.time}</time>
        <p className="leading-relaxed text-slate-400 mb-4">{props.event.headline}</p>
        <button className='px-4 py-2 inline-flex items-center text-sm font-medium text-slate-50 bg-indigo-800 rounded-lg border border-indigo-600 hover:bg-indigo-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-indigo-600' onClick={click}>yo</button>
    </div>  
  )
}

export default Event