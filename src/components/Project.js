import React from 'react';

class Project extends React.Component {
    render() {
        let next = this.props.data.next == "yes";
        return (
            <div className={"max-w-md mx-auto overflow-hidden md:max-w-2xl border-l-2 "+ (next ? "border-green-600":"border-indigo-600")}>
                <div className={"grid grid-cols-6 p-5 gap-y-2 " + (next ? "pl-8":"")}>
                    <div className="col-span-5 md:col-span-4 ml-4">
                        <p className={"uppercase tracking-wide font-semibold " + (next ? "text-green-600":"text-indigo-600 text-xs ")}>{(next ? "next ":"") + this.props.data.type }</p>
                        <p className={"text-slate-50 font-bold "+ (next ? " text-2xl ":"text-xl")}>{this.props.title}</p>
                        <p className={"text-slate-400 "+ (next ? "text-xl":"")}>{this.props.data.date + " | " + this.props.data.time}</p>
                        <p className={"text-slate-400 "+ (next ? "text-xl":"")}>{this.props.data.location}</p>
                    </div>
                    <div className="m-auto">
                    <Modal data={this.props.data} closedByDefault={true} title={this.props.title} />
                    </div>
               </div>
            </div>  
        );
    }
}

export default Project;