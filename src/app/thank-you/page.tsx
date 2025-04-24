"use client"

import Image from "next/image";
import { useEffect, useRef } from 'react';

const ThankYou: React.FC = () => {
  const hasLogged = useRef(false)

  useEffect(() => {
    if (!hasLogged.current) {
      console.log('Want a website like this? Hit my DMS @ https://x.com/ConorChepenik');
      hasLogged.current = true;
    }
  }, []);

  return (
    <div className="bg-[#0e132b] min-h-screen flex flex-col items-center justify-center text-white p-6 md:p-10 font-mono">
      <h1 className="text-2xl md:text-4xl mb-12 text-center">
        Thank you for getting in touch!
      </h1>
      
      <div className="mb-12">
        <div className="rounded-[90px] rounded-bl-none overflow-hidden">
          <Image 
            src="/thankyou.png"
            alt="Thank You Bitcoin Heart"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
      
      <p className="text-xl md:text-2xl text-center max-w-2xl">
        Someone from our team will be in touch if you we are good fit to work together
      </p>
    </div>
  );
};

export default ThankYou;
