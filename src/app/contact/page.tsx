"use client"

import React, { useState, useEffect, useRef } from 'react';

const ContactSection: React.FC = () => {
  const hasLogged = useRef(false);

  useEffect(() => {
    if(!hasLogged.current){
      console.log('Want a website like this? Visit https://magicwebstore.xyz/index.html?pubkey=02b1a6c208420d3eb5a625aa8c79689e1dd4ea94f82286d06e1df7a05e2c3a482f&relays=%5B%22wss://nostrue.com%22,%22wss://relayable.org%22,%22wss://nostr.oxtr.dev%22%5D')
      hasLogged.current = true;
    }
  }, [])

  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [ownsBitcoin, setOwnsBitcoin] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [budget, setBudget] = useState('');
  const [commitStudy, setCommitStudy] = useState('');
  const [emailOrKey, setEmailOrKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = {
      name,
      country,
      ownsBitcoin,
      inquiryType,
      budget,
      commitStudy,
      emailOrKey
    };
  
    try {
      const response = await fetch("https://formsubmit.co/ajax/btcdiplomat1@tutanota.com", {
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
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-500">Your submission is being processed and you will be redirected once we confirm a successful submission.</h3>
          </div>
        </div>
      )}
      <section className="px-4 mt-4 mb-4 mr-4 ml-4 flex flex-col rounded-2xl items-center justify-center bg-gray-700 text-white md:mt-10 md:px-0 md:max-w-lg md:mx-auto">
        
        <div className="w-full">
          <p className="text-base sm:text-lg m-4 text-center">
            Finney21 is a full service Bitcoin consulting firm  
          </p>
        </div>

        <div className="w-full">
          <p className="text-base sm:text-lg m-4 text-center">
            We&apos;re a hardcore team of specialists on a mission to accelerate the transition to scarce money
          </p>  
        </div>

        <div className="w-full">
          <p className="text-base sm:text-lg m-4 text-center">
            We do that by helping individuals, companies and family offices understand, acquire and custody bitcoin
          </p>
        </div>

        <div className="w-full">
          <p className="text-base sm:text-lg m-4 text-center">
            To connect with our team, begin by answering these 7 questions:
          </p>
        </div>
        
      </section>

      <section className="px-4 mb-4 flex flex-col items-center justify-center min-h-screen bg-062343 text-white">
  
        <form
          onSubmit={handleSubmit}
          className="max-w-md sm:max-w-lg mx-auto w-full flex flex-col space-y-6 sm:space-y-4"
          >
        
          <div>
            <label className="text-lg text-black font-medium">What’s your name?</label>
            
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}  
              className="w-full border rounded px-4 py-2 text-black bg-gray-300" 
              required
            />
          </div>
          
          <div>
            <label className="text-lg text-black font-medium">What country do you live in?</label>
  
            <input 
              type="text"
              id="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border rounded px-4 py-2 text-black bg-gray-300" 
              required
            />
          </div>
  
          <div>
            <label className="text-lg text-black font-medium">Do you currently own bitcoin?</label>
  
            <select
              value={ownsBitcoin}
              onChange={(e) => setOwnsBitcoin(e.target.value)}  
              className="w-full border rounded px-4 py-2 text-black bg-gray-200"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
  
          <div>
            <label className="text-lg text-black font-medium">Is your inquiry personal or business related?</label>
          
            <select
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-full border rounded px-4 py-2 text-black bg-gray-200"
            >
              <option value="">Select an option</option>
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>
          </div>
  
          <div>
            <label className="text-lg text-black font-medium">Do you have a consulting budget in mind? If so, how much? (Sats or $usd)</label>
  
            <input
              type="text"
              id="budget"
              name="budget"  
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full border rounded px-4 py-2 text-black bg-gray-300"
            />
          </div>
  
          <div>
            <label className="text-lg text-black font-medium">Are you ready to commit 1 weekly hour to studying Bitcoin?</label>
  
            <select
              value={commitStudy}
              onChange={(e) => setCommitStudy(e.target.value)}
              className="w-full border rounded px-4 py-2 text-black bg-gray-200"  
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
  
          <div>
            <label className="text-lg text-black font-medium">What is your email or nostr public key?</label>
  
            <input
              type="text"
              id="emailOrKey"
              name="emailOrKey"
              value={emailOrKey}
              onChange={(e) => setEmailOrKey(e.target.value)}
              className="w-full border rounded px-4 py-2 text-black bg-gray-300"
              required   
            />
          </div>
  
            <button
            type="submit"
            className="w-1/2 mx-auto mb-8 bg-gray-700 hover:bg-black text-white py-2 px-6 rounded-full"
          >
            Submit
          </button>  
        </form>
      </section>
    </>
  );
};

export default ContactSection;