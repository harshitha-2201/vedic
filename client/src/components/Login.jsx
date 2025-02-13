<<<<<<< HEAD
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Correct import for jwt-decode
=======
// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

>>>>>>> 08b6abac590849964e465072a837d9cd92611df6

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
      const response = await axios.post('http://localhost:4000/api/auth/login', { email, password });
      console.log(response.data);
      setError('');

      const token = response.data.token;
      localStorage.setItem('token', token);

      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;

      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else { 
        navigate('/book-appointment');
      }
    } catch (err) {
      console.error(err);
=======

      const response = await axios.post(`${process.env.REACT_APP_LOCALHOST}/api/auth/login`, { email, password });
      console.log(response.data);
    
      setError('');
      
      const token = response.data.token;
      localStorage.setItem('token', token);
  
      // Decode the token and check the role
      const decodedToken = jwtDecode(token); // Decode the token
      const role = decodedToken.role; // Assuming 'role' is in the payload
  
      // Navigate based on the user's role
      if (role === 'admin') {
        navigate('/list-appointment'); // Admin dashboard route
      } else {
        navigate('/book-appointment'); // User dashboard route
      }
    } catch (err) {
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-green-800">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-green-800 rounded hover:bg-green-700"
          >
            Login
          </button>
          {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
