import React from 'react';
import GoogleRating from '../assets/GoogleRating.png'

const Contect = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Make Your Appointment</h2>
        <p className="text-lg text-gray-600">
        Set A Reminder To Stay On Track And Avoid Missing It!
        </p>
      </div>

      <div className="bg-gray-100 p-8 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Booking Details Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Book Your Appointment</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-600 font-medium mb-1">Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Phone Number</label>
                <input type="tel" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Date</label>
                <input type="date" className="w-full p-3 border border-gray-300 rounded-md" />
              </div>
              <button type="submit" className="w-full bg-green-800 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-200">
                Book Now
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Also You Can Appointment</h3>
            <p className="text-gray-600 mb-8">
              Set a reminder to stay on track and avoid missing it!
            </p>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📞</span>
                <div>
                  <h4 className="font-semibold">Customer Service</h4>
                  <p>+91 84668 34566</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💬</span>
                <div>
                  <h4 className="font-semibold">WhatsApp Now</h4>
                  <p>+91 84668 4566</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl">📹</span>
                <div>
                  <h4 className="font-semibold">Subscribe Now</h4>
                  <p>Sai Vedic</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <h4 className="font-semibold">Google Rating</h4>
                  <p>Sai Vedic</p>
                </div>
              </div>
            </div>
            <img src = {GoogleRating} alt = ''/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contect;
