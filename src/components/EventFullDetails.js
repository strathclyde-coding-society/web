import React from 'react'

import Button from '../components/Button';

function EventFullDetails(props) {
 
  return (
    <div className="h-full text-gray-50">
      <div className="border-b border-slate-50 p-5 flex items-start justify-between">
        <h2 className="text-4xl font-extrabold">Lorem, ipsum.</h2>
        <button className="rounded-lg p-1.5 text-gray-50" type="button">
          <i className="bi bi-x-lg text-xl"></i>
        </button>
      </div>
      <div className="p-5">
        <div className="grid grid-rows-3 grid-flow-col gap-4 p-5">
          <div className="row-span-3 md:5/12 lg:w-5/12">
            <img className="rounded" src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          </div>
          <div class="col-span-2">
            <h2 className="text-4xl font-extrabold">Lorem, ipsum.</h2>
          </div>
          <div class="row-span-2 col-span-2 ...">03</div>
        </div>




      </div>
      


      
    </div>
  )
}

export default EventFullDetails