import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import elakizhi from '../assets/elakizhi.jpg'; 
import dhanyamlaDhara from '../assets/dhanyamlaDhara.jpg';
import PadaAbhyanga from '../assets/PadaAbhyanga.jpg';
import Pichu from '../assets/Pichu.jpg';
import SnehaPana from '../assets/SnehaPana.jpg';
import thalam from '../assets/Thalam.jpg';


const therapies = [
  { name: "Elakizhi", subHeading: "alleviate stress, improve mental clarity, and treat conditions like insomnia and migraines", image: elakizhi },
  { name: "Dhanyamla Dhara", subHeading: "reduce inflammation, detoxify the body, and alleviate muscle pain", image: dhanyamlaDhara },
  { name: "Padha Abhyanga", subHeading: "improve circulation, relieve stress, and enhance overall well-being", image: PadaAbhyanga },
  { name: "Pichu", subHeading: "alleviate pain, reduce inflammation, and promote healing in conditions like joint pain and muscle stiffness", image: Pichu },
  { name: "SnehaPana", subHeading: "improve digestion, enhance immunity, and support overall health", image: SnehaPana },
  { name: "Thalam", subHeading: "alleviate stress, improve mental clarity, and treat conditions like insomnia and migraines", image: thalam },
  // Add more therapies if needed
];

const Therapies = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="bg-gray-100  md:p-12 mt-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Our Best Ayurvedic Therapies</h2>
        <p className="text-lg text-gray-600">Treat yourself to a fresh start! Enjoy the best Kerala Ayurvedic Panchakarma Treatments to make your life better than ever.</p>
      </div>

      {/* Therapy Slider */}
      <Slider {...sliderSettings} className="mx-auto max-w-5xl">
        {therapies.map((therapy, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
              <img 
                src={therapy.image} 
                alt={therapy.name} 
                className="w-full h-50 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800">{therapy.name}</h3>
              <p className="text-sm text-gray-500">{therapy.subHeading}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Therapies;
