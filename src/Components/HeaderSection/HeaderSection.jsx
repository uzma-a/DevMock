import React, { useRef } from 'react';
import './HeaderSection.css';
import { Link } from 'react-router-dom';
import { logout } from '../../../firebase';
import AboutSection from '../AboutSection/AboutSection.jsx';  // Import AboutSection
import WhatWeOffer from '../WhatWeOffer/WhatWeOffer.jsx';

const HeaderSection = () => {

    // Create a ref for the About section
    const aboutRef = useRef(null);
    const offerRef = useRef(null);
  
    // Scroll to the About section when the About link is clicked
    const scrollToAbout = () => {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToWhatWeOffer = () => {
      offerRef.current.scrollIntoView({behavior: 'smooth' })
    }

  return (
    <div className="main-container flex flex-col gap-10 h-auto">
      {/* Navbar */}
      <div className="navbar flex items-center justify-between flex-wrap mx-6 py-6 lg:mx-10">
        <div className="start">
          <Link to="/">
            <div className="logo font-bold text-white text-5xl cursor-pointer">DevMock</div>
          </Link>
        </div>
        <ul className="flex items-center text-gray-200 flex-wrap gap-8 md:gap-8 mt-2 font-bold text-base relative">
          <li
            className="hover hover:underline underline-offset-4 decoration-2 hover:text-gray-300"
            onClick={scrollToAbout} // Trigger scroll on click
          >
            About
          </li>
          <li
            className="hover hover:underline underline-offset-4 decoration-2 px-4 hover:text-gray-300"
            onClick={scrollToWhatWeOffer} // Trigger scroll on click
          >
            What We Offer
          </li>
          <li className="text-gray-800 mr-4 ">|</li>
          <Link to="/login">
            <button className="py-1 text-white px-4 bg-blue-500 font-medium text-base rounded-md border-solid border-black shadow-[-7px_7px_0px_#fff]">
              Login
            </button>
          </Link>
          <div className="profile relative flex items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              color="#ffffff"
              fill="none"
            >
              <path
                d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="dropdown absolute top-full right-0 w-max bg-blue-900 hidden px-5 py-2 rounded-lg z-[1] group-hover:block">
              <p onClick={() => logout()} className="text-sm cursor-pointer">
                Sign out of DevMock
              </p>
            </div>
          </div>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="hero-sec text-center flex flex-col w-[90%] sm:w-[80%] mx-auto mt-10 lg:mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-700 to-blue-600 bg-clip-text text-transparent">
          Complete Developer Interview Prep: Realistic Mock Tests & Resources
        </h1>
        <p className="mt-5 text-sm sm:text-lg md:text-xl text-gray-300 font-medium">
          A complete platform for developers to master interview{' '}
          <span className="text-blue-500 font-bold">skills</span>, practice real-world{' '}
          <span className="text-blue-500 font-bold">questions</span>, and gain{' '}
          <span className="text-blue-500 font-bold">confidence</span> with{' '}
          <span className="text-blue-500 font-bold">AI-driven</span> mock interviews.
        </p>
      </div>

      {/* Options Section */}
      <div className="options flex flex-col items-center gap-4">
        <Link to="/starting">
          <button className="mb-36 py-2 px-10 bg-blue-500 font-bold text-lg rounded-md border-solid border-black shadow-[-7px_7px_0px_#fff]">
            Get Started
          </button>
        </Link>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-r from-[#000088] to-gray-600 rounded-t-full blur-[200px] z-[-1] pointer-events-none"></div>
      </div>

      {/* About Section */}
      <AboutSection ref={aboutRef} />  {/* About section included and reference passed */}
      <WhatWeOffer ref={offerRef} />  {/* About section included and reference passed */}
    </div>
  );
};

export default HeaderSection;
