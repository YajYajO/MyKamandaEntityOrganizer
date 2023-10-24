import { Statement } from 'sqlite3';

const express = require('express');
const app = express();
const port = 3000; // Set your desired port

app.get('/api/users', (req, res) => {
    // Your route handling logic here
    res.json({ message: 'GET request to /api/users' });
  });

  const sqlite3 = require('sqlite3').verbose();

  // Connect to the SQLite database or create it if it doesn't exist
  const db = new sqlite3.Database('mydatabase.db', (err) => {
    if (err) {
      console.error('Error opening the database:', err.message);
    } else {
      console.log('Connected to the database');
    }
  });
  
  // Create a table to store user data
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY Key,
        buisinessName TEXT,
        field TEXT,
        address TEXT,
        SICcode INTEGER,
        dataFurnisherCode INTEGER,
        creditScore INTEGER,
        domainName TEXT,
        websitesUsername TEXT,
        websitesPassword TEXT,
        licenses TEXT,
        franchises TEXT
    )
  `, (err) => {
    if (err) {
      console.error('Error creating the table:', err.message);
    } else {
      console.log('Table "users" created');
    }
  });
  
  // Close the database connection when done
  db.close((err) => {
    if (err) {
      console.error('Error closing the database:', err.message);
    } else {
      console.log('Database connection closed');
    }
  });
  
  
