import React from 'react';

import Button from '../components/Button';

import logo from '../static/logo.png';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    toggle = () => {
        var menu = document.getElementById('nav-burger');
        menu.classList.toggle('hidden');
    }

    render() {
        return (
            <nav className="bg-black px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a className="flex items-center" href="/">
                        <img className="h-[4.5rem] w-[4.5rem] mr-3 hover:scale-125 transition ease-in-out delay-100" src={logo} alt="logo"/>
                    </a>
                    <div className="flex md:order-2">
                        <Button content="Join us now" href="https://www.strathunion.com/groups/find-a-society/society/coding/" newPage="True" size="medium"/>
                        {/* Hamburger start */}
                        <button className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden ml-2" type="button" onClick={this.toggle}>
                            <span className="sr-only">Open main menu</span>
                            <i className="bi bi-list w-6 h-6 text-lg"></i>
                        </button>
                        {/* Hamburger end */}
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
        );
    }
}

export default Navigation;