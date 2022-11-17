import Nav from './Nav.js';
import Header from './Header.js';
import About from './About.js';
import Events from './Events.js';
import Committee from './Commitee.js';
import Footer from './Footer.js';

import React, { useEffect } from 'react';

function Title() {
    useEffect(() => {
        document.title = 'SCS - Strathclyde Coding Society';
    });
}

function Page() {
    Title()
    return (
        <div className="w-screen h-screen overflow-x-hidden text-gray-400">
            <Nav />
            <Header />
            <About />
            <Events />
            <Committee />
            <Footer />
        </div>
    );
  }
  
export default Page;
  