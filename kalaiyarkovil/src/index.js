import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import './index.css';
import Advertisement from './components/Advertisement';
import Bus from './components/Bus';
import ChatBox from './components/ChatBox';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Advertisement/>} />
      <Route path="/bus" element={<Bus/>} />
      <Route path="/chatbox" element={<ChatBox/>} />
    </Routes>
    <Footer />
  </Router>
);

reportWebVitals();
