import React from 'react';
import LearningSlider from './Slider/LearningSlider';
import line from './imgs/Line 6.png'
const Learning = () => {
    return (
        <div className="max-w-[1700px] justify-center" data-aos="">
        <div className='py-10 text-white rounded'>
            <h2 className='text-5xl font-bold text-center'>1v1 Learning</h2>
            <p className='pt-5 pl-4 md:pl-0 text-center'>Focus on your strengths, conquer your weaknesses, and unleash your full gaming potential with our personalized </p>
            <p className='text-center'>coaching!</p>
            <LearningSlider />
        </div>
        <img className='py-3' src={line} alt="" />  
        </div>
    );
};

export default Learning;