"use client"

import Link from 'next/link';
import Image from 'next/image';
import finny from '../../public/F21Primarylogo.png';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const hasLogged = useRef(false);

  useEffect(() => {
    if (!hasLogged.current) {
      console.log('Want a website like this? Visit https://magicwebstore.xyz/index.html?pubkey=02b1a6c208420d3eb5a625aa8c79689e1dd4ea94f82286d06e1df7a05e2c3a482f&relays=%5B%22wss://nostrue.com%22,%22wss://relayable.org%22,%22wss://nostr.oxtr.dev%22%5D');
      hasLogged.current = true;
    }
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
