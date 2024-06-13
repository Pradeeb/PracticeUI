import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPowerOff } from "react-icons/fa6";
import { APP_NAME } from './Config';

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const clearLocalStorageAndRedirect = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('path');
    navigate(`${APP_NAME}/`);
  };

  return (
    <header className="bg-white text-black p-1 shadow-md">
      <div className='flex items-center justify-between ml-5'>
        <div className='flex items-center'>
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none" >
            <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="flex items-center mr-5">
          <button 
            onClick={clearLocalStorageAndRedirect}
            className='rounded-full
             text-red-700
              bg-red-100 
               w-8 h-8 border
               border-red-200 
               m-2 p-2 hover:bg-red-600 hover:text-white'>
            <FaPowerOff />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
