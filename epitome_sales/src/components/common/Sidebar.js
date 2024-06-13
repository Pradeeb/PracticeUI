import React from "react";
import { FaTachometerAlt, FaUser, FaDownload } from 'react-icons/fa';
import logo from './logo.png';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { APP_NAME } from "./Config";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`bg-stone-800 text-white w-64 h-full p-4 fixed z-20 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out border-r-4 border-sky-300`}>
      
      <div className='flex items-center mb-5 border-b-2 border-orange-500 '>
          <img alt="logo" src={logo} className='h-16' />
          <h1 className="text-lg font-bold text-red-600">Epitome <span className='text-white '>Sales</span></h1>
      </div>
      
      <ul>
        <li>
          {/* Use Link instead of <a> */}
          <Link to={`${APP_NAME}/dashboard`} className="flex items-center block p-2 hover:bg-stone-600 rounded-md">
            <FaTachometerAlt className="mr-2 text-orange-500" />
             Dashboard
          </Link>
        </li>
        <li>
          {/* Use Link instead of <a> */}
          <Link to={`${APP_NAME}/clientform`} className="flex items-center block p-2 hover:bg-stone-600 rounded-md">
            <FaUser className="mr-2 text-orange-500" />
            Client Form
          </Link>
        </li>
      </ul>
    </aside>
  );
};
