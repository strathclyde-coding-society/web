import React from 'react'
import Button from '../components/Button';

function Event(props) {
    function click(){
        props.moreDetails(props.event)
    }
  return (
    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-slate-400 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-slate-50 font-medium title-font mb-2">{props.event.title}</h2>
        <p className="leading-relaxed text-slate-400 mb-4">{props.event.description}</p>
        {/* <Button content="Learn more" href={props.event.href} size="small"/> */}
        <button onClick={click}>yo</button>
    </div>
  )
}

export default Event