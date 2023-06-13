import React from "react";
import { Link } from "react-router-dom";
import { TbChessKnightFilled } from "react-icons/tb";
import { TbFriends } from "react-icons/tb";
import { MdOutlineComputer } from "react-icons/md";
import { LuGamepad2 } from "react-icons/lu";


const Banner = () => {
  return (
    <div className="hero  pt-12 pb-24">
      <div className="hero-content   lg:flex-row-reverse"> 
                    {/* flex-col */}
        <img src="https://i.ibb.co/ym2z679/Screenshot-262.png" alt="" className="lg:w-1/2 rounded-lg pl-48 shadow-2xl" />
        
        <div>
          <div className="flex justify-start">
          <h1 className="text-7xl pr-16 text-white font-bold">PLAYER<button className="ml-3 bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
    <LuGamepad2 size="3rem" color=""/></button>RBIT</h1>
          </div>
          <div>
            <p className="py-6 font-semibold text-white pl-16 gap-4">
          Play  harder,  learn smarter & compete better
          </p>
          </div>
          <div>
          <Link to="">
            <button
              className="btn  text-white mr-6 pr-8"
              data-aos-duration="1000"
            >
              
              <TbChessKnightFilled className="pr-4" size="3rem"  />
              Play Online
            </button>
          </Link>
          <Link to="">
            <button
              className="btn  text-white mt-4"
              data-aos-duration="1000"
            >
              
              <TbFriends className="pr-4 mr-4" size="3rem" />
              Play with Friend
            </button>
          </Link>
          </div>
          <div className="pl-24 pt-10">
          <Link to="">
            <button
              className="btn text-white"
              data-aos-duration="1000"
            >
             
              <MdOutlineComputer className=" pr-4 mr-4" size="3rem" />
              Play Computer
            </button>
          </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
