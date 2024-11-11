const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Function to read and process the CSV file
function countStudents(database) {
    return new Promise((resolve, reject) => {
        fs.readFile(database, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines
            if (lines.length <= 1) {
                resolve('No students found');
                return;
            }

            const studentsByField = {};
            let totalStudents = 0;
            for (let i = 1; i < lines.length; i++) {
                const [firstName, , , field] = lines[i].split(',');
                if (field) {
                    totalStudents += 1;
                    if (!studentsByField[field]) {
                        studentsByField[field] = [];
                    }
                    studentsByField[field].push(firstName);
                }
            }

            let result = `Number of students: ${totalStudents}\n`;
            for (const [field, students] of Object.entries(studentsByField)) {
                result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
            }

            resolve(result.trim());
        });
    });
}

// Set up the root URL "/"
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello Holberton School!');
});

// Set up the "/students" URL
app.get('/students', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    const database = process.argv[2]; // Database passed as command-line argument

    if (!database) {
        res.send('Cannot load the database');
        return;
    }

    res.write('This is the list of our students\n');
    countStudents(database)
        .then((students) => {
            res.end(students);
        })
        .catch((error) => {
            res.end(error.message);
        });
});

// Listen on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the app instance
module.exports = app;
