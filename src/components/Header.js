import React, { useEffect } from "react";
import sport2 from "./imgs/sports_esports.svg";
import chess from "./imgs/main.gif";
import vector from "./imgs/Vector (3).png";
import line from "./imgs/Line 6.png";
import { BsPeopleFill } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Header = () => {
  //animation
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <div className="">
      <div className="max-w-[1250px] mx-auto py-12">
        <div className="hearder-main flex flex-wrap justify-between p-3">
          <div className="header-text max-w-[500px] text-white md:pt-12 pl-14 md:pl-0">
            <h1
              className="text-4xl md:text-7xl font-bold font-sans flex flex-wrap md:items-center"
              data-aos="fade-up"
            >
              PLAYER
              <motion.span
                className="bg-[#4CBEFE] md:h-16 md:w-16  sm:h-40 w-10  rounded-full mx-2 md:mt-2"
                animate={{ x: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={sport2}
                  className="md:h-8 md:w-8 h-4  w-4 mx-auto md:mt-4 mt-6"
                  alt=""
                />
              </motion.span>
              RBIT
            </h1>
            <p className="py-5 pr-6  md:text-center">
              Play harder, learn smarter & compete better
            </p>
            <div className=" flex flex-wrap py-12 pl-10 ">
              <button className="btn  rounded bg-[#1E1F22] text-white m-3 ">
                <div className="text-2xl" size="1.5rem">
                  <img className="h-6 pr-4 " src={vector} alt="" />{" "}
                </div>
                Play Online
              </button>
              <button className="btn  rounded bg-[#1E1F22] md:mx-4 m-3  text-white ">
                <span className="pr-4">
                  <BsPeopleFill size="1.5rem" />
                </span>
                <p>Play with Friend</p>
              </button>
              <button
                className="btn  rounded bg-[#1E1F22] mx-3 md:mx-16 text-white m-3 "
                data-aos="fade-down"
              >
                <span className="pr-4">
                  <HiOutlineDesktopComputer size="1.5rem" />
                </span>
                Play Computer
              </button>
            </div>
          </div>
          <div className="header-img p-3 rounded">
            <img
              className="w-[420px] mx-auto rounded"
              src={chess}
              data-aos="fade-up"
              alt=""
            />
          </div>
        </div>
      </div>
      <img className="py-3" src={line} alt="" />
    </div>
  );
};

export default Header;
