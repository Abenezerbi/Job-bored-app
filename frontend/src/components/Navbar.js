import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        {/* Left-aligned Brand */}
        <Link className="navbar-brand" to="/">
          <img 
            src="/job.png" 
            alt="Job Board Logo" 
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          JobBoard
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center-aligned Navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">
                <i className="bi bi-search me-1"></i> Browse Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post-job">
                <i className="bi bi-plus-square me-1"></i> Post Job
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
