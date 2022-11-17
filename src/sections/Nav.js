import React from 'react';
import 'flowbite';

import logo from '../static/logo.png';

function Nav() {
    return (
        <nav className="bg-black px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a className="flex items-center" href="/">
                    <img className="h-6 mr-3 sm:h-9" src={logo} alt="logo"/>
                </a>
                <div className="flex md:order-2">
                    <button className="text-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 opacity-70 hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-r from-blue-700 to-purple-700" type="button">Join Us!</button>
                    <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" data-collapse-toggle="nav-burger" type="button" aria-controls="nav-burger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div id="nav-burger" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                        <li>
                            <a href="#header" className="block py-2 pl-4 pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 pl-4 pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">About</a>
                        </li>
                        <li>
                            <a href="#events" className="block py-2 pl-4 pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">Events</a>
                        </li>
                        <li>
                            <a href="#committee" className="block py-2 pl-4 pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">Commitee</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;