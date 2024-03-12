import StudentCard from './StudentCard';
import { useAppSelector } from '../../hooks/ReduxHooks';
import { useEffect, useState } from 'react';
import {  IStudentList } from '../../interfaces/interfaces';
import { FetchStudentsListHome } from '../../api/FetchStudentsList';

const StudentsList: React.FC = () => {
  const isPanelOpen = useAppSelector(
    (state) => state.ShowUserReducer.isUserPanelOpen,
  );

  const [students, setStudents] = useState<IStudentList[]>();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const studentsList = await FetchStudentsListHome();
        setStudents(studentsList);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div
      className={`${
        isPanelOpen
          ? 'md:grid-cols-[minmax(300px,450px)]'
          : 'lg:grid-cols-[minmax(300px,450px)_minmax(300px,450px)]'
      } grid gap-y-1 gap-x-6 pr-8 overflow-auto`}
    >
      {students ? (
        students.map((student) => <StudentCard key={student.id} {...student} />)
      ) : (
        <p>Loading students data</p>
      )}
    </div>
  );
};

export default StudentsList;
