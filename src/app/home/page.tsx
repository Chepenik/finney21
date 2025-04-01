"use client"

import { useEffect } from 'react';
import Link from 'next/link';
import { logOnce } from '../utils/logger';

export default function Home() {
  useEffect(() => {
    logOnce('Want a website like this? Visit https://x.com/ConorChepenik also remember there is no second best cryptocurrency');
  }, []);

  return (
    <div className="bg-[#090429] h-screen flex flex-col items-center justify-between text-center p-4 md:p-6 text-white overflow-hidden">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-5 md:space-y-7 pt-8 md:pt-10">
        <p className="text-lg md:text-2xl font-mono">
          The way we currently account for value is broken
        </p>

        <p className="text-lg md:text-2xl font-mono">
          Bitcoin (not crypto) fixes that
        </p>
        
        <p className="text-lg md:text-2xl font-mono">
          Bitcoin is better money
        </p>
        
        <p className="text-lg md:text-2xl font-mono">
          Bitcoin is savings technology that protects us from inflation
        </p>
        
        <p className="text-lg md:text-2xl font-mono max-w-3xl">
          We help individuals, families and companies study Bitcoin so they can adopt better money
        </p>
        
        <div className="flex flex-col space-y-5 md:space-y-7 mt-8 md:mt-10">
          <Link href="/contact" className="text-[#FFA500] text-lg md:text-2xl font-mono border-b-2 border-[#FFA500] hover:text-white hover:border-white transition-colors">
            CONTACT US
          </Link>
          <Link href="https://primal.net/p/nprofile1qqs2ml775lku5gz9yf3nuu2cqa7s2gxl7v376xg9fjpnxpu6txuzwdcwgpqxw" className="text-[#FFA500] text-lg md:text-2xl font-mono border-b-2 border-[#FFA500] hover:text-white hover:border-white transition-colors">
            LI₿RARY
          </Link>
        </div>
      </div>
      
      <img 
        src="https://i.nostr.build/xVS1jA4whkKCbo5M.png" 
        alt="The way we currently account for value is broken" 
        className="w-[120px] h-[80px] mb-4 md:mb-6"
        width={120}
        height={80}
      />
    </div>
  );
}
