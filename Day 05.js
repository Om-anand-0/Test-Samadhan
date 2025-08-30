const express = require('express');
const app = express();

const port = 3000;

// Dummy student data
const students = [
  { id: 1, name: "Rahul", age: 20 },
  { id: 2, name: "Priya", age: 21 },
  { id: 3, name: "Amit", age: 22 },
];

// Default route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Students API
app.get('/students', (req, res) => {
  res.json(students);
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
