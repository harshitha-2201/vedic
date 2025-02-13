import React, { useState } from 'react';
import axios from 'axios';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      console.log(localStorage.getItem('token'));
<<<<<<< HEAD
      const res = await axios.post(
        'http://localhost:4000/api/appointments/appointment',
=======

      const res = await axios.post(`${process.env.REACT_APP_LOCALHOST}/api/appointments/appointment`,
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
        formData,{ 
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.trim()}`
        }
<<<<<<< HEAD
    });
      alert(res.data.message);
    }catch (error) {
      console.error('Error booking appointment:', error.response ? error.response.data : error);
      alert(error.response?.data?.message || 'Error booking appointment');
    }
=======
        

    });
      alert(res.data.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
      });



    } catch (error) {
      alert('Error booking appointment');
    }

>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-2xl font-semibold text-green-800 mb-6">Book Your Appointment</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-600 font-medium mb-1">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your name" />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your email" />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your phone number" />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full bg-green-800 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-200">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
