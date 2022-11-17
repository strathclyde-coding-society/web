import React from 'react';

function About() {
    return (
        <section id="about" className="bg-white w-screen h-1/2 overflow-x-hidden flex flex-col items-center">
            <div className="flex flex-col justify-center items-center h-full max-w-[60rem]">
                <div className="flex-row">
                    <div class="bg-sky-500 text-4xl leading-normal font-bold text-black m-2">
                        <h1>About Our Society</h1>
                    </div>
                    <div class="bg-sky-300 m-2">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta repellendus maiores corporis quaerat non. Quibusdam, expedita, maiores dicta architecto unde soluta odit repudiandae alias excepturi libero quasi fugit recusandae quia nihil laborum nostrum cupiditate, a eaque vero. Minima eum sunt eaque similique optio ratione, tenetur est. Numquam nihil corporis eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto, repellat voluptatum temporibus veniam nostrum ducimus repudiandae velit autem, veritatis delectus a quasi! Corrupti ut quidem fugit qui molestias magni exercitationem magnam dicta. Nostrum ut non, quaerat sequi fuga, quasi minima iure, debitis dignissimos nesciunt totam sit? Fugiat consectetur in ex expedita rerum earum aspernatur soluta, quis esse totam quibusdam nobis distinctio. Omnis ipsa impedit id qui. Ipsam vel accusamus neque laborum enim omnis, architecto aperiam vero aliquam ratione eaque recusandae ab, deleniti rem sed minus nam doloribus veniam est, sit nostrum sequi eveniet quidem ut? Ipsam eos natus saepe!</p>
                    </div>
                    <div class="bg-sky-100 m-2">
                        <h1>About Our Society</h1>
                    </div>
                    <div className="m-2 mt-5">
                        <a href="https://www.strathunion.com/groups/find-a-society/society/coding/" target="_blank" rel="noopener" aria-label="strathclyde coding society">
                            <button className="text-sm text-white font-semibold flex justify-center items-center pt-[10px] pb-[10px] pl-[15px] pr-[15px] rounded-md opacity-70 hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-r from-blue-700 to-purple-700">
                                Join today!
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section> 
    );
  }
  
export default About;
  