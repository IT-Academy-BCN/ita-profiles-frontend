import { useEffect, useState } from 'react';
import { FetchStudentsData } from '../../../api/FetchStudentData';
import { IStudentData } from '../../../interfaces/interfaces';

const StudentData = () => {
  const [studentsData, setStudentsData] = useState<IStudentData[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const studentDetails = await FetchStudentsData();
        
        console.log('studentDetails', studentDetails);
        if (studentDetails) {
          setStudentsData(studentDetails);
          
        }
        
      } catch (error) {
        console.error('Error fetching students:', error);
      }
      
    };
    fetchStudents();
  }, []);
  
  return (
    <div>
    <h3 className="text-2xl font-bold text-black-3">Detalles del Alumno</h3>
    {studentsData.map((student) => (
      <div key={student.student_id}>
        <p>{student.profile_detail?.fullname}</p>
        <p>{student.profile_detail?.subtitle}</p>
        <p>{student.profile_detail?.social_media?.linkedin?.url}</p>
        <p>{student.profile_detail?.social_media?.github?.url}</p>
        <p>{student.profile_detail?.about?.description}</p>
        
      </div>
    ))}
  </div>
  );
};

export default StudentData;
