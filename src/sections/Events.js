import React from 'react';
import 'flowbite';

import Modal from '../components/Modal';

function Events() {
    return (
        <section id="events" className="bg-black w-screen h-1/2 overflow-x-hidden flex flex-col items-center">
            <div className="flex flex-col justify-center h-full w-[60rem] gap-2">
                <div className="text-center border-dashed border-2 border-purple-700 m-5">
                    <h1 className="text-4xl leading-normal font-bold text-gray-50 m-2">Events</h1>
                </div>
                <div className="m-3">
                    <ol className="relative border-l border-purple-700">    
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-purple-500 rounded-full mt-1.5 -left-1.5"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Lorem, ipsum.</time>
                            <h3 className="text-lg font-semibold text-gray-50">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className="mb-4 text-base font-normal text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maiores doloribus. Cumque omnis aut ipsa nulla animi blanditiis ratione corporis?</p>
                            <button className="text-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 opacity-70 hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-r from-blue-700 to-purple-700" type="button" data-modal-toggle="test1">Learn more</button>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-purple-500 rounded-full mt-1.5 -left-1.5"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Lorem, ipsum.</time>
                            <h3 className="text-lg font-semibold text-gray-50">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className="mb-4 text-base font-normal text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maiores doloribus. Cumque omnis aut ipsa nulla animi blanditiis ratione corporis?</p>
                            <button className="text-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 opacity-70 hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-r from-blue-700 to-purple-700" type="button">Learn more</button>
                        </li>
                        <li className="ml-4">
                            <div className="absolute w-3 h-3 bg-purple-500 rounded-full mt-1.5 -left-1.5"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">Lorem, ipsum.</time>
                            <h3 className="text-lg font-semibold text-gray-50">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className="mb-4 text-base font-normal text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, maiores doloribus. Cumque omnis aut ipsa nulla animi blanditiis ratione corporis?</p>
                            <button className="text-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 opacity-70 hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-r from-blue-700 to-purple-700" type="button">Learn more</button>
                        </li>
                    </ol> 
                </div>
            </div>
        </section>
    );
  }
  
export default Events;