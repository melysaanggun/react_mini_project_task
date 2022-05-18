import React from 'react'

/**Router */
import { Routes, Route, Navigate } from 'react-router-dom';

/**Pages */
import Home from '../pages/Home';
import About from '../pages/About';
import Tenants from '../pages/Tenants';
import Events from '../pages/Events';
import Contact from '../pages/Contact';
import JoinTenant from '../pages/Contact/JoinTenant';
import EventCollab from '../pages/Contact/EventCollab';
import LoginAdmin from '../pages/LoginAdmin';
import Admin from '../pages/Admin';
import TenantsData from '../pages/LoginAdmin/TenantsData';
import AddTenants from '../pages/LoginAdmin/TenantsData/AddTenants';
import UpdateTenants from '../components/ui/UpdateTenants';
import Feedback from '../pages/Contact/Feedback';
import EventsData from '../components/ui/EventsData';
import AddEvent from '../components/ui/AddEvent';
import UpdateEvents from '../components/ui/UpdateEvents';

const Routers = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Navigate to = '/home' />} />
      <Route path="/login/admin" element={<LoginAdmin/>} />
      <Route path="/login/admin/admin-page" element={<Admin/>} />
      <Route path='/tenants-data' element={<TenantsData/>} />
      <Route path='/tenants-data/add-new-tenant' element={<AddTenants/>} />
      <Route path='/tenants-data/update-tenant-data/:id' element={<UpdateTenants/>} />
      <Route path='/events-data' element={<EventsData/>} />
      <Route path='/events-data/add-new-event' element={<AddEvent/>} />
      <Route path='/events-data/update-event-data/:id' element={<UpdateEvents/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/tenants" element={<Tenants/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/contact/join-tenant" element={<JoinTenant/>} />
      <Route path="/contact/event-collab" element={<EventCollab/>} />
      <Route path="/contact/feedback" element={<Feedback/>} />
    </Routes>
    </div>
  )
}

export default Routers