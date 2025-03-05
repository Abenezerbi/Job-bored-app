-- I used these queries Create Employers Table
CREATE TABLE employers (
    employer_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- And these to Create Jobs Table
CREATE TABLE jobs (
    job_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(100) NOT NULL,
    salary NUMERIC(10, 2) NOT NULL,
    type VARCHAR(50) NOT NULL,
    employer_id INT REFERENCES employers(employer_id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- To Insert Sample Employers
INSERT INTO employers (name, email, password) VALUES
('Tech Corp', 'techcorp@example.com', 'hashed_password_1'),
('Remote Inc', 'remoteinc@example.com', 'hashed_password_2');

-- To Insert Sample Jobs
INSERT INTO jobs (title, description, location, salary, type, employer_id) VALUES
('Software Engineer', 'Develop and maintain software applications.', 'Remote', 75000.00, 'remote', 1),
('Data Scientist', 'Analyze and interpret complex data.', 'New York', 90000.00, 'tech', 1),
('Freelance Designer', 'Design user interfaces for web and mobile apps.', 'Remote', 50000.00, 'freelance', 2);