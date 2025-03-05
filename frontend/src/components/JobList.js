import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/jobs`);
        setJobs(jobsResponse.data);
        const rateResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/exchange-rate`);
        setExchangeRate(rateResponse.data.rates.EUR);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="jobs-page">
      <h1>Job Listings</h1>
      {exchangeRate && (
        <div className="exchange-rate-tag">
          <span className="badge">
            <i className="bi bi-arrow-repeat me-2"></i>
            1 USD = {exchangeRate.toFixed(2)} EUR
          </span>
        </div>
      )}
      {jobs.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="job-listings">
          {jobs.map((job) => (
            <div className="job-card" key={job.job_id}>
              <div className="job-title">{job.title}</div>
              <div className="job-company">{job.employer_name}</div>
              <div className="job-description">{job.description}</div>
              <div className="job-info">
                <div className="info-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  {job.location}
                </div>
                <div className="info-item">
                  <i className="bi bi-clock"></i>
                  {job.type}
                </div>
              </div>
              <div className="salary-card">
                <div>
                  <small className="text-muted">Monthly Salary</small>
                  <h4>${job.salary}</h4>
                </div>
                {exchangeRate && (
                  <div>
                    <small className="text-muted">Equivalent</small>
                    <h4>€{(job.salary * exchangeRate).toFixed(2)}</h4>
                  </div>
                )}
              </div>
              <div className="job-meta">
                <Link to={`/job/${job.job_id}`} className="apply-button">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;