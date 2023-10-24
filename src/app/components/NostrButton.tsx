import React from 'react';
import Image from 'next/image';

const NostrButton = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <a
        href="https://primal.net/p/npub1ks2lwal5ewlzpsgvtsc82kteszpyvnjcnfypmzepw5kd3pvaxtaq9fpkex"
        className="relative inline-flex items-center justify-start pl-4 pr-16 py-4 rounded-full border-2 border-black text-black font-semibold w-72 h-16 group hover:text-purple-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="mx-auto text-center z-20">Nostr Link</span>
        <div className="bg-black flex items-center justify-center rounded-full w-16 h-16 absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
          <div className="w-16 h-16 relative">
            <Image src="/nostr.png" alt="Nostr Logo" className="absolute inset-0 object-cover w-full h-full rounded-full" width={48} height={48}/>
          </div>
        </div>
        <div className="before-effect absolute inset-0 w-full h-full bg-transparent transition-all duration-500 ease-out rounded-full group-hover:bg-black z-10"></div>
      </a>
    </div>
  );
};

export default NostrButton;
