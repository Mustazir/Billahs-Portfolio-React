import React from "react";

const About = () => {
  return (
    <div id="About" className="max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row items-center bg-white p-10 rounded-xl shadow-lg">
        <div className="md:w-2/3">
          <h2 className="text-lg font-semibold text-gray-600">About Me</h2>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Who is <span className="text-blue-800">S.M.Mustazir Billah</span>
          </h1>
          <p className="text-gray-600 mt-4">
          Skilled in React, HTML, CSS, Node.js, Express.js, and MongoDB, with a strong background in Adobe Illustrator, Photoshop, After Effects, and Premiere Pro. Specializing in logo design, illustration, and web development. Passionate about blending creativity with technology to build dynamic digital experiences. Always eager to learn and innovate.
          </p>
          <div className="flex items-center mt-6 space-x-8">
            <div className="text-lg font-bold text-gray-900">200+</div>
            <span className="text-gray-500">Projects Completed</span>
            <div className="text-lg font-bold text-gray-900">30+</div>
            <span className="text-gray-500">Industry Covered</span>
          </div>
          <button className="mb-9 md:mb-5 mt-6 px-6 py-3 bg-blue-800 text-white font-semibold rounded-full hover:bg-green-600">
          <a
            href="/public/Billah's Resume.jpg"
            download="Billah's Resume.jpg"
            
          >
            Download CV
          </a>
          </button>
        </div>
        <div className="md:w-1/3 flex justify-end">
          <div className="bg-blue-800 text-white p-6 rounded-lg text-center w-32 h-32 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">5</h1>
            <p className="text-lg">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
