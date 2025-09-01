const express = require('express');
const app = express();

const port = 3000;

// Dummy student data
const students = [
  { id: 1, name: "Alice", age: 20, course: "CSE" },
  { id: 2, name: "Bob", age: 21, course: "ECE" },
  { id: 3, name: "Charlie", age: 22, course: "ME" }
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
 