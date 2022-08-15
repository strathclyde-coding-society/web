import React from 'react';
import logo from '../static/logo.png';

import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <div className="sticky top-0 z-50 max-h-1/6 w-screen flex flex-row justify-between py-2 px-20 bg-opacity-80 bg-gray-750 border-gray-550 backdrop-blur">
            <div className="flex mr-5 h-full text-xs">
                <Link to="/">
                    <img src={logo} className="w-16 h-16"></img>
                </Link>
            </div>
            <div className="flex flex-row h-full">
                <ul className="flex flex-row justify-center items-center space-x-16 text-gray-50">
                    <li><Link to="/" className="hover:text-gray-400 transition duration-300 ease-in-out">Home</Link></li>
                    <li><Link to="/tickets" className="hover:text-gray-400 transition duration-300 ease-in-out">Tickets</Link></li>
                    <li><Link to="/sponsors" className="hover:text-gray-400 transition duration-300 ease-in-out">Sponsors</Link></li>
                    <li><Link to="/team" className="hover:text-gray-400 transition duration-300 ease-in-out">Meet the Committee</Link></li>
                </ul>
            </div>
            <div className="flex flex-row justify-start items-center">
                <a href="https://www.strathunion.com/groups/find-a-society/society/coding/" target="_blank" rel="noopener" aria-label="strathclyde coding society">
                    <button className="text-sm text-white font-semibold flex justify-center items-center pt-[10px] pb-[10px] pl-[15px] pr-[15px] rounded-md opacity-70 hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-r from-blue-700 to-purple-700">
                        Join today!
                    </button>
                </a>
            </div>
            </div>
        </>
    )
}

export default Nav;