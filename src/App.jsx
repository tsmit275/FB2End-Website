import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/services';
import MeetTheTeam from './pages/meet';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Home from './pages/home';
import NavBar from './components/NavBar';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;