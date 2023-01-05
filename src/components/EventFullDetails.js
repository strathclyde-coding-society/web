import React from 'react'

import Button from '../components/Button';

function EventFullDetails(props) {
 
  return (
    <div className="text-gray-50">
      <div className="border-b border-slate-50 p-5 flex items-start justify-between">
        <h2 className="text-4xl font-extrabold">Lorem, ipsum.</h2>
        <button className="rounded-lg p-1.5 text-gray-50" type="button">
          <i className="bi bi-x-lg text-xl"></i>
        </button>
      </div>
      <div className="p-5">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img className="rounded" src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">Lorem ipsum dolor sit amet.</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-50">Lorem ipsum dolor sit amet.</h1>
            <p className="mt-6 leading-relaxed text-slate-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
            <p className="mt-4 leading-relaxed text-slate-400"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventFullDetails