"use client"

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logOnce } from '../utils/logger';

export default function Home() {
  useEffect(() => {
    logOnce('Want a website like this? Visit https://x.com/ConorChepenik also remember there is no second best cryptocurrency');
  }, []);

  return (
    <div className="bg-[#0e132b] min-h-screen flex flex-col items-center justify-between text-center p-4 sm:p-6 text-white overflow-hidden">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center flex-grow py-6 sm:py-8">
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <p className="text-base sm:text-lg md:text-2xl font-mono">
            The way we currently account for value is broken
          </p>

          <p className="text-base sm:text-lg md:text-2xl font-mono">
            Bitcoin (not crypto) fixes that
          </p>
          
          <p className="text-base sm:text-lg md:text-2xl font-mono">
            Bitcoin is better money
          </p>
          
          <p className="text-base sm:text-lg md:text-2xl font-mono">
            Bitcoin is savings technology that protects us from inflation
          </p>
          
          <p className="text-base sm:text-lg md:text-2xl font-mono max-w-3xl">
            We help individuals, families and companies study Bitcoin so they can adopt better money
          </p>
        </div>
        
        <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6 mt-6 sm:mt-8 md:mt-10">
          <Link href="/contact" className="text-[#F7931A] text-base sm:text-lg md:text-2xl font-mono border-b-2 border-[#F7931A] hover:text-white hover:border-white transition-colors">
            CONTACT US
          </Link>
          <Link href="https://primal.net/p/nprofile1qqs2ml775lku5gz9yf3nuu2cqa7s2gxl7v376xg9fjpnxpu6txuzwdcwgpqxw" className="text-[#F7931A] text-base sm:text-lg md:text-2xl font-mono border-b-2 border-[#F7931A] hover:text-white hover:border-white transition-colors">
            LI₿RARY
          </Link>
        </div>
      </div>
      
      <div className="mt-auto mb-4 sm:mb-6">
        <Image 
          src="/finney21newlogo.png"
          alt="Finney21 Logo"
          width={160}
          height={64}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px]"
          priority
        />
      </div>
    </div>
  );
}
