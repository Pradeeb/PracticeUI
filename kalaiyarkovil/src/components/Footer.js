import React from "react";
import './Footer.css';

export default function Footer(){

  function toggleChatBox(){
    window.location.href = '/chatbox'
  }

    return(
       <footer className="border-top position-sticky bottom-0 bg-light">
        <ul className='navbar-nav d-sm-flex flex-row justify-content-around px-5 pt-3'>
          <li className='nav-item px-3 flex-column ' onClick={toggleChatBox}><i className="bi-house-check-fill  display-4 "></i>Home</li>
          <li className='nav-item px-3 flex-column '><i className="bi-chat-right-text  display-4 "></i>Chat Box</li>
          <li className='nav-item px-3 flex-column '><i className="bi-person-circle display-4 "></i>MyAccount</li>
        </ul>
       </footer>
       );
}