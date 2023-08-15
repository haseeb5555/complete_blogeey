import React from 'react';
import { FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <div className="bg-[#1F1F22] shadow-lg rounded-lg p-8 lg:p-12 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="col-span-1 lg:col-span-1 flex flex-col items-center">
        <div className="w-8 h-8 bg-[#877EFF] rounded-full flex items-center justify-center mb-2">
          <FiPhone className="h-5 w-5 text-white" />
        </div>
        <div className="text-center">
          <p className="text-gray-100 font-semibold">Contact by Phone</p>
          <p className="text-gray-300">Phone: (+92) 305-5641720</p>
          <p className="text-gray-300">Phone: (+92) 313-4225018</p>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1 flex flex-col items-center">
        
        <div>
          <h2 className="text-white text-lg font-semibold mb-2 text-center">Start a New Case</h2>
          <p className="text-gray-300 mb-4 text-center">Ask your questions and let us know your concerns. We're here to help!</p>
        </div>
        <a
          href="mailto:furqankhalid563@gmail.com"
          className="align-center transition duration-500 ease transform hover:-translate-y-1 inline-block bg-[#877EFF] text-lg font-medium rounded-full text-white px-6 py-3 cursor-pointer text-center"
        >
          <FiMail className="h-5 w-5 mr-2 inline-block" />
          Email Us
        </a>
      </div>
      <div className="col-span-1 lg:col-span-1 flex flex-col items-center">
        <div className="w-8 h-8 bg-[#877EFF] rounded-full flex items-center justify-center mb-2">
          <FiMessageCircle className="h-5 w-5 text-white" />
        </div>
        <div className="text-center">
          <p className="text-gray-100 font-semibold">Start a Chat</p>
          <p className="text-gray-300">Chat with our support team in real-time.</p>
        </div>
        <a
          href="mailto:furqankhalid563@gmail.com"
          className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-[#877EFF] text-lg font-medium rounded-full text-white px-6 py-3 cursor-pointer mt-4 text-center"
        >
          <FiMail className="h-5 w-5 mr-2 inline-block" />
          Start Chat
        </a>
      </div>
    </div>
  );
};

export default ContactUs;





  