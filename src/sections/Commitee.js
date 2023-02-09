import React from 'react';

import committee from '../data/committee.json';
import Member from '../components/Member';


class Committee extends React.Component {
    render() {
        return (
            <section id="committee" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
                <div className="flex flex-col justify-center h-full w-[60rem] gap-2">
                    <div className="container px-5 py-24 mx-auto text-slate-400">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">For students by students</h2>
                            <h1 className="text-2xl font-medium title-font mb-4 text-slate-50">Meet the Committee</h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                        {Object.keys(committee).map((person, key) => (
                            <Member data={committee[person]} name={person} key={key} />
                            ))}
                        </div>
                    </div>
                </div>
            </section> 
        );
    }
}
  
export default Committee;
  