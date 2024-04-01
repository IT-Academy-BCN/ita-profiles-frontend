import React from 'react';

interface Student {
  id: number;
  name: string;
  // Add more properties here as needed
}

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          {student.name}
          {/* Display more student details here as needed */}
        </div>
      ))}
    </div>
  );
};
