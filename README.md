# Job Board App

A full-stack web application for posting and browsing job listings, built with React, Node.js, and PostgreSQL.

## Features
- **Job Listings**: Browse job opportunities with salaries displayed in both USD and EUR using real-time exchange rates.
- **Post Jobs**: Employers can submit new job listings.
- **Responsive Design**: Works on both desktop and mobile devices.
- **Animations**: Smooth fade-in effects for job cards to enhance user experience.
- **External API Integration**: Uses ExchangeRate-API for real-time currency conversion.

## Technologies Used
### Frontend:
- **React** - For building a dynamic and interactive UI.
- **Tailwind CSS** - For responsive and modern styling.
- **Axios** - For making API requests to the backend.

### Backend:
- **Node.js** - For handling server-side logic.
- **Express.js** - For building RESTful APIs.
- **PostgreSQL** - For storing job listings and employer details.

### APIs:
- **ExchangeRate-API** - For currency conversion (USD to EUR).

## Database Schema

### Employers Table
```sql
CREATE TABLE employers (
  employer_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);
```

### Jobs Table
```sql
CREATE TABLE jobs (
  job_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  salary NUMERIC(10,2) NOT NULL,
  employer_id INT REFERENCES employers(employer_id) ON DELETE CASCADE
);
```

## Installation & Setup
### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [PostgreSQL](https://www.postgresql.org/)

### Steps to Run Locally
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/job-board-app.git
   cd job-board-app
   ```
2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```
3. **Set Up Database**
   - Create a PostgreSQL database.
   - Run the SQL schema above to create tables.
   - Configure `.env` with database credentials.
4. **Run Backend Server**
   ```bash
   npm start
   ```
5. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```
6. **Run Frontend**
   ```bash
   npm start
   ```

## Usage
- Employers can sign up and post job listings.
- Job seekers can browse available jobs and view salaries in different currencies.

## API Endpoints
### Employers
- `POST /api/employers` - Create a new employer account.
- `GET /api/employers` - Retrieve all employers.

### Jobs
- `POST /api/jobs` - Post a new job.
- `GET /api/jobs` - Retrieve all job listings.
- `GET /api/jobs/:id` - Retrieve a specific job listing.
- `DELETE /api/jobs/:id` - Delete a job listing.
