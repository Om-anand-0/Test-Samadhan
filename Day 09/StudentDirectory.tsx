
import { useEffect, useState } from "react";

interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

const StudentDirectory = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data: Student[]) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading students...</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-96">
      <h1 className="text-xl font-bold text-center mb-4">🎓 Student Directory</h1>
      <ul className="space-y-2">
        {students.map((student) => (
          <li
            key={student.id}
            className="p-3 border rounded-lg hover:bg-gray-50"
          >
            <p className="font-semibold">{student.name}</p>
            <p className="text-sm text-gray-600">
              Age: {student.age} • Course: {student.course}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDirectory;
