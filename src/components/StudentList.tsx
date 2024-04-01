import { useSelector } from 'react-redux';
import { State } from '../redux/state';

function StudentsList() {
  const { students, filters } = useSelector((state: State) => state);

  const filteredStudents = students.filter(student =>
    filters.includes(student.subtitle)
  );

  return (
    <div>
      {filteredStudents.map(student => (
        <div key={student.fullname}>
          <h2>{student.fullname}</h2>
          <h3>{student.subtitle}</h3>
          <img src={student.photo} alt={student.fullname} />
          <ul>
            {student.tags.map(tag => (
              <li key={tag.id}>{tag.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default StudentsList;