import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

    return (
        <div className='h-screen flex flex-col justify-center'>
            {/* Logo and Logout Button */}
            <div className="flex items-center justify-between mb-10 px-4 sm:px-10 md:px-20">
                <Link to='/'>
                    <div id='logo-style' className="text-4xl sm:text-5xl cursor-pointer bg-gradient-to-r from-pink-800 to-blue-600 bg-clip-text text-transparent font-bold">
                        DevMock
                    </div>
                </Link>
                <button className='py-1 px-4 bg-blue-500 font-bold text-lg rounded-md border-solid border-black shadow-[-7px_7px_0px_#fff] hover:text-gray-300'>
                    Logout
                </button>
            </div>

            {/* Login Form */}
            <div className="login-form w-full sm:w-auto max-w-md bg-[rgba(53,49,110,0.16)] rounded-lg p-6 sm:p-10 md:p-14 mx-auto mb-4">
                <h1 className='text-3xl sm:text-4xl font-semibold mb-6 text-center'></h1>
                <form>
                    {/* Sign-Up Name Input */}
                    
                        <input
                            
                            className='w-full h-12 bg-gray-500 text-white m-3 border-none outline-none rounded-sm font-base text-lg px-4 py-2'
                            type="text"
                            placeholder='Your name'
                        />
                   

                    {/* Email Input */}
                    <input
                       
                        
                        className='w-full h-12 bg-gray-500 text-white m-3 border-none outline-none rounded-sm font-base text-lg px-4 py-2'
                        type="email"
                        placeholder='Email'
                    />

                    {/* Password Input */}
                    <input
                        
                        className='w-full h-12 bg-gray-500 text-white m-3 border-none outline-none rounded-sm font-base text-lg px-4 py-2'
                        type="password"
                        placeholder='Password'
                    />

                    {/* Submit Button */}
                    <button
                        
                        type='submit'
                        className='w-full border-none outline-none p-4 bg-blue-500 text-white rounded-md text-base font-medium mt-5 cursor-pointer'
                    >
                       Continue
                    </button>

                    {/* Helper Text */}
                    <div className="form-help flex items-center justify-between text-sm text-[#b3b3b3] mt-1">
                        <div className="remember flex items-center gap-1">
                            <input className='w-4 h-4' type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>

                {/* Switch between Sign Up and Sign In */}
                <div className="form-switch mt-10 text-[#737373] text-center">
                    
                        <p>New to DevMock? <span className='ml-1 text-white font-medium cursor-pointer'>Sign Up Now</span></p>
                     
                        <p>Already have an account? <span className='ml-1 text-white font-medium cursor-pointer'>Sign In Now</span></p>
                    
                </div>
            </div>
        </div>
    )
}

export default Login;



