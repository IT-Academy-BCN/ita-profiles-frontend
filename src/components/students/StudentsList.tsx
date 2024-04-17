import { useEffect, useState } from 'react'
import StudentCard from './StudentCard'
import { useAppSelector } from '../../hooks/ReduxHooks'
import { IStudentList } from '../../interfaces/interfaces'
import { FetchStudentsListHome } from '../../api/FetchStudentsList'

const StudentsList: React.FC = () => {
  const isPanelOpen = useAppSelector(
    (state) => state.ShowUserReducer.isUserPanelOpen,
  );
  const filteredStudents = useAppSelector(
    (state) => state.ShowUserReducer.filteredStudents,
  );

  const [students, setStudents] = useState<IStudentList[]>()

  useEffect(() => {
    const fetchStudents = async () => {
      try {
       // const studentsList = await FetchStudentsListHome();
        const studentsList = await FetchStudentsListHome(filteredStudents);
        setStudents(studentsList);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching students:', error)
      }
    };
    fetchStudents();
  }, [filteredStudents]);

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
  )
}

export default StudentsList
