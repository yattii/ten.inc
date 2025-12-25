
import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EventService from './pages/EventService';
import RestaurantService from './pages/RestaurantService';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Recruitment from './pages/Recruitment';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/event" element={<EventService />} />
          <Route path="/services/restaurant" element={<RestaurantService />} />
          <Route path="/works" element={<Works />} />
          <Route path="/company" element={<Company />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
