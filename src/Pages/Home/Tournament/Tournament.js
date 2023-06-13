import React from "react";
import { Link } from "react-router-dom";
// import { AiOutlineRight } from "react-icons/ai";

const Tournament = () => {
  return (
    <div className="">
      <div className="hero pt-32 pb-24 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/txfqm9w/Screenshot-265-removebg-preview.png"
            alt=""
            className="lg:w-1/2 rounded-lg shadow-2xl h-60 w-40 pl-96"
          />
          <div className="justify-start pr-24">
            <h1 className="text-5xl text-white font-bold">Tournament</h1>
            
            <p className="py-6 font-semibold text-white">
              Come test your skills and win exciting prizes in Playerorbit's
              gaming tournament!
            </p>
          </div>
        </div>
      </div>

      <div className="flex pl-12">
        <div className="card card-side bg-base-100 shadow-xl w-5/6">
          <figure>
            <img
              src="https://i.ibb.co/t8sKJC9/Screenshot-264.png"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-4xl">BGMI Grand Tournament</h2>
            <p>28 Jan, 2023, 17:00 IST</p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lobortis odio et quam semper blandit. Praesent in venenatis dui,
              et varius justo. Donec sit amet ex congue, Lorem ipsum dolo
            </p>
            <div className="text-white">
                <p>• Lorem ipsum dolor sit amet</p>
                <p>• Lorem ipsum dolor sit amet heh masacra</p>
                <p>• Group</p>
            </div>
            <div className="flex ">
                <h1 className="text-yellow-800 text-3xl">Prize Pool: 30k</h1>
            <div className="card-actions justify-end pl-80">
              <button className="btn btn-primary bg-blue-400">Join</button>
            </div>
            </div>
          </div>
        </div>
        </div>
        

    </div>
  );
};

export default Tournament;