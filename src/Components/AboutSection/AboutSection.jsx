import React, { forwardRef } from 'react';
import './AboutSection.css'; // Import your CSS file


const AboutSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about-section">
    <div className='about-sec h-auto flex items-center justify-center px-4 sm:px-8'>
      <div className="aboutUs my-8 sm:mx-10 md:mx-20 flex flex-col">
        <div className="heading text-center flex flex-col">
          <span id='welcome' className='text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-t from-blue-400 to-pink-600 bg-clip-text text-transparent mt-2'>
            Welcome to <span id='logo-style'>DevMock</span>
          </span>
          <span className='text-lg sm:text-xl font-semibold py-5 text-blue-500'>
            Your Gateway to Innovative Development Solutions!
          </span>
        </div>
        <div className="para mt-10 sm:mt-16 mb-32 flex flex-col gap-6 sm:gap-8 md:gap-12">
          <p className='text-base sm:text-lg md:text-xl'>
            
            As a beginner stepping into the IT field, preparing for interviews can be both exciting and nerve-wracking. Often, confusion and hesitation arise when you're unsure how to answer technical questions or articulate your thoughts clearly. 
          </p>
          <p className='text-base sm:text-lg md:text-xl'><span className='text-2xl bg-gradient-to-r mr-1 from-pink-800 to-blue-600 bg-clip-text text-transparent font-semibold'>
              DevMock 
            </span>  is designed to help you overcome these challenges. It provides a dedicated platform to practice mock interviews in a realistic and stress-free environment. Whether you’re brushing up on coding skills, preparing for behavioral questions, or tackling problem-solving scenarios, DevMock offers the tools you need to build confidence and clarity.</p>
          <p className='text-base sm:text-lg md:text-xl'>
            <span className='text-2xl bg-gradient-to-r from-pink-800 to-blue-600 bg-clip-text text-transparent font-semibold'>
               DevMock
            </span> bridges the gap between learning and performing. By simulating real interview scenarios, it helps you identify your weaknesses and refine your responses. As you practice, the confusion that once held you back transforms into a pathway to success. DevMock empowers you to break free from hesitation, develop a structured thought process, and make a positive impression in your interviews. Let DevMock be your stepping stone to landing your dream role in the IT industry.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
});

export default AboutSection;
