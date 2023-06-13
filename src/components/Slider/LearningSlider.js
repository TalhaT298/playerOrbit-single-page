import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import pizza from '../imgs/Pizza Photo.png'
import elip from '../imgs/Vector (5).svg'

const LearningSlider = () => {
    return (
        <div>
            <div className='py-8 max-w-[1250px] mx-auto mt-6'>
            <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
        //   1000: {
        //     slidesPerView: 4,
        //     slidesPerGroup: 4,
        //   },
        640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1035: {
            slidesPerView: 3,
          },
          1230: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
           <div className="w-[300px] bg-[#1E1F22] mx-auto">
            <p className='bg-white w-6 h-6  absolute z-20 mx-60 mt-3 rounded-full'>
            <img className=' absolute mx-2 mt-1' src={elip} alt="" /></p>
            <img className='w-[300px] relative' src={pizza} /> 
            <div className="p-3">
                <h3 className='text-1xl font-semibold py-2'>Chris Glasser</h3>
                <p className='text-sm'>Donec a eros justo. Fusce egestas tristique ultrices.</p>
                <div className="flex py-4 justify-between flex-wrap text-sm">
                    <p>Rating : 2000</p>
                    <p>Chess</p>
                </div>
                <div className="flex mt-5 py-1 justify-between flex-wrap">
                    <p className='text-gray-400'>Starting at <br /> <span className='text-white'>800</span> </p>
                    <button className='btn btn-sm rounded text-white bg-[#4CBEFE]'>O r d e r</button>
                </div>
            </div>
            </div>                                  
        </SwiperSlide>
        <SwiperSlide> 
           <div className="w-[300px] bg-[#1E1F22] mx-auto">
            <p className='bg-white w-6 h-6  absolute z-20 mx-60 mt-3 rounded-full'>
            <img className=' absolute mx-2 mt-1' src={elip} alt="" /></p>
            <img className='w-[300px] relative' src={pizza} /> 
            <div className="p-3">
                <h3 className='text-1xl font-semibold py-2'>Chris Glasser</h3>
                <p className='text-sm'>Donec a eros justo. Fusce egestas tristique ultrices.</p>
                <div className="flex py-4 justify-between flex-wrap text-sm">
                    <p>Rating : 2000</p>
                    <p>Chess</p>
                </div>
                <div className="flex mt-5 py-1 justify-between flex-wrap">
                    <p className='text-gray-400'>Starting at <br /> <span className='text-white'>800</span> </p>
                    <button className='btn btn-sm text-white rounded bg-[#4CBEFE]'>O r d e r</button>
                </div>
            </div>
            </div>                                  
        </SwiperSlide>
        <SwiperSlide> 
           <div className="w-[300px] bg-[#1E1F22] mx-auto">
            <p className='bg-white w-6 h-6  absolute z-20 mx-60 mt-3 rounded-full'>
            <img className=' absolute mx-2 mt-1' src={elip} alt="" /></p>
            <img className='w-[300px] relative' src={pizza} /> 
            <div className="p-3">
                <h3 className='text-1xl font-semibold py-2'>Chris Glasser</h3>
                <p className='text-sm'>Donec a eros justo. Fusce egestas tristique ultrices.</p>
                <div className="flex py-4 justify-between flex-wrap text-sm">
                    <p>Rating : 2000</p>
                    <p>Chess</p>
                </div>
                <div className="flex mt-5 py-1 justify-between flex-wrap">
                    <p className='text-gray-400'>Starting at <br /> <span className='text-white'>800</span> </p>
                    <button className='btn btn-sm text-white rounded bg-[#4CBEFE]'>O r d e r</button>
                </div>
            </div>
            </div>                                  
        </SwiperSlide>
        <SwiperSlide> 
           <div className="w-[300px] bg-[#1E1F22] mx-auto">
            <p className='bg-white w-6 h-6  absolute z-20 mx-60 mt-3 rounded-full'>
            <img className=' absolute mx-2 mt-1' src={elip} alt="" /></p>
            <img className='w-[300px] relative' src={pizza} /> 
            <div className="p-3">
                <h3 className='text-1xl font-semibold py-2'>Chris Glasser</h3>
                <p className='text-sm'>Donec a eros justo. Fusce egestas tristique ultrices.</p>
                <div className="flex py-4 justify-between flex-wrap text-sm">
                    <p>Rating : 2000</p>
                    <p>Chess</p>
                </div>
                <div className="flex mt-5 py-1 justify-between flex-wrap">
                    <p className='text-gray-400'>Starting at <br /> <span className='text-white'>800</span> </p>
                    <button className='btn btn-sm text-white rounded bg-[#4CBEFE]'>O r d e r</button>
                </div>
            </div>
            </div>                                  
        </SwiperSlide>
        <SwiperSlide> 
           <div className="w-[300px] bg-[#1E1F22] mx-auto">
            <p className='bg-white w-6 h-6  absolute z-20 mx-60 mt-3 rounded-full'>
            <img className=' absolute mx-2 mt-1' src={elip} alt="" /></p>
            <img className='w-[300px] relative' src={pizza} /> 
            <div className="p-3">
                <h3 className='text-1xl font-semibold py-2'>Chris Glasser</h3>
                <p className='text-sm'>Donec a eros justo. Fusce egestas tristique ultrices.</p>
                <div className="flex py-4 justify-between flex-wrap text-sm">
                    <p>Rating : 2000</p>
                    <p>Chess</p>
                </div>
                <div className="flex mt-5 py-1 justify-between flex-wrap">
                    <p className='text-gray-400'>Starting at <br /> <span className='text-white'>800</span> </p>
                    <button className='btn btn-sm text-white rounded bg-[#4CBEFE]'>O r d e r</button>
                </div>
            </div>
            </div>                                  
        </SwiperSlide>
        <SwiperSlide> 
           <div className="w-[300px] bg-[#1E1F22] mx-auto">
            <p className='bg-white w-6 h-6  absolute z-20 mx-60 mt-3 rounded-full'>
            <img className=' absolute mx-2 mt-1' src={elip} alt="" /></p>
            <img className='w-[300px] relative' src={pizza} /> 
            <div className="p-3">
                <h3 className='text-1xl font-semibold py-2'>Chris Glasser</h3>
                <p className='text-sm'>Donec a eros justo. Fusce egestas tristique ultrices.</p>
                <div className="flex py-4 justify-between flex-wrap text-sm">
                    <p>Rating : 2000</p>
                    <p>Chess</p>
                </div>
                <div className="flex mt-5 py-1 justify-between flex-wrap">
                    <p className='text-gray-400'>Starting at <br /> <span className='text-white'>800</span> </p>
                    <button className='btn btn-sm text-white rounded bg-[#4CBEFE]'>O r d e r</button>
                </div>
            </div>
            </div>                                  
        </SwiperSlide>
        
      </Swiper>
        </div>
        </div>
    );
};

export default LearningSlider;