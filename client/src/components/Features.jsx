import React from 'react';


import Therapies  from './Therapies'
import backNeckPain from '../assets/backNeckPain.png'; // Replace with the correct image path
import jointPain from '../assets/jointPain.png';
import weightLoss from '../assets/Weight-Loss.png';
import psoriasis from '../assets/Psoriasis.png';
import stressAnxiety from '../assets/stressAnxiety.png';
import parkinsons from '../assets/Parkinsons.png';
import migraine from '../assets/Migraine.png';
import sciatica from '../assets/Sciatica.png';
import paralysis from '../assets/Paralysis.png';

const treatments = [
  { name: "Back & Neck Pain", image: backNeckPain },
  { name: "Joint Pains", image: jointPain },
  { name: "Weight Loss", image: weightLoss },
  { name: "Psoriasis", image: psoriasis },
  { name: "Stress & Anxiety", image: stressAnxiety },
  { name: "Parkinson's", image: parkinsons },
  { name: "Migraine", image: migraine },
  { name: "Sciatica", image: sciatica },
  { name: "Paralysis", image: paralysis },
];

const Features = () => {
  return (
    <div className="bg-gray-100 p-16 md:p-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Our Best Ayurvedic Treatments</h2>
        <p className="text-lg text-gray-600">Boost Your Health with Ayurvedic Treatments. Experience the healing power of Ayurvedic treatments for better health.</p>
      </div>

      {/* Treatments Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 ">
        {treatments.map((treatment, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div className="relative w-60 h-40 md:h-48 overflow-hidden transition-transform transform hover:scale-105 p-9 bg-none">
              <img 
                src={treatment.image} 
                alt={treatment.name} 
                className="w-full h-full object-cover"
              />
              {/* Hover overlay effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-35 transition-opacity"></div>
            </div>
            <p className="text-center font-bold text-black-700 mt-2">{treatment.name}</p>
          </div>
        ))}
      </div>
      <Therapies />
    </div>
  );
};

export default Features;
