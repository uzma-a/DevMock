import React, { forwardRef } from 'react';
import './WhatWeOffer.css';

const WhatWeOffer = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="offer-section">
            <div className='offer-sec'>
                <div className='about-sec h-auto flex items-center justify-center px-4 sm:px-8'>
                    <div className="aboutUs my-8 sm:mx-10 md:mx-20 flex flex-col">
                        <div className="heading text-center flex flex-col">
                            <span id='welcome' className='text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-t from-blue-400 to-pink-600 bg-clip-text text-transparent mt-2'>
                                What We Offer
                            </span>
                        </div>
                        <div className="para mt-6 sm:mt-16 mb-32 flex flex-col gap-6 sm:gap-8 md:gap-12">
                            <p className='text-base sm:text-lg md:text-xl'>
                                <ul className="list-disc pl-5 ">
                                    <li className='mt-6'><strong className='text-lg sm:text-xl font-semibold py-5 text-blue-500'>JavaScript:</strong> Essential for web development, enabling dynamic and interactive websites. JavaScript is used for both front-end and back-end development, making it crucial to learn to stay competitive in the industry.</li>
                                    <li className='mt-6'><strong className='text-lg sm:text-xl font-semibold py-5 text-blue-500'>React:</strong> A popular front-end library for building fast, responsive user interfaces. React’s component-based architecture allows for scalable and reusable code, making it an in-demand skill for modern web development.</li>
                                    <li className='mt-6'>
                                        <strong className='text-lg sm:text-xl font-semibold py-5 text-blue-500 mr-1'>Node.js:</strong>
                                         Known for its non-blocking, event-driven architecture, Node.js is widely used in building scalable and high-performance web applications. It is popular for its use in real-time applications, APIs, and server-side scripting. Node.js is in high demand, particularly in backend development and microservices architecture.
                                    </li>

                                </ul>
                            </p>


                            <p className='text-xl sm:text-4xl md:text-5xl font-semibold text-center bg-gradient-to-b from-purple-300 to-red-600 bg-clip-text text-transparent mt-2'>
                                Why You Should Sharpen These Skills:
                            </p>

                            <p className='text-base sm:text-lg md:text-xl'>
                                <ul className="list-disc pl-5 ">
                                    <li className='mt-6'>These technologies are widely used across the tech industry, making them key to career advancement.</li>
                                    <li className='mt-6'>Proficiency in JavaScript, React, and NodeJs will keep you competitive and open doors to various development roles.</li>
                                    <li className='mt-6'>Mastering these skills equips you with the tools to create innovative solutions and solve complex problems across a wide range of industries.</li>
                                </ul>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default WhatWeOffer;
