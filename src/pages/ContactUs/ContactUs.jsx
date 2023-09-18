// import React from 'react';
import {  Colors } from '../../constants/colors'; 
const ContactUs = () => {
  return (
    <div className="bg-gray-400 py-16">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4 text-center" style={{color:Colors.titleText}}>যোগাযোগ করুন</h1>
        <div className="text-center">
           <p className="text-gray-700 text-lg">আপনার যে কোন জিজ্ঞাসা, নিম্নোক্ত ফর্মে পূরণ করে আমাদের কাছে পাঠিয়ে দিন। </p>
            <p className="text-gray-700 text-lg">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো ইন শা আল্লাহ। </p>
        </div>
        <div className="max-w-lg mx-auto shadow px-8 py-8 rounded">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">আপনার নাম <span className="text-red-600">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="মো ঃ রাহাত"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">আপনার ইমেইল <span className="text-red-600">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="rahat.cse5.bu@gmail.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">আপনার মোবাইল নাম্বার <span className="text-red-600">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="01793278360"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bio" className="block text-gray-700 font-semibold mb-2">আপনার বায়োডাটা নং</label>
              <input
                type="text"
                id="bio"
                name="bio"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="PNCM-2102"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">আপনি যা লিখে চান <span className="text-red-600">*</span></label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder=" আমি একাউন্ট ডিলিট করতে পারতেছি না "
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                 style={{
            background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
          }}>
               মেসেজ পাঠান
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
