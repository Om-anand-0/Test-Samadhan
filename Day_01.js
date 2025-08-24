const student = {
  name: "Test-name",
  age: 20,
  rollNo: "0187CS111111",
  course: "Computer Science"
};

function printStudentDetails(student){
    console.log("Student details");
    for(const [key,value] of Object.entries(student)){
        console.log(`${key.charAt(0).toUpperCase() + key.slice(1)} : ${value}`);
    }

}

printStudentDetails(student);