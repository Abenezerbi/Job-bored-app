import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobForm = () => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      location: '',
      salary: '',
      type: '',
      employer_id: '', // Add this field
    });

    const [employers, setEmployers] = useState([]);

    // Fetch employers on component mount
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/employers`)
        .then(response => setEmployers(response.data))
        .catch(error => console.error('Error fetching employers:', error));
    }, []);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/jobs`, formData);
        console.log('Job created:', response.data);
      } catch (error) {
        console.error('Error creating job:', error);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        {/* Existing fields */}
        <div className="mb-3">
          <label htmlFor="employer_id" className="form-label">Employer</label>
          <select
            className="form-control"
            id="employer_id"
            name="employer_id"
            value={formData.employer_id}
            onChange={handleChange}
            required
          >
            <option value="">Select Employer</option>
            {employers.map(employer => (
              <option key={employer.employer_id} value={employer.employer_id}>
                {employer.name}
              </option>
            ))}
          </select>
        </div>
        {/* Add other form fields here */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">Salary</label>
          <input
            type="text"
            className="form-control"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <input
            type="text"
            className="form-control"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
};

export default JobForm;
