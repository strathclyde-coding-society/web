import React from 'react';

import Button from '../components/Button';

class Landing extends React.Component {
    render() {
        return (
            <header className="bg-black w-screen h-screen overflow-x-hidden flex flex-col items-center space-y-2">
                <div style="color: rgba(0, 0, 0, 0.2); --darkreader-inline-color:rgba(255, 253, 249, 0.2);" data-darkreader-inline-color=""><div id="htbspiral" style="position: fixed;z-index: -1;"><canvas width="1026" height="935" id="canvas"></canvas></div></div>
                <div class="jumbotron" id="jumbotron"></div>
                <script src="https://cdn.jsdelivr.net/npm/@glidejs/glide@3.4.1/dist/glide.min.js" integrity="sha256-CnNQJd80jPuIDyeQRRq7+Wgt+++Kl0dZLt4ETNmxMIw=" crossorigin="anonymous"></script>
                <script src="lib/index.min.js" defer=""></script>
                <div className="flex flex-col justify-center items-center h-[80rem] max-w-[60rem]">
                    <section id="header" className="py-24 flex items-center min-h-screen justify-center">
                        <div className="mx-auto max-w-[43rem]">
                            <div className="text-center">
                                <h2 className="md:text-lg font-medium leading-8 text-indigo-600">04/03/23 | 14:00</h2>
                                <h1 className="mt-3 md:text-[3.5rem] text-[2.75rem] font-bold leading-[3.5rem] md:leading-[4rem] tracking-tight text-slate-50">Grab your StrathHack Tickets today!</h1>
                                <p className="mt-3 md:text-lg text-sm leading-relaxed text-slate-400">Assemble a team and join us for a fun 24 hours of programming and free pizza!</p>
                            </div>
                            <div className="mt-6 flex items-center justify-center gap-4">
                                <Button content="Buy Tickets" href="https://www.eventbrite.com/e/strathhack-tickets-509350911287" size="large"/>
                            </div>
                        </div>
                    </section>
                </div>
            </header> 
        );
    }
}
  
export default Landing;
  