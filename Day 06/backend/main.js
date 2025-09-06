
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


let students = [
  { id: 1, name: "Alice", age: 20, course: "CSE" },
  { id: 2, name: "Bob", age: 21, course: "ECE" },
  { id: 3, name: "Charlie", age: 22, course: "ME" }
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
