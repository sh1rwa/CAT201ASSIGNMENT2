// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CardDetail from './components/CardDetail';
import PlacesOfWorship from './components/PlacesOfWorship'; // Import the new component
import ThingsToDo from './components/ThingsToDo'; //Import things to do 
import PlanYourTrip from './components/PlanYourTrip';
import BeInspired from './components/BeInspired'; // Import the BeInspired component
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:cardSlug" element={<CardDetail />} />
        <Route path="/places-of-worship" element={<PlacesOfWorship />} /> {/* New Route */}
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route path="/plan-your-trip" element={<PlanYourTrip />} />
        <Route path="/be-inspired" element={<BeInspired />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
