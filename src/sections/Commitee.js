import React from 'react';

import committee from '../data/committee.json';

const icons = {
    'linkedin': 'bi bi-linkedin'
};

class Member extends React.Component {
    render() {
        return (
            <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl mt-4">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48 rounded" src={this.props.data.image} alt="avatar"/>
                    </div>
                    <div className="p-8">
                        <p className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">{this.props.data.role}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-slate-50 hover:underline">{this.props.name}</p>
                        <p className="mt-2 text-slate-400">{this.props.data.description}</p>
                        <div className="mt-3 relative">
                            {this.props.data.links.map((element, key) => (
                                <>
                                    {Object.entries(element).map(([link, value]) => (
                                        <a className={icons[link]  + " hover:scale-125 transition ease-in-out delay-50"} href={value} key={key}></a>
                                    ))}
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

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
                        {Object.keys(committee).map((person, key) => (
                            <Member data={committee[person]} name={person} key={key} />
                        ))}
                    </div>
                </div>
            </section> 
        );
    }
}
  
export default Committee;
  