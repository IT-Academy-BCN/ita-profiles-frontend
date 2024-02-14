import ProfileCard from './ProfileCard';
import { useAppSelector } from '../hooks/ReduxHooks';
import { useEffect, useState } from 'react';
import { FetchStudentsListHome } from '../api/fetchStudentsListHome';
import { IStudentList } from '../interfaces/interfaces';

const ProfilesList = () => {
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
        isPanelOpen ? 'min-w-[350px] md:grid-cols-1' : 'lg:grid-cols-2'
      } mt-4 grid max-h-[85vh] grid-cols-1 gap-3 overflow-hidden overflow-y-auto md:max-h-[70vh]`}
    >
      {students ? (
        students.map((student) => <ProfileCard key={student.id} {...student} />)
      ) : (
        <p>Loading students data</p>
      )}
    </div>
  );
};

export default ProfilesList;
