import React from 'react'
import { Link } from 'react-router-dom'

const GettingStarted = () => {
  return (
    <div className='bg-slate-950 max-h-auto'>
      <div className="nav text-center py-8 sm:mx-4 md:mx-8 lg:mx-20 bg-slate-950 flex flex-col">
        <div className="start">
          <Link to='/'><div id='logo-style' className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-t from-blue-800 to-pink-600 bg-clip-text text-transparent cursor-pointer">DevMock</div></Link>
        </div>
        <p className='text-gray-300 font-bold mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl'>
          Welcome to DevMock! Your journey to mastering developer interviews starts here. Dive into realistic mock tests, explore essential resources, and build confidence for your next big opportunity.
        </p>
      </div>

      <div className="boxes w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto flex flex-col py-10 gap-6">

        {/* JavaScript Box */}
        <div className="box w-full h-auto sm:h-[35vh] md:h-[40vh] bg-gradient-to-t from-pink-800 to-blue-600 p-6 sm:p-8 rounded-lg text-white flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl underline underline-offset-4 font-extrabold bg-gradient-to-t from-purple-900 to-pink-900 bg-clip-text text-transparent mb-2">JavaScript</h1>
          <p className="text-base sm:text-lg mb-4">Essential programming language skills</p>
          <p className="text-sm sm:text-base mb-6">
            Preparing for a JavaScript interview can be challenging, but focusing on core concepts like closures, async programming, and the event loop will help you excel. Practice coding challenges, understand the DOM, and review ES6+ features for a strong foundation.
          </p>
          <Link to='/starting/javascriptInterview'>
            <button className="w-max py-2 px-4 bg-blue-700 text-white font-semibold rounded-md hover:text-gray-300">
              Continue
            </button>
          </Link>
        </div>

        {/* React Box */}
        <div className="box w-full h-auto sm:h-[35vh] md:h-[40vh] bg-gradient-to-t from-pink-800 to-blue-600 p-6 sm:p-8 rounded-lg text-white flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-t from-purple-900 to-pink-900 bg-clip-text text-transparent mb-2">React</h1>
          <p className="text-base sm:text-lg mb-4">Build user interfaces effectively</p>
          <p className="text-sm sm:text-base mb-6">
            Preparing for a React interview requires understanding component lifecycle, hooks, and state management. Focus on practical experience and coding challenges to enhance your skills and confidence.
          </p>
          <Link to='/starting/reactInterview'>
            <button className="w-max py-2 px-4 bg-blue-700 text-white font-semibold rounded-md hover:text-gray-300">
              Continue
            </button>
          </Link>
        </div>

        {/* NodeJS Box */}
        <div className="box w-full h-auto sm:h-[35vh] md:h-[40vh] bg-gradient-to-t from-pink-800 to-blue-600 p-6 sm:p-8 rounded-lg text-white flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-t from-purple-900 to-pink-900 bg-clip-text text-transparent mb-2">Node.js</h1>
          <p className="text-base sm:text-lg mb-4">Efficient backend development</p>
          <p className="text-sm sm:text-base mb-6">
            Preparing for a Node.js interview requires a strong understanding of event-driven architecture, RESTful API design, and middleware. Focus on hands-on projects, debugging, and solving backend challenges to build confidence and expertise.
          </p>
          <Link to='/starting/nodejsInterview'>
          <button className="w-max py-2 px-4 bg-blue-700 text-white font-semibold rounded-md hover:text-gray-300">
            Continue
          </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default GettingStarted



