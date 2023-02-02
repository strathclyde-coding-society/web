import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-black text-slate-400 border-t-4 border-indigo-600">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-slate-400 text-sm text-center sm:text-left">Strathclyde Coding Society 2023</p>
                    <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a href="https://discord.com/invite/zbPVc68kX7" target="_blank" rel="noopener noreferrer"><i className="bi bi-discord ml-1 px-1"></i></a>
                        <a href="https://www.instagram.com/strathcoding/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram ml-1 px-1"></i></a>
                        <a href="https://www.linkedin.com/company/strathcoding/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin ml-1 px-1"></i></a>
                    </div>
                </div>
            </footer>
        );
    }
}
  
export default Footer;