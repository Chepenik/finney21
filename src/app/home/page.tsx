"use client"

import Navbar from '../components/navbar';
import NostrButton from '../components/NostrButton';
import ContactButton from '../components/contactbutton';
import { useEffect, useRef } from 'react';

export default function Home() {
  const hasLogged = useRef(false);
  useEffect(() => {
    if(!hasLogged.current){
      console.log('Want a website like this? Visit https://magicwebstore.xyz/index.html?pubkey=02b1a6c208420d3eb5a625aa8c79689e1dd4ea94f82286d06e1df7a05e2c3a482f&relays=%5B%22wss://nostrue.com%22,%22wss://relayable.org%22,%22wss://nostr.oxtr.dev%22%5D')
      hasLogged.current = true;
    }
  }, [])
  return (
    <div className="bg-gray-100 h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center text-center p-8 pt-32">
      <Navbar />
      <div className="mt-12 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:items-center"> 
        <p className="text-4xl mb-8">
          Bitcoin is portfolio insurance against systemic risks  
        </p>
        <p className="text-2xl mb-8">
          We help individuals, companies and family offices understand, acquire and custody bitcoin
        </p>
        <ContactButton />
        <NostrButton />
      </div>
    </div>
  );
}
