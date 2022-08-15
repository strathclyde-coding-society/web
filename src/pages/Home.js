import Nav from '../components/Nav';
import Background from '../components/Background';

import React, { useEffect } from 'react';

function Title() {
    useEffect(() => {
        document.title = 'Home';
    });
}

function Home() {
    Title()
    return (
        <div className="bg-black w-screen h-screen overflow-x-hidden flex flex-col items-center space-y-2 text-gray-400">
            <Nav />
            <div className="relative max-w-2xl flex flex-col justify-center space-y-16">
                <Background />
                <div className="flex flex-col justify-center space-y-10 z-10">
                    <div className="flex flex-col items-center">
                        <div className="text-5xl leading-normal font-bold text-gray-50">
                            <h1>
                                Lorem ipsum dolor sit amet, consectetur adipiscing.
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="space-y-4 leading-relaxed">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt dui at dui rutrum, nec posuere leo bibendum. Suspendisse et imperdiet neque. Aenean sit amet dui sed enim consequat suscipit at in augue. Cras tempor nisl vitae urna auctor, non faucibus justo pulvinar. Morbi a lorem viverra, accumsan turpis et, fringilla justo. Donec quis mollis ante, sed tincidunt nulla. Etiam semper suscipit felis, sed congue metus porta ac.
                            </p>
                            <p>
                                Cras scelerisque pharetra arcu, auctor lacinia velit vehicula a. Suspendisse fringilla mi ligula, et vestibulum elit rutrum ut. Quisque lobortis volutpat enim quis mattis. Fusce vel blandit velit. Mauris ut posuere augue, et tincidunt risus. Donec non orci nec diam hendrerit maximus. Aliquam lobortis id felis id rutrum.
                            </p>
                        </div>
                    </div>
                    <hr className="my-32 border-purple-000 opacity-20 border-1"></hr>
                    <div className="flex flex-col justify-center">
                        <div className="space-y-4 leading-relaxed">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt dui at dui rutrum, nec posuere leo bibendum. Suspendisse et imperdiet neque. Aenean sit amet dui sed enim consequat suscipit at in augue. Cras tempor nisl vitae urna auctor, non faucibus justo pulvinar. Morbi a lorem viverra, accumsan turpis et, fringilla justo. Donec quis mollis ante, sed tincidunt nulla. Etiam semper suscipit felis, sed congue metus porta ac.
                            </p>
                            <p>
                                Cras scelerisque pharetra arcu, auctor lacinia velit vehicula a. Suspendisse fringilla mi ligula, et vestibulum elit rutrum ut. Quisque lobortis volutpat enim quis mattis. Fusce vel blandit velit. Mauris ut posuere augue, et tincidunt risus. Donec non orci nec diam hendrerit maximus. Aliquam lobortis id felis id rutrum.
                            </p>
                        </div>
                    </div>
                    <hr className="my-32 border-purple-000 opacity-20 border-1"></hr>
                </div>
            </div>
        </div> 
    );
  }
  
export default Home;
  