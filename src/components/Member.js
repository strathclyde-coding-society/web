import React from 'react';

const icons = {
    'linkedin': 'bi bi-linkedin',
    'twitter': 'bi bi-twitter',
    'github': 'bi bi-github'
};


class Member extends React.Component {
    render() {
        return (
            <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl mt-4 pr-10">
                <div className="grid grid-cols-3 md:flex">
                    <div className="md:shrink-0 pl-9">
                        <img className="h-48 w-48 object-cover md:h-48 md:w-48 rounded" src={this.props.data.image} alt="avatar"/>
                    </div>
                    <div className="px-8 col-span-2">
                        <p className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">{this.props.data.role}</p>
                        <div className="mt-3 flex">
                            <p className="block mt-1 text-lg leading-tight font-medium text-slate-50 hover:underline pt-1">{this.props.name}</p>
                            {this.props.data.links.map((element, key) => (
                                <>
                                    {Object.entries(element).map(([link, value]) => (
                                        <a className={`${icons[link]} pl-2 pt-2 text-indigo-600 float-right`} target="_blank" rel="noopener noreferrer" href={value} key={key}></a>
                                    ))}
                                </>
                            ))}
                        </div>
                        <p className="text-sm sm:text-base break-words pr-2 w-52 mt-2">{this.props.data.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Member;