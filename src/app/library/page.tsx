"use client"

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Library() {
  const hasLogged = useRef(false);
  useEffect(() => {
    if(!hasLogged.current){
      console.log('Want a website like this? Hit my DMS @ https://x.com/ConorChepenik')
      hasLogged.current = true;
    }
  }, [])
  
  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalResource",
      "name": "Bitcoin Study Resources by Finney21",
      "description": "Curated Bitcoin resources to help individuals and companies understand and adopt Bitcoin.",
      "provider": {
        "@type": "Organization",
        "name": "Finney21",
        "url": "https://finney21.com"
      },
      "author": {
        "@type": "Person",
        "name": "NobodyCaribou",
        "url": "https://x.com/NobodyCaribou"
      },
      "about": {
        "@type": "Thing",
        "name": "Bitcoin"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Bitcoin learners"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  return (
    <>
      <Head>
        <title>Bitcoin Study Resources | Finney21 Library</title>
        <meta name="description" content="Curated Bitcoin study resources to help you understand Bitcoin fundamentals, economics, and practical applications. Fix the money, fix the world." />
      </Head>
      
      <div className="bg-[#090429] min-h-screen flex flex-col items-center text-center p-4 md:p-8 text-white">
        <h1 className="text-2xl md:text-4xl font-mono mt-8 md:mt-12 mb-8">
          Bitcoin Study Resources
        </h1>
        
        <p className="text-lg md:text-xl font-mono mb-8 max-w-3xl">
          Curated by <a href="https://x.com/NobodyCaribou" target="_blank" rel="noopener noreferrer" className="text-[#FFA500] hover:underline">@NobodyCaribou</a>. We believe in helping others adopt Bitcoin because if you fix the money, you fix the world.
        </p>
        
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <ResourceSection 
            title="Beginner Resources" 
            resources={[
              { title: "Bitcoin Whitepaper", url: "https://bitcoin.org/bitcoin.pdf" },
              { title: "The Bitcoin Standard (Book)", url: "https://saifedean.com/thebitcoinstandard/" },
              { title: "Why Bitcoin Matters", url: "https://primal.net/p/nprofile1qqs2ml775lku5gz9yf3nuu2cqa7s2gxl7v376xg9fjpnxpu6txuzwdcwgpqxw" },
              { title: "Bitcoin for Beginners Video Series", url: "https://www.youtube.com/playlist?list=PLhWIQKZKupCawKJQBAEJc-Y4I30HQ6KBH" }
            ]} 
          />
          
          <ResourceSection 
            title="Technical Understanding" 
            resources={[
              { title: "Mastering Bitcoin (Book)", url: "https://github.com/bitcoinbook/bitcoinbook" },
              { title: "Bitcoin Developer Documentation", url: "https://developer.bitcoin.org/" },
              { title: "How Does Bitcoin Work?", url: "https://primal.net/p/nprofile1qqs2ml775lku5gz9yf3nuu2cqa7s2gxl7v376xg9fjpnxpu6txuzwdcwgpqxw" }
            ]} 
          />
          
          <ResourceSection 
            title="Economics & Philosophy" 
            resources={[
              { title: "The Bullish Case for Bitcoin", url: "https://vijayboyapati.medium.com/the-bullish-case-for-bitcoin-6ecc8bdecc1" },
              { title: "Bitcoin: Sound Money for the Digital Age", url: "https://primal.net/p/nprofile1qqs2ml775lku5gz9yf3nuu2cqa7s2gxl7v376xg9fjpnxpu6txuzwdcwgpqxw" },
              { title: "Bitcoin and Austrian Economics", url: "https://nakamotoinstitute.org/mempool/bitcoin-austrian-economics/" }
            ]} 
          />
          
          <ResourceSection 
            title="Security & Self-Custody" 
            resources={[
              { title: "Bitcoin Security Best Practices", url: "https://primal.net/p/nprofile1qqs2ml775lku5gz9yf3nuu2cqa7s2gxl7v376xg9fjpnxpu6txuzwdcwgpqxw" },
              { title: "Hardware Wallet Guide", url: "https://bitcoin.org/en/secure-your-wallet" },
              { title: "Multisignature Setup Tutorial", url: "https://primal.net/p/nprofile1qqs2ml775lku5gz9yf3nuu2cqa7s2gxl7v376xg9fjpnxpu6txuzwdcwgpqxw" }
            ]} 
          />
        </div>
        
        <div className="mt-12 md:mt-16">
          <Link href="/contact" className="text-[#FFA500] text-xl md:text-2xl font-mono border-b-2 border-[#FFA500] hover:text-white hover:border-white transition-colors">
            CONTACT US FOR PERSONALIZED GUIDANCE
          </Link>
        </div>
        
        <div className="mt-auto mb-8 border border-white p-3 md:p-4 mt-16">
          <p className="text-lg md:text-xl font-mono">Finney21</p>
          <p className="text-xs font-mono">est.801408</p>
        </div>
      </div>
    </>
  );
}

interface Resource {
  title: string;
  url: string;
}

interface ResourceSectionProps {
  title: string;
  resources: Resource[];
}

function ResourceSection({ title, resources }: ResourceSectionProps) {
  return (
    <div className="bg-[#0c062e] p-6 rounded-lg">
      <h2 className="text-xl font-mono mb-4 text-[#FFA500]">{title}</h2>
      <ul className="space-y-3">
        {resources.map((resource, index) => (
          <li key={index}>
            <a 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFA500] transition-colors font-mono text-left block"
            >
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
} 