import React from 'react';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import img1 from '../imgs/image 90.png'
import img2 from '../imgs/WhatsApp Image 2023-04-20 at 11.49 1.png'
import img3 from '../imgs/image 92.png'
import img4 from '../imgs/Vector 10.png'

const BootcampSlider = () => {
    return (
        <div className='py-8 max-w-[1700px]  mx-auto'>
        <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 3,
          },
          

        }}
        //scrollbar={true}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="mx-auto w-[400px] rounded-2xl group relative items-center justify-center overflow-hidden cursor-pointer">         
          <div className="">
            <span className="top-96 mt-4 mx-8 flex flex-wrap text-white absolute z-20">See Bootcamps
            <img className='h-3 w-3 mx-2 mt-2' src={img4} alt="" />
            </span>
           <img className='w-[400px] relative  transition-transform duration-500' src={img1} alt="" />            
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/70  group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center  text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
            <h1 className='text-white font-bold text-[33px]'>Foundational <br /> Bootcamps</h1>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="mx-auto w-[400px] rounded-2xl group relative items-center justify-center overflow-hidden cursor-pointer">         
          <div className="">
            <span className="top-96 mt-4 mx-8 flex flex-wrap text-white absolute z-20">See Bootcamps
            <img className='h-3 w-3 mx-2 mt-2' src={img4} alt="" />
            </span>
           <img className='w-[400px] relative  transition-transform duration-500' src={img2} alt="" />            
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/70  group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center  text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
            <h1 className='text-white font-bold text-[33px]'>Intermediate <br /> Bootcamps</h1>
          </div>
        </div>         
        </SwiperSlide>
        <SwiperSlide>
        <div className="mx-auto w-[400px] rounded-2xl group relative items-center justify-center overflow-hidden cursor-pointer">         
          <div className="">
            <span className="top-96 mt-4 mx-8 flex flex-wrap text-white absolute z-20">See Bootcamps
            <img className='h-3 w-3 mx-2 mt-2' src={img4} alt="" />
            </span>
           <img className='w-[400px] relative  transition-transform duration-500' src={img3} alt="" />            
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/70  group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center  text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
            <h1 className='text-white font-bold text-[33px]'>Mastery <br /> Bootcamps</h1>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="mx-auto w-[400px] rounded-2xl group relative items-center justify-center overflow-hidden cursor-pointer">         
          <div className="">
            <span className="top-96 mt-4 mx-8 flex flex-wrap text-white absolute z-20">See Bootcamps
            <img className='h-3 w-3 mx-2 mt-2' src={img4} alt="" />
            </span>
           <img className='w-[400px] relative  transition-transform duration-500' src={img1} alt="" />            
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/70  group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center  text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
            <h1 className='text-white font-bold text-[33px]'>Foundational <br /> Bootcamps</h1>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="mx-auto w-[400px] rounded-2xl group relative items-center justify-center overflow-hidden cursor-pointer">         
          <div className="">
            <span className="top-96 mt-4 mx-8 flex flex-wrap text-white absolute z-20">See Bootcamps
            <img className='h-3 w-3 mx-2 mt-2' src={img4} alt="" />
            </span>
           <img className='w-[400px] relative  transition-transform duration-500' src={img2} alt="" />            
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/70  group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center  text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
            <h1 className='text-white font-bold text-[33px]'>Foundational <br /> Bootcamps</h1>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default BootcampSlider;