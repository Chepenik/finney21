"use client"

import Link from 'next/link';
import Image from 'next/image';
import finny from '../../public/F21Primarylogo.png';
import { useState, useEffect } from 'react';
import { logOnce } from './utils/logger';

export default function Home() {
  useEffect(() => {
    logOnce('Want a website like this? Visit https://x.com/ConorChepenik also remember there is no second best cryptocurrency');
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center text-center p-8">
      <div className="mb-4">
        <Image  
          alt="Logo"
          src={finny}
          width={600}
          height={600} 
        />
      </div>

      <Link href="/home">
        <button 
          className={`enter-button ${isHovered ? 'hover-effect' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Enter
        </button>
      </Link>
    </div>
  );
}
