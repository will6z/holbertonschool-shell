const http = require('http');
const { readFile } = require('fs').promises;

const countStudents = async (path) => {
  try {
    const data = await readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    let output = `Number of students: ${students.length}\n`;

    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = { count: 0, students: [] };
      }
      fields[field].count += 1;
      fields[field].students.push(firstname);
    });

    for (const [field, data] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${data.count}. List: ${data.students.join(', ')}\n`;
    }

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const output = await countStudents(process.argv[2]);
      res.end(output);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
