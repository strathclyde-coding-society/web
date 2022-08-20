import React, { useEffect } from 'react';

function Title() {
  useEffect(() => {
      document.title = '404';
  });
}

function Error_404() {
    Title()
    return (
      <div class="w-screen h-screen justify-center items-center flex flex-row font-inter">
        <div class="">
          <h1 class="inline-block border-r-[1px] border-slate-400 text-xl font-bold pt-2 pb-2 pr-6 mr-4 align-top">404</h1>
          <div class="inline-block text-left align-middle leading-[46px]">
              <p class="text-sm leading-[46px]">This page could not be found.</p>
          </div>
        </div>
      </div>
    );
  }
  
export default Error_404;
  