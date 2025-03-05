import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="display-4">Welcome to Job Board</h1>
          <p className="lead">Find your next opportunity with us!</p>
          <Link to="/jobs" className="btn btn-primary btn-lg">Browse Jobs</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-briefcase-fill feature-icon"></i>
              <h3>Wide Range of Jobs</h3>
              <p>Explore a wide range of job listings across various industries and locations.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-building-fill feature-icon"></i>
              <h3>Top Employers</h3>
              <p>Connect with top employers and find the best fit for your skills and career goals.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-currency-dollar feature-icon"></i>
              <h3>Transparent Salaries</h3>
              <p>Get insights into salary details to make informed career decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">What Our Users Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial">
                <p>"Job Board helped me find my dream job in no time!"</p>
                <h5>- John Doe</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <p>"The process was seamless and the platform is user-friendly."</p>
                <h5>- Jane Smith</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial">
                <p>"I highly recommend Job Board to anyone looking for new opportunities."</p>
                <h5>- Robert Brown</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
