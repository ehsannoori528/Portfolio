// pages/contact.tsx
import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-center mb-8 max-w-xl">
        Feel free to get in touch with me for any projects, collaborations, or just a friendly hello!
      </p>

      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p>Email: ehsannoori528@gmail.com</p>
          <p>Phone: +93 796102782</p>
          <p>Location: Herat, Afghanistan</p>
        </div>
      </div>

    </div>
  );
}
