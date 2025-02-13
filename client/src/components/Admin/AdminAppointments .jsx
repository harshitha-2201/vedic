// src/pages/AdminAppointments.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from backend when the component loads
    axios
      .get(
        `${process.env.REACT_APP_LOCALHOST}/api/appointments/list-appointments`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the appointments!", error);
      });
  }, []);

  const handleStatusChange = (appointmentId, status) => {
    // Update appointment status
    axios
      .put(
        `${process.env.REACT_APP_LOCALHOST}/api/appointments/list-appointments/update-status`,
        { appointmentId, status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json", // Ensure correct Content-Type
          },
        }
      )
      .then(() => {
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment._id === appointmentId
              ? { ...appointment, status }
              : appointment
          )
        );
      })
      .catch((error) => {
        console.error("Error updating appointment status", error);
      });
  };

  return (
    <div className="container mx-auto px-4 py-6 text-sm">
      <h1 className="text-2xl font-semibold mb-4">Appointments</h1>

      {/* Wrap the table in a div for horizontal scrolling on small screens */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Customer Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Booked Date</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td className="py-2 px-4 border-b">{appointment.name}</td>
                <td className="py-2 px-4 border-b">{appointment.email}</td>
                <td className="py-2 px-4 border-b">{appointment.phone}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(appointment.date).toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b">{appointment.status}</td>
                <td className="py-2 px-4 border-b">
                  {appointment.status === "Pending" ? (
                    <>
                      <button
                        className="bg-green-500 text-white py-1 px-4 rounded mr-2"
                        onClick={() =>
                          handleStatusChange(appointment._id, "Accepted")
                        }
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white py-1 px-4 rounded"
                        onClick={() =>
                          handleStatusChange(appointment._id, "Declined")
                        }
                      >
                        Decline
                      </button>
                    </>
                  ) : (
                    <span>{appointment.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAppointments;
