import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NodejsInterview.css';
import ai_pic from '../../assets/ai_interviewer_pic.jpg';
import sound_wave from '../../assets/sound_wave.gif';

const NodejsInterview = () => {
    const [isInterviewStarted, setInterviewStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState('No answer captured');
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isListening, setIsListening] = useState(false);

    const questions = [
        'What is Node.js, and why is it popular for backend development?',
        'Explain the concept of event-driven architecture in Node.js.',
        'What is the difference between synchronous and asynchronous code in Node.js?',
        'How does the Node.js event loop work?',
        'What are callbacks, and why are they important in Node.js?',
        'What is the purpose of the "package.json" file in a Node.js project?',
        'What is npm, and how do you use it to manage packages in Node.js?',
        'What is middleware in Express.js, and how is it used?',
        'What is the difference between "require()" and "import" in Node.js?',
        'How do you handle errors in Node.js applications?',
        'What are Promises, and how do they help with asynchronous programming in Node.js?',
        'Explain async/await and how it simplifies asynchronous code.',
        'How do you create a basic HTTP server in Node.js?',
        'What is the "fs" module, and how is it used for file operations in Node.js?',
        'How do you handle CORS (Cross-Origin Resource Sharing) issues in a Node.js application?'
    ];


    const history = useNavigate();

    const synth = window.speechSynthesis;
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    if (!synth || !recognition) {
        return (
            <div className="text-red-500 text-center mt-10">
                Your browser does not support Speech Synthesis or Speech Recognition. Please use a modern browser like Chrome.
            </div>
        );
    }

    const askQuestion = (question) => {
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(question);
        utterance.rate = 1;
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => {
            setIsSpeaking(false);
            startListening();
        };

        try {
            synth.speak(utterance);
        } catch (error) {
            console.error('Speech synthesis error:', error);
        }
    };

    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    const startListening = () => {
        setIsListening(true);
        setAnswer('No answer captured');
        try {
            recognition.start();
        } catch (error) {
            console.error('Speech recognition start error:', error);
            setIsListening(false);
        }
    };

    recognition.onresult = (event) => {
        if (event.results.length > 0) {
            const transcript = event.results[0][0].transcript.trim();
            setAnswer(transcript || 'No answer captured');
        }
        setIsListening(false);
    };

    recognition.onend = () => {
        setIsListening(false);
    };

    const startInterview = () => {
        setInterviewStarted(true);
        setCurrentQuestionIndex(0);
        const question = questions[0];
        askQuestion(question);
    };

    const nextQuestion = () => {
        recognition.stop(); // Stop listening before moving to the next question
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
        setAnswer('No answer captured');
        if (nextIndex < questions.length) {
            const nextQuestion = questions[nextIndex];
            setTimeout(() => askQuestion(nextQuestion), 300);
        } else {
            handleSubmit(); // Handle submit if it's the last question
        }
    };

    const handleSubmit = () => {
        // Redirect immediately to "Thank You" page
        history('/thank-you');

        // After 5 seconds, trigger another action (like redirecting to another page)
        setTimeout(() => {
            history('/starting/nodejsInterview'); // Replace with the desired path
        }, 5000);
    };

    return (
        <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10">
            <div className="nav sm:py-8 flex flex-col items-center text-center">
                <Link to="/">
                    <div className="text-4xl sm:px-3 py-3 sm:mt-2 sm:text-3xl lg:text-7xl font-extrabold bg-gradient-to-t from-blue-800 to-pink-600 bg-clip-text text-transparent cursor-pointer">
                        Node.js Interview
                    </div>
                </Link>
                <p className="text-blue-400 font-bold sm:mt-10 text-sm sm:text-lg lg:text-xl">
                    Prepare to ace your
                    <span className="bg-gradient-to-t ml-1 sm:text-2xl from-blue-800 to-pink-600 bg-clip-text text-transparent font-semibold">
                        Node.js interview
                    </span>{' '}
                    with AI-powered assistance!
                </p>
                <p className='text-blue-400 font-semibold sm:text-lg mt-8 text-lg'>
                    This interview will test your understanding of key
                    <span className='bg-gradient-to-t from-blue-800 to-pink-600 bg-clip-text text-transparent font-semibold ml-1'>
                        Node.js concepts
                    </span> including,
                    <span className='bg-gradient-to-t from-blue-800 to-pink-600 bg-clip-text text-transparent font-semibold ml-1'>
                        event-driven programming
                    </span>,
                    <span className='bg-gradient-to-t from-blue-800 to-pink-600 bg-clip-text text-transparent font-semibold ml-1'>
                        asynchronous operations
                    </span>,
                    <span className='bg-gradient-to-t from-blue-800 to-pink-600 bg-clip-text text-transparent font-semibold ml-1'>
                        Express.js middleware
                    </span>,
                    <span className='bg-gradient-to-t from-blue-800 to-pink-600 bg-clip-text text-transparent font-semibold ml-1'>
                        Promises and async/await
                    </span>,
                    <span className='bg-gradient-to-t from-blue-800 to-pink-600 bg-clip-text text-transparent font-semibold ml-1'>
                        file system (fs) module
                    </span>, and
                    <span className='bg-gradient-to-t from-blue-800 to-pink-600 bg-clip-text text-transparent font-semibold ml-1'>
                        CORS handling
                    </span>.
                </p>


            </div>



            {!isInterviewStarted && (
                <div className="about-questions lg:mr-64 md:mr-72 sm:mr-44 mt-6 sm:mt-10 px-4 sm:px-8 text-gray-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 bg-gradient-to-t from-blue-800 to-pink-600 bg-clip-text text-transparent font-semibold">
                        This Interview contains 15 questions:
                    </h3>
                    <ul className="list-disc list-inside ml-2 text-sm sm:text-base md:text-lg space-y-2 sm:space-y-3">
                        
                        <li>
                            <strong>Node.js Basics:</strong> 3 questions
                        </li>
                        <li>
                            <strong>Event-Driven Architecture:</strong> 2 questions
                        </li>
                        <li>
                            <strong>Synchronous vs Asynchronous Programming:</strong> 2 questions
                        </li>
                        <li>
                            <strong>Error Handling:</strong> 1 questions
                        </li>
                        <li>
                            <strong>Promises and Async Programming:</strong> 2 questions
                        </li>
                        <li>
                            <strong>Express.js & Middleware:</strong> 2 questions
                        </li>
                        <li>
                            <strong>Modules & File Handling:</strong> 2 questions
                        </li>
                        <li>
                            <strong>HTTP Server:</strong> 1 questions
                        </li>
                    </ul>
                </div>
            )}



            {!isInterviewStarted && (
                <div className="instructions lg:ml-32 mt-6 sm:mt-10 px-4 sm:px-8 text-gray-200">
                    <h3 className="text-xl  sm:text-2xl md:text-3xl mb-4 bg-gradient-to-t from-blue-800 to-pink-600 bg-clip-text text-transparent font-semibold">
                        Instructions:
                    </h3>
                    <ul className="list-disc list-inside ml-2 text-sm sm:text-base md:text-lg space-y-2 sm:space-y-3">
                        <li>
                            <strong>Use a quality microphone</strong> for enhanced voice clarity and accuracy.
                        </li>
                        <li>
                            <strong>Choose a quiet environment</strong> to minimize background noise and distractions.
                        </li>
                        <li>
                            <strong>Be clear and concise</strong> in your speech to ensure your message is easily understood.
                        </li>
                        <li>
                            <strong>Maintain a moderate pace</strong>—avoid speaking too quickly to give your audience time to follow.
                        </li>
                        <li>
                            <strong>Project your voice confidently</strong>—speak loudly and clearly to ensure your words are heard and understood.
                        </li>
                    </ul>
                </div>
            )}

            {isInterviewStarted && (
                <div className="ai-face mt-6 sm:mt-10 relative flex flex-col items-center text-center">
                    <img
                        src={ai_pic}
                        alt="AI Face"
                        className="w-48 sm:w-60 lg:w-72 h-auto rounded-full"
                    />
                    <img
                        src={sound_wave}
                        alt="Sound Wave"
                        className={`absolute top-1/2 left-1/2 w-12 sm:w-16 lg:w-20 h-auto transform -translate-x-1/2 -translate-y-1/2 ${isSpeaking || isListening ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <p className="font-semibold text-base sm:text-lg lg:text-xl mt-4 bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">
                        AI is ready for your Interview!
                    </p>
                </div>
            )}

            {!isInterviewStarted ? (
                <button
                    onClick={startInterview}
                    className="px-4 sm:px-6 mt-4 mb-10 sm:mt-5 py-2 bg-blue-500 font-bold text-sm sm:text-lg rounded-md border border-solid border-black shadow-[-4px_4px_0px_#fff] hover:text-gray-300 hover:bg-blue-700 text-center"
                >
                    Start Interview
                </button>
            ) : (
                <div className="text-center flex flex-col items-center mt-4 sm:mt-5">
                    <p className="text-white text-sm sm:text-lg mt-5">
                        Question: {questions[currentQuestionIndex]}
                    </p>
                    <p className="bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent text-sm sm:text-lg mt-3">
                        Your Answer: {answer}
                    </p>
                    <button
                        onClick={nextQuestion}
                        className="mt-4 sm:mt-5 mb-6 bg-green-500 px-4 py-2 rounded-md shadow-md text-sm sm:text-lg hover:bg-green-700 text-center"
                        disabled={isSpeaking || isListening}
                    >
                        {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next Question'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default NodejsInterview;




