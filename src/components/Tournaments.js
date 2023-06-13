import React from 'react';
import vector from './imgs/Vector (20).png'
import vector2 from './imgs/Vector (30).png'
import pubg from './imgs/Rectangle 204.png'
import arrow from './imgs/arrow_back_ios_new.png'

const Tournaments = () => {
    return (
        <div>
             <div className='max-w-[1250px] mx-auto py-12 p-3'>
            <div className="flex flex-wrap justify-between" data-aos="fade-down">
                <div className="text-white ">
                <h2 className='text-5xl font-bold py-6 pl-10 md:pl-10'>Tournament</h2>
                <p className='pl-10 md:pl-0'>Come test your skills and win exciting prizes in Playerorbit's gaming </p>
                <p className='pl-10 md:pl-0'>tournament!</p>
                </div>
                <div className="lg:mx-40 lg:mt-0 mt-4 mx-auto">
                    <img className='w-32 h-20' src={vector} alt="" />
                    <img className='w-32 h-20' src={vector2} alt="" />
                </div>
            </div>

            <div className=" mt-16 flex flex-wrap rounded" data-aos="fade-up">
             <div className="flex rounded flex-wrap max-w-[980px] bg-[#1E1F22]">
                <img className='w-[290px] mx-auto h-[370px]' src={pubg} alt="" />
                <div className="text-white max-w-[680px] p-8">
                    <h3 className='text-2xl font-semibold'>BGMI Grand Tournament</h3>
                    <p className='text-gray-400'>28 Jan, 2023 , 17:00 IST</p>
                    <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis odio et quam semper blandit. Praesent in venenatis dui, et varius justo. Donec sit amet ex congue, Lorem ipsum dolo</p>
                    <p className='py-3'>. Lorem ipsum dolor sit amet <br /> . Lorem ipsum dolor sit amet heh masacra <br />. Group</p>
                    <div className="flex flex-wrap justify-between">
                        <h4 className='text-[#F6B101] text-2xl font-semibold'>Prize Pool: 30k</h4>
                        <button className='bg-[#4CBEFE] btn btn-sm rounded-lg w-20 text-white'>Join</button>
                    </div>
                </div>               
             </div>
             <div className="lg:mt-40 mt-2 mx-12 w-10 h-10 bg-[#4CBEFE] rounded-full">
                 <img className='w-4 h-4 mx-3 mt-3' src={arrow} alt="" />
             </div>          
            </div>
        </div>
        </div>
    );
};

export default Tournaments;