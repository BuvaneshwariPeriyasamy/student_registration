const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2')

const app = express();
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST', 'OPTIONS'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true, // Allow credentials (optional)
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: 'Buvana@652', // Your MySQL password
    database: 'user_registration', // Database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.post("/register", (req, res) => {
    const { firstName, lastName, email, dob } = req.body;
    console.log("Incoming data:", req.body);

    const query = 'INSERT INTO user (firstName, lastName, email, dob) VALUES (?, ?, ?, ?)';
    db.query(query, [firstName, lastName, email, dob], (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ message: 'User registered successfully!', userId: results.insertId });
    });
});

// Add a GET endpoint to retrieve registered users
app.get("/users", (req, res) => {
    const query = 'SELECT * FROM user'; // Adjust the table name if needed
    db.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(results);
    });
});

app.delete("/delete/:id", (req, res) => {
    const studentId = req.params.id;
    
    const query = 'DELETE FROM user WHERE id = ?';
    db.query(query, [studentId], (error, results) => {
        if (error) {
            console.error('Error deleting data:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ message: 'Student deleted successfully!' });
    });
});


// Start the server
app.listen(5001, () => {
    console.log("Server started on port 5001...");
});
