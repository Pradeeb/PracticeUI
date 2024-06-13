import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from './common/Config';
import { APP_NAME } from './common/Config';

export default function Login() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate(); // Hook for navigation

   const handleUsernameChange = (event) => {
      setUsername(event.target.value);
   };

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (!username || !password) {
         setError('Username and password are required.');
         return;
      }

      const data = {
         username: username,
         password: password
      };

      setLoading(true);
      setError('');

      try {
         const response = await axios.post(API_URL + '/login', data);

         // Log the entire response to understand its structure
         console.log('Full response:', response);

         // Extract and log the specific properties
         const jwt = response.data?.data?.jwt;
         const loging = response.data?.data?.loging;
         const path = response.data?.data?.path;

         console.log('jwt:', jwt);       // This should print the JWT
         console.log('loging:', loging); // This should print the login message
         console.log('path:', path);

         localStorage.setItem('token', jwt); // token stored in local storage.
         localStorage.setItem('path', path);

         if (jwt !== null && response.data.statusCode === 200 && loging !== 'Please check credentials') {
            // Handle successful login
            console.log('Login successful:', response.data);
            navigate(`${APP_NAME}/dashboard`); // Redirect to dashboard
         } else {
            setError(loging);
         }
      } catch (error) {
         console.error('Error:', error);
         setError('An error occurred. Please try again later.');
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className='logincontainer'>
         <div className='heading'>
            <h1 className="text-3xl font-bold">Epitome Sales</h1>
         </div>
         <div className='formdiv'>
            <p>Sign in to start your session</p>
            {error && <h4 className="error-message">{error}</h4>}
            <form onSubmit={handleSubmit}>
               <div className="input-container border-2 border-blue-100 rounded-lg">
                  <FontAwesomeIcon icon={faUser} className="icon" />
                  <input className='rounded-lg'
                     type="text"
                     placeholder='Username'
                     value={username}
                     onChange={handleUsernameChange}
                  />
               </div>
               <div className="input-container border-2 border-blue-100 rounded-lg">
                  <FontAwesomeIcon icon={faLock} className="icon" />
                  <input className='rounded-lg'
                     type="password"
                     placeholder='Password'
                     value={password}
                     onChange={handlePasswordChange}
                  />
               </div>
               <button type="submit" disabled={loading} className='bg-red-500 p-1.5 mb-2 w-24 rounded-lg'>
                  {loading ? (
                     <FaSpinner className="spinner text-white font-bold m-1 mx-5" />
                  ) : (
                     'Sign in'
                  )}
               </button>
            </form>
         </div>
      </div>
   );
}
