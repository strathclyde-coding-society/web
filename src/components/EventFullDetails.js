import React from 'react'

import Button from '../components/Button';

function EventFullDetails(props) {
    const customStyles = {
        content: {
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    
  return (
    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-slate-400 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-slate-50 font-medium title-font mb-2">{props.event.title}</h2>
        <p className="leading-relaxed text-slate-400 mb-4">{props.event.description}</p>
        <Button content="Learn more" href={props.event.href} size="small"/>
        
    </div>
  )
}

export default EventFullDetails