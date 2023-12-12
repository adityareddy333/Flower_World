// App.js

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Head from './components/Home';
import Login from './components/login'; // Corrected component name
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/Aboutus';
import FAQ from './components/FAQ';
import Signup from './components/Signup';
import Order from './components/order'; // Corrected component name

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Head title="Flower World" about="About us" />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/order" element={<Order />} /> {/* Corrected component name */}  
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
