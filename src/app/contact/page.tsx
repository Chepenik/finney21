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
    <div className="bg-[#090429] min-h-screen flex flex-col items-center justify-center text-white p-4 md:p-8">
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-500">Your submission is being processed and you will be redirected once we confirm a successful submission.</h3>
          </div>
        </div>
      )}
      
      <h1 className="text-2xl md:text-3xl font-mono mb-12">Contact us Form v2.0</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col space-y-8 font-mono"
      >
        <div>
          <label className="text-xl font-mono">[NAME]</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}  
            className="w-full bg-transparent border-b border-white px-2 py-1 mt-2 font-mono text-white" 
            required
          />
        </div>
        
        <div>
          <label className="text-xl font-mono">[COUNTRY]</label>
          <input 
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full bg-transparent border-b border-white px-2 py-1 mt-2 font-mono text-white" 
            required
          />
        </div>

        <div>
          <label className="text-xl font-mono">Do you currently own bitcoin? [Y/N]</label>
          <input
            type="text"
            id="ownsBitcoin"
            name="ownsBitcoin"
            value={ownsBitcoin}
            onChange={(e) => setOwnsBitcoin(e.target.value)}
            className="w-full bg-transparent border-b border-white px-2 py-1 mt-2 font-mono text-white"
            required
          />
        </div>

        <div>
          <label className="text-xl font-mono">Are you willing to spend 12 hours studying Bitcoin? [Y/N]</label>
          <input
            type="text"
            id="studyHours"
            name="studyHours"
            value={studyHours}
            onChange={(e) => setStudyHours(e.target.value)}
            className="w-full bg-transparent border-b border-white px-2 py-1 mt-2 font-mono text-white"
            required
          />
        </div>

        <div>
          <label className="text-xl font-mono">[What do you need help with? [120 words max]</label>
          <textarea
            id="helpNeeded"
            name="helpNeeded"
            value={helpNeeded}
            onChange={(e) => setHelpNeeded(e.target.value)}
            className="w-full bg-transparent border-b border-white px-2 py-1 mt-2 font-mono text-white h-24"
            maxLength={120}
            required
          />
        </div>

        <button
          type="submit"
          className="text-[#FFA500] text-xl font-mono border-b-2 border-[#FFA500] hover:text-white hover:border-white transition-colors self-center mt-8"
        >
          SUBMIT
        </button>  
      </form>
    </div>
  );
};

export default ContactSection;