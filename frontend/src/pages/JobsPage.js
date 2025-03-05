import React from 'react';
import JobList from '../components/JobList';

const JobsPage = () => {
  return (
    <div className="container jobs-page">
      <h1>Browse Jobs</h1>
      <JobList />
    </div>
  );
};

export default JobsPage;
