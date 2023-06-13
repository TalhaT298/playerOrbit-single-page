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
        <div className='py-8 max-w-[1000px]  mx-auto'>
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
          1035: {
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
           <div className="w-[320px] mx-auto">
             <span className='absolute z-20 top-80 mx-10 text-gray-300 flex '>See Bootcamps
             <img className='mx-2 h-3 w-3 mt-2' src={img4} alt="" />
             </span>   
             <img className='w-[320px] p-3 relative' src={img1} />
             </div>           
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[320px] mx-auto">
            <span className='absolute z-20 top-80 mx-10 text-gray-300 flex '>See Bootcamps
             <img className='mx-2 h-3 w-3 mt-2' src={img4} alt="" />
             </span>
          <img className='w-[320px] p-3 relative' src={img2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[320px] mx-auto">
            <span className='absolute z-20 top-80 mx-10 text-gray-300 flex '>See Bootcamps
            <img className='mx-2 h-3 w-3 mt-2' src={img4} alt="" />
            </span>
          <img className='w-[350px] p-3 relative' src={img3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[320px] mx-auto">
            <span className='absolute z-20 top-80 mx-10 text-gray-300 flex '>See Bootcamps
             <img className='mx-2 h-3 w-3 mt-2' src={img4} alt="" />
             </span>
          <img className='w-[350px] p-3 relative' src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[320px] mx-auto">
            <span className='absolute z-20 top-80 mx-10 text-gray-300 flex '>See Bootcamps
             <img className='mx-2 h-3 w-3 mt-2' src={img4} alt="" />
             </span>
          <img className='w-[350px] p-3 relative' src={img2} />
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default BootcampSlider;