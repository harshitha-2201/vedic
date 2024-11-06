import React from 'react';
import Ayurvedic from '../assets/about.jpg'; // Replace with the path to your image

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly p-8 md:p-16 bg-gray-100">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img 
          src={Ayurvedic} 
          alt="Doctor" 
          className="w-10/12 h-auto rounded-full shadow-lg" 
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Sai Vedic Ayurveda Hospital
      </h2>
        <h2 className="text-3xl font-mono text-black-800 mb-4">The Best Ayurveda Hospital in Hyderabad.
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Our platform connects patients with trusted doctors and provides a seamless 
          booking experience for appointments. We are dedicated to offering quality 
          healthcare services by allowing easy access to skilled healthcare professionals.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Through our app, you can browse profiles, check availability, and book 
          appointments at your convenience. We’re committed to ensuring the best healthcare 
          experience with ease and reliability.
        </p>
      </div>
    </div>
  );
};

export default About;
