import React, { useEffect } from 'react';

function Title() {
  useEffect(() => {
      document.title = '403';
  });
}

function Error_403() {
    Title()
    return (
        <div className="w-screen h-screen justify-center items-center flex flex-row font-inter">
            <div>
            <h1 className="inline-block border-r-[1px] border-slate-400 text-xl font-bold pt-2 pb-2 pr-6 mr-4 align-top">403</h1>
                <div className="inline-block text-left align-middle leading-[46px]">
                    <p className="text-sm leading-[46px]">You don't have permission to access this resource.</p>
                </div>
            </div>
        </div>
    );
  }
  
export default Error_403;
  