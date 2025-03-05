import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/jobs/${id}`);
        setJob(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setError('Failed to load job details. Please try again later.');
      }
    };

    fetchJob();
  }, [id]);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container job-details">
      <button onClick={() => navigate(-1)}>Back to Job List</button>
      <h2 className="job-title">{job.title}</h2>
      <p className="job-description">{job.description}</p>
      <p className="job-info"><strong>Location:</strong> {job.location}</p>
      <p className="job-info"><strong>Salary:</strong> ${job.salary}</p>
      <p className="job-info"><strong>Type:</strong> {job.type}</p>
    </div>
  );
};

export default JobDetails;