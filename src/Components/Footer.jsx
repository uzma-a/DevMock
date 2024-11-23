import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import add from '../assets/add.svg';

const Footer = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is DevMock?",
      answer: "DevMock is a platform focused on mock interviews to help developers build confidence and refine their problem-solving skills."
    },
    {
      question: "How can I start using DevMock?",
      answer: "To start using DevMock, sign up and log in to access mock interview sessions and practice challenges."
    },
    {
      question: "Who is DevMock designed for?",
      answer: "DevMock is for developers preparing for technical interviews, helping boost confidence and readiness for new graduates, career changers, and professionals."
    },
    {
      question: "What types of resources are available on DevMock?",
      answer: "DevMock offers resources for JavaScript, React and Node.js to help you prepare for interviews."
    },
    {
      question: "Can I use DevMock to prepare for interviews as a beginner?",
      answer: "Yes! DevMock provides beginner-friendly mock interviews and practice sessions for effective interview preparation."
    }
  ];

  return (
    <div className="faq bg-gray-900 text-white p-6 sm:p-8 md:p-10">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="max-w-[90%] sm:max-w-[60%] md:max-w-[40%] m-auto mt-6">
          <div
            className="faqbox cursor-pointer hover:bg-blue-700 rounded-sm flex justify-between bg-blue-900 p-5"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-base sm:text-lg">{faq.question}</span>
            <img src={add} alt="Toggle Answer" className="w-6 h-6" />
          </div>
          {openFAQ === index && (
            <div className="bg-blue-800 p-4 mt-2 rounded-sm">
              <p className="text-sm sm:text-base">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0 mt-12">
        <Link to="/">
          <div id='logo-style' className="logo font-semibold text-white text-xl sm:text-3xl cursor-pointer ">DevMock</div>
        </Link>
        <p className="text-base sm:text-lg text-white text-center">All rights reserved. © DevMock</p>
      </div>
    </div>
  );
};

export default Footer;
