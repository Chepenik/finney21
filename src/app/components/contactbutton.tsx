import React from 'react';

const ContactButton = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <a
        href="/contact"
        className="relative inline-flex items-center justify-start pl-4 pr-16 py-4 rounded-full border-2 border-gray-500 text-gray-500 font-semibold w-72 h-16 group hover:text-white"
        rel="noopener noreferrer"
      >
        <span className="mx-auto text-center z-20">Contact Us</span>
        <div className="bg-gray-500 flex items-center justify-center rounded-full w-16 h-16 absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
          <span className="text-4xl text-white">&#x20BF;</span>
        </div>
        <div className="before-effect absolute inset-0 w-full h-full bg-transparent transition-all duration-500 ease-out rounded-full group-hover:bg-gray-500 z-10"></div>
      </a>
    </div>
  );
};

export default ContactButton;
