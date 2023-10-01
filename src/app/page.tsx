"use client"

import Link from 'next/link';
import Image from 'next/image';
import finny from '../../public/F21Primarylogo.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function Home() {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center text-center p-8">
      <div className="mb-4">
        <Image  
          alt="Logo"
          src={finny}
          width={300}
          height={300} 
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
