const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all jobs (with employer names)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT jobs.*, employers.name AS employer_name 
      FROM jobs 
      JOIN employers ON jobs.employer_id = employers.employer_id
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get single job by ID (with employer name)
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`
      SELECT jobs.*, employers.name AS employer_name 
      FROM jobs 
      JOIN employers ON jobs.employer_id = employers.employer_id
      WHERE jobs.job_id = $1
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching job:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Create job (ensure employer_id is provided in request body)
router.post('/', async (req, res) => {
  try {
    const { title, description, location, salary, type, employer_id } = req.body;
    const result = await pool.query(
      `INSERT INTO jobs 
      (title, description, location, salary, type, employer_id) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *`,
      [title, description, location, salary, type, employer_id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error creating job:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
