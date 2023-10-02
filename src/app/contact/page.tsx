"use client"

import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Submit form data to FormSubmit API
    fetch("https://formsubmit.co/ajax/nickstl.tfc@gmail.com", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email,
        phone,
        message  
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

    // Reset form fields
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-062343 text-white">
      <h2 className="text-4xl text-black font-semibold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="email" className="text-lg text-black mb-2">Email:</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          className="border rounded-lg text-black px-4 py-2 w-64 focus:outline-none focus:border-orange-500" 
          placeholder="Enter your email" 
          required
        />

        <label htmlFor="phone" className="text-lg text-black mb-2 mt-4">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border rounded-lg text-black px-4 py-2 w-64 focus:outline-none focus:border-orange-500"
          placeholder="Enter your phone"
          required
        />

        <label htmlFor="message" className="text-lg text-black mb-2 mt-4">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded-lg text-black px-4 py-2 w-64 h-24 resize-none focus:outline-none focus:border-orange-500"
          placeholder="Enter your message"
          required
        ></textarea>

        <button type="submit" className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full focus:outline-none">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
