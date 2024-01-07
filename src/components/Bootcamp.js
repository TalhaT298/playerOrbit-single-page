// import React from 'react';
// import line2 from './imgs/Rectangle 248.png'
// // import BootcampSlider from './Slider/BootcampSlider';
// import line from './imgs/Line 6.png'
// import { AiOutlineRight } from "react-icons/ai";
// import { AiOutlineLeft } from "react-icons/ai";

// const Bootcamp = () => {
//     return (
//         <div className="">
//         <div className='w-full max-w-[1400] mx-auto py-12' data-aos="fade-down">
//             <div className="flex flex-wrap justify-around text-white p-3">
//                 <h2 className='text-4xl md:text-6xl font-bold pr-8'>BOOTCAMP</h2>
//                 <div className="flex flex-wrap justify-center">
//                 <img className='h-20 max-w-full md:max-w-[1200px] pr-20 py-3 md:py-0' src={line2} alt="" />
//                 <h6 className='md:mx-6 md:mt-6 pl-6 md:pl-0 text-base md:text-lg'>Intensive training sessions to dominate the competition</h6>
//             </div>
//             </div>

//             <div className="flex flex-col lg:flex-row justify-center pb-20 pt-16">
//         <div>
//         <div className="pl-2 md:pt-48 pt-0"><button class=" text-blue-400 font-bold py-2 px-4  rounded-full"><AiOutlineLeft size="1.5rem" color="" /></button></div>
//         </div>
//         <div className="card w-full lg:w-96 bg-base-100 shadow-xl mx-4 rounded">
//           <figure className='rounded-lg'>
//             <img
//               src="https://i.ibb.co/BtdMYML/Screenshot-1.png"
//               alt="Shoes"
//             />
//           </figure>
          
//         </div>
        
//         <div className="card w-full lg:w-96 bg-base-100 shadow-xl mx-4 rounded">
//           <figure className='rounded-lg'>
//             <img
//               src="https://i.ibb.co/FHqVWCL/Screenshot-2.png"
//               alt="Shoes"
//             />
//           </figure>
          
//         </div>

//         <div className="card w-full lg:w-96 bg-base-100 shadow-xl mx-4 rounded">
//           <figure className='rounded-lg'>
//             <img
//               src="https://i.ibb.co/HBLQSH2/Screenshot-3.png"
//               alt="Shoes"
//             />
//           </figure>
          
//         </div>
//         <div>
//         <div className="pl-2 md:pt-48 pt-0"><button class=" text-blue-400 font-bold py-2 px-4 rounded-full"><AiOutlineRight size="1.5rem" color="" /></button></div>
//         </div>

        
//       </div>
//         </div>
//         <img className='py-3' src={line} alt="" />  
//         </div>
//     );
// };

// export default Bootcamp;
import React from 'react';
import line2 from './imgs/Rectangle 248.png'
import BootcampSlider from './Slider/BootcampSlider';
import line from './imgs/Line 6.png'

const Bootcamp = () => {
    return (
        <div className="">
        <div className='max-w-[1400px] mx-auto py-12 lg:p-10' data-aos="">
            <div className="flex flex-wrap justify-around text-white p-3">
                <div className='pr-20'>
                <h2 className='text-[48px] md:pr-20 justify-start pr-40 font-extrabold'>BOOTCAMP</h2>
                </div>
                <div className="flex flex-wrap justify-center">
                <img className='h-20 py-3 md:py-0 hidden lg:block' src={line2} alt="" />
                <h6 className='md:mx-6 md:mt-6 pl-6 md:pl-0 '>Intensive training sessions to dominate the competition</h6>
            </div>
            </div>

            <div className="slider">
            <BootcampSlider />
            </div>
        </div>
        <img className=' mx-auto' src={line} alt="" />  
        </div>
    );
};

export default Bootcamp;