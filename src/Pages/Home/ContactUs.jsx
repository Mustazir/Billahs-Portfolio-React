import React from "react";
import { FaPhone, FaEnvelope, FaUser, FaMapMarkerAlt, FaFacebook, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="Contact" className="text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Let's <span className="text-green-400">Connect</span> &
            <span className="text-green-400"> Collaborate</span>
          </h2>
          <p className="mb-6">Feel Free to Contact Us</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhone className="text-xl text-green-400" />
              <span>+008 01629270683</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-green-400" />
              <span>mustazirr@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-xl text-green-400" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://www.facebook.com/mustazir.billahms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-3xl hover:text-blue-700 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/mustazirr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 text-3xl hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              className="w-full p-3 rounded bg-white text-black border border-transparent focus:outline-none focus:border-green-400"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="w-full p-3 rounded bg-white text-black border border-transparent focus:outline-none focus:border-green-400"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="email"
              placeholder="Email *"
              className="w-full p-3 rounded bg-white text-black border border-transparent focus:outline-none focus:border-green-400"
            />
            <input
              type="text"
              placeholder="Phone Number *"
              className="w-full p-3 rounded bg-white text-black border border-transparent focus:outline-none focus:border-green-400"
            />
          </div>
          <input
            type="text"
            placeholder="Subject *"
            className="w-full p-3 mt-4 rounded bg-white text-black border border-transparent focus:outline-none focus:border-green-400"
          />
          <textarea
            placeholder="Message *"
            className="w-full p-3 mt-4 rounded bg-white text-black border border-transparent focus:outline-none focus:border-green-400 h-32"
          ></textarea>
          <button className="mt-4 bg-blue-800 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-500 transition">
            ➕ Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
