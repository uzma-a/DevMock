import React, { useEffect } from 'react';

const ThankYou = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.reload(); // Reload the page after 5 seconds
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-slate-950 h-screen flex flex-col items-center justify-center text-white">
            <div className="start">
                <div id='logo-style' className="text-3xl mb-16 sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-t from-blue-800 to-pink-600 bg-clip-text text-transparent cursor-pointer">DevMock</div>
            </div>
            <div className="bg-blue-700 text-white p-10 rounded-lg shadow-xl w-4/5 sm:w-3/5 md:w-1/2 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Thank you for completing the interview!</h1>
                <p className="text-lg sm:text-xl mb-6">
                    You did great! We will be in touch soon.
                </p>
                <div className="text-4xl mb-4">
                    <span role="img" aria-label="thumbs up">👍</span>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                    Your effort has been noted, and we're excited to move forward. Stay tuned!
                </p>
            </div>
        </div>


    );
};

export default ThankYou;
