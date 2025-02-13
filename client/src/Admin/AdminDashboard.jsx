import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  // Fetch appointments when the component mounts
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No token found, please login again.');
          return;
        }

        const response = await axios.get('http://localhost:4000/api/admin/getappointments', {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to the request header
          },
        });

        setAppointments(response.data);
      } catch (err) {
        setError('Failed to load appointments');
      }
    };
    fetchAppointments();
  }, []);


  const handleStatusChange = async (appointmentId, status) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found, please login again.');
        return;
      }
  
      const response = await axios.post(
        'http://localhost:4000/api/admin/appoint/update-status',
        { appointmentId, status },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
  
      if (response.status === 200) {
        // Fetch updated appointments from the backend to refresh UI
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment._id === appointmentId ? { ...appointment, status } : appointment
          )
        );
      } else {
        setError('Failed to update appointment status');
      }
    } catch (err) {
      setError('Failed to update appointment status');
    }
  };
  
  
    
  

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      {error && <p className="text-red-600">{error}</p>}
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Client</th>
            <th className="px-4 py-2">Appointment Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td className="px-4 py-2">
                {appointment.clientId ? appointment.clientId.name : 'Unknown'}
              </td>
              <td className="px-4 py-2">
                {/* Display the formatted appointment date */}
                {appointment.date
                  ? new Date(appointment.date).toLocaleString()
                  : 'Invalid Date'}
              </td>
              <td className="px-4 py-2">{appointment.status}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleStatusChange(appointment._id, 'accepted')}
                  className="bg-green-500 text-white py-1 px-3 rounded"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleStatusChange(appointment._id, 'declined')}
                  className="bg-red-500 text-white py-1 px-3 rounded ml-2"
                >
                  Decline
                </button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
