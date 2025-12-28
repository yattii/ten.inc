import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import EventService from './pages/EventService';
import RestaurantService from './pages/RestaurantService';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Recruitment from './pages/Recruitment';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/event" element={<EventService />} />
          <Route path="/services/restaurant" element={<RestaurantService />} />
          <Route path="/company" element={<Company />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;