const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Serve quiz questions from "questions.json"
app.get('/quiz', (req, res) => {
    fs.readFile('questions.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to load quiz questions' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
