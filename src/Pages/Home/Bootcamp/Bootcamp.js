import React from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

const Bootcamp = () => {
    return (
        <div className=''>
            <div>
            <div className="text-center mb-6 flex pb-10">
        <h2 className="text-5xl font-bold text-white pl-28 mb-4">BOOTCAMP</h2>
        <div className='pl-32'></div>
        <p className=" space-x-3 text-white pt-4 pl-72 col-end-7 col-span-2">
        Intensive training sessions to dominate the competition
        </p>
      </div>
            </div>
            <div>
                <div></div>
                {/* OK */}
                <div>

      <div className="flex justify-center pb-32">
        <div>
        <div className="pl-12 pt-48"><button class=" text-blue-400 font-bold py-2 px-4 rounded-full"><AiOutlineLeft size="1.5rem" color="" /></button></div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-4 ">
          <figure>
            <img
              src="https://i.ibb.co/sCXcc5b/Screenshot-270.png"
              alt="Shoes"
            />
          </figure>
          
        </div>
        
        <div className="card w-96 bg-base-100 shadow-xl mx-4">
          <figure>
            <img
              src="https://i.ibb.co/qpdWj5d/Screenshot-271.png"
              alt="Shoes"
            />
          </figure>
          
        </div>

        <div className="card w-96 bg-base-100 shadow-xl mx-4">
          <figure>
            <img
              src="https://i.ibb.co/zFjsQDk/Screenshot-272.png"
              alt="Shoes"
            />
          </figure>
          
        </div>
        <div>
        <div className="pl-12 pt-48"><button class=" text-blue-400 font-bold py-2 px-4 rounded-full"><AiOutlineRight size="1.5rem" color="" /></button></div>
        </div>

        
      </div>
    </div>
                <div></div>
            </div>
        </div>
    );
};

export default Bootcamp;