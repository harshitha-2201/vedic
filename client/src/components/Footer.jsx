import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div >
          <h3 className="text-2xl font-semibold text-green-500 mb-4">Sai Vedic Ayurveda Hospital</h3>
          <p className="text-gray-300">
            If you’re looking for a world-class ayurvedic hospital that practices ancient Ayurvedic medicine, look no further than Sai Ayush Ayurveda Hospital. We’re one of the best Ayurvedic clinics in Hyderabad’s leading Ayurvedic hospitals, excelling in traditional medicine to help you with all your health problems.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-green-500 mb-4">Contact Us</h3>
          <p className="text-gray-300">📧 info@saivedicayurveda.com</p>
          <p className="text-gray-300">📞 84668 82366</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-green-500 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a  className="hover:text-green-300">About the Company</a></li>
            <li><a  className="hover:text-green-300">Ayurvedic Therapy</a></li>
            <li><a className="hover:text-green-300">Treatments</a></li>
            <li><a  className="hover:text-green-300">Special Offers</a></li>
            <li><a  className="hover:text-green-300">Our Packages</a></li>
            <li><a  className="hover:text-green-300">Contact Us</a></li>
            <li><a  className="hover:text-green-300">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-green-500 mb-4">Follow Us On</h3>
        <div className="flex justify-center space-x-6 text-gray-300">
          {/* Add icons here */}
          <a  className="hover:text-green-300">🌐 Facebook</a>
          <a  className="hover:text-green-300">🌐 Twitter</a>
          <a  className="hover:text-green-300">🌐 Instagram</a>
          <a  className="hover:text-green-300">🌐 LinkedIn</a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Sai Vedic Ayurveda Hospital. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
