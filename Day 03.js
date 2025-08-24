const students = [
  { name: "abc", marks: [85,90,78,42,25] },
  { name: "def", marks: [88,76,92,44,12] },
  { name: "ghi", marks: [70,80,65,43,23] }
];

function calculateAverage(marks){
    return (marks.reduce((sum,mark) => sum + mark,0) / marks.length).toFixed(2)
}

students.forEach(student =>{
    console.log(`${student.name}'s Average Marks is : ${calculateAverage(student.marks)}`)
});
