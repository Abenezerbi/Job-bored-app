# Job Board App

A full-stack web application for posting and browsing job listings, built with React, Node.js, and PostgreSQL.

[![Demo Video](https://img.shields.io/badge/Demo-Video-blue)]([your-demo-video-url]) 
[![Frontend](https://img.shields.io/badge/Frontend-React-blue)]([your-frontend-repo-url])
[![Backend](https://img.shields.io/badge/Backend-Node.js-green)]([your-backend-repo-url])


## Features
- **Job Listings**: Browse jobs with salary in USD and EUR using real-time exchange rates
- **Post Jobs**: Employers can submit new job listings
- **Responsive Design**: Works on desktop and mobile
- **Animations**: Smooth fade-in effects for job cards
- **External API**: Currency conversion via ExchangeRate-API

## Technologies
- **Frontend**: React, Bootstrap, Axios
- **Backend**: Node.js, Express, PostgreSQL
- **APIs**: ExchangeRate-API (currency rates)

```sql
-- employers table
CREATE TABLE employers (
  employer_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

-- jobs table
CREATE TABLE jobs (
  job_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  salary NUMERIC(10,2) NOT NULL,
  employer_id INT REFERENCES employers(employer_id) ON DELETE CASCADE
);
