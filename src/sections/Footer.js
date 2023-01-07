import React from 'react';

import logo from '../static/logo.png';

function Footer() {
    const List = () => {
        return (
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium tracking-widest text-sm mb-3">Lorem</h2>
                        <div className="list-none mb-10">
                            <li>
                                <a className="">Lorem, ipsum.</a>
                            </li>
                            <li>
                                <a className="">Lorem, ipsum.</a>
                            </li>
                            <li>
                                <a className="">Lorem, ipsum.</a>
                            </li>
                            <li>
                                <a className="">Lorem, ipsum.</a>
                            </li>
                        </div>
                    </div>
        )
    }
    return (
        <footer className="bg-black text-slate-400 border-t-4 border-indigo-600">
            {/* <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img className="w-12 h-12 p-2" src={logo} alt="logo"/>
                        <span className="ml-3 text-xl text-slate-400">Lorem, ipsum.</span>
                    </a>
                    <p className="mt-2 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <List/>
                    <List/>
                    <List/>
                </div>
            </div> */}
            {/* <div className="bg-black border-t-4 border-slate-50"> */}
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-slate-400 text-sm text-center sm:text-left">Strathclyde Coding Society 2023</p>
                    <div class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a href="https://discord.com/invite/zbPVc68kX7"><i className="bi bi-discord ml-1"></i></a>
                        <a href="https://www.instagram.com/strathcoding/"><i className="bi bi-instagram ml-1"></i></a>
                        <a href="https://www.linkedin.com/company/strathcoding/"><i className="bi bi-linkedin ml-1"></i></a>
                        {/* <a href="https://www.linkedin.com/company/strathcoding/"><i className="bi bi-twitter ml-1"></i></a> */}
                    </div>
                </div>
            {/* </div> */}
        </footer>
    );
  }
  
export default Footer;