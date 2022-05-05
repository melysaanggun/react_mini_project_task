import React from 'react'
/**Router */
import { Routes, Route, Navigate } from 'react-router-dom';

/**Pages */
import Home from '../pages/Home';
import About from '../pages/About';
import Tenants from '../pages/Tenants';
import Events from '../pages/Events';
import Contact from '../pages/Contact';

const Routers = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Navigate to = '/home' />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/tenants" element={<Tenants/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </div>
  )
}

export default Routers