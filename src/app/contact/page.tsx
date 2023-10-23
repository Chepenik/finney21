"use client"

import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [ownsBitcoin, setOwnsBitcoin] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [budget, setBudget] = useState('');
  const [commitStudy, setCommitStudy] = useState('');
  const [emailOrKey, setEmailOrKey] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      country,
      ownsBitcoin,
      inquiryType,
      budget,
      commitStudy,
      emailOrKey
    };

    // Submit form data to FormSubmit API
    fetch("https://formsubmit.co/ajax/btcdiplomat1@tutanota.com", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log("Submission successful");
      setShowModal(true);
    })
    .catch(error => console.log(error));

    // Reset form fields
    setName('');
    setCountry('');
    setOwnsBitcoin('');
    setInquiryType('');
    setBudget('');
    setCommitStudy('');
    setEmailOrKey('');
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-062343 text-white">
        <h2 className="text-4xl text-black font-semibold mt-4 mb-4">Contact Us</h2>
  
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto flex flex-col space-y-4"  
        >
        
          <div>
            <label className="text-lg text-black font-medium">What’s your name?</label>
            
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}  
              className="w-full border rounded px-4 py-2 text-black" 
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
              className="w-full border rounded px-4 py-2 text-black" 
              required
            />
          </div>
  
          <div>
            <label className="text-lg text-black font-medium">Do you currently own bitcoin?</label>
  
            <select
              value={ownsBitcoin}
              onChange={(e) => setOwnsBitcoin(e.target.value)}  
              className="w-full border rounded px-4 py-2 text-black"
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
              className="w-full border rounded px-4 py-2 text-black"
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
              className="w-full border rounded px-4 py-2 text-black"
            />
          </div>
  
          <div>
            <label className="text-lg text-black font-medium">Are you ready to commit 1 weekly hour to studying Bitcoin?</label>
  
            <select
              value={commitStudy}
              onChange={(e) => setCommitStudy(e.target.value)}
              className="w-full border rounded px-4 py-2 text-black"  
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
              className="w-full border rounded px-4 py-2 text-black"
              required   
            />
          </div>
  
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-6 rounded-full"  
          >
            Submit
          </button>
        
        </form>
  
      </section>

    {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-500">Your info has been submitted. We will be in touch!</h3>
            <button 
              onClick={() => setShowModal(false)}
              className="mt-4 bg-grey-500 hover:bg-black text-white py-2 px-4 rounded-full focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;