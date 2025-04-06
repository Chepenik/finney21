"use client"

import React, { useState, useEffect, useRef } from 'react';

const ContactSection: React.FC = () => {
  const hasLogged = useRef(false);

  useEffect(() => {
    if(!hasLogged.current){
      console.log('Want a website like this? Hit my DMS @ https://x.com/ConorChepenik')
      hasLogged.current = true;
    }
  }, [])

  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [ownsBitcoin, setOwnsBitcoin] = useState('');
  const [studyHours, setStudyHours] = useState('');
  const [helpNeeded, setHelpNeeded] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = {
      name,
      country,
      ownsBitcoin,
      studyHours,
      helpNeeded
    };
  
    try {
      const response = await fetch("https://formsubmit.co/ajax/FinneyFarm@proton.me", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
  
      if (data) {
        console.log("Submission successful");
        window.location.href = '/thank-you';  
      }
    } catch (error) {
      console.log(error);
      window.location.href = '/error';
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="bg-[#0e132b] min-h-screen flex flex-col items-center justify-center text-white p-2">
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-2">
            <h3 className="text-sm font-semibold text-gray-500">Your submission is being processed and you will be redirected once we confirm a successful submission.</h3>
          </div>
        </div>
      )}
      
      <h1 className="text-xl font-mono mb-2">Contact us Form v2.0</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs flex flex-col space-y-1.5 font-mono"
      >
        <div>
          <label className="text-base font-mono">[NAME]</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}  
            className="w-full bg-transparent border-b border-white py-0.5 text-base font-mono text-white" 
            required
          />
        </div>
        
        <div>
          <label className="text-base font-mono">[COUNTRY]</label>
          <input 
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full bg-transparent border-b border-white py-0.5 text-base font-mono text-white" 
            required
          />
        </div>

        <div>
          <label className="text-base font-mono">Do you currently own bitcoin? [Y/N]</label>
          <input
            type="text"
            id="ownsBitcoin"
            name="ownsBitcoin"
            value={ownsBitcoin}
            onChange={(e) => setOwnsBitcoin(e.target.value)}
            className="w-full bg-transparent border-b border-white py-0.5 text-base font-mono text-white"
            required
          />
        </div>

        <div>
          <label className="text-base font-mono">Are you willing to spend 12 hours studying Bitcoin? [Y/N]</label>
          <input
            type="text"
            id="studyHours"
            name="studyHours"
            value={studyHours}
            onChange={(e) => setStudyHours(e.target.value)}
            className="w-full bg-transparent border-b border-white py-0.5 text-base font-mono text-white"
            required
          />
        </div>

        <div>
          <label className="text-base font-mono">[What do you need help with? [120 words max]</label>
          <textarea
            id="helpNeeded"
            name="helpNeeded"
            value={helpNeeded}
            onChange={(e) => setHelpNeeded(e.target.value)}
            className="w-full bg-transparent border-b border-white py-0.5 text-base font-mono text-white h-10"
            maxLength={120}
            required
          />
        </div>

        <button
          type="submit"
          className="text-[#F7931A] text-base font-mono border-b border-[#F7931A] hover:text-white hover:border-white transition-colors self-center mt-2"
        >
          SUBMIT
        </button>  
      </form>
    </div>
  );
}

export default ContactSection;