import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobFormPage from './pages/JobFormPage';
import JobDetailPage from './pages/JobDetailPage';
import Navbar from './components/Navbar';
import './App.css'; // Import global CSS

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/post-job" element={<JobFormPage />} />
          <Route path="/job/:id" element={<JobDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
