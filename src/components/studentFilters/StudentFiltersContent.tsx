import axios from 'axios';
import { useEffect, useState } from 'react';

const StudentFiltersContent: React.FC = () => {
  const [roles, setRoles] = useState<string[]>([]);
  const [development, setDevelopment] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [students, setStudents] = useState<string[]>([]);

  const urlRoles =
    'https://itaperfils.eurecatacademy.org/api/v1/specialization/list';
  const urlDevelopment =
    'https://itaperfils.eurecatacademy.org/api/v1/development/list';
  const urlFilterStudents =
    'https://itaperfils.eurecatacademy.org/api/v1/student/list/for-home?specialization=';


  const fetchData = (
    url: string,
    setData: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData(urlRoles, setRoles);
  }, [urlRoles]);

  useEffect(() => {
    fetchData(urlDevelopment, setDevelopment);
  }, [urlDevelopment]);

  const changeHandler = (role: string) => {
   if (!selectedRoles.includes(role)) {
      setSelectedRoles([...selectedRoles, role]);
    } else {
      setSelectedRoles(selectedRoles.filter((r) => r !== role));
    }
  }

  useEffect(() => {
    console.log('selectedRoles', selectedRoles);
    if (selectedRoles.length > 0) {
      const roles = selectedRoles.join(',');
      //Here we have to save selectedRoles to state and use it in component StudentList.tsx
      console.log('roles', `${urlFilterStudents}${roles}`);
      fetchData(`${urlFilterStudents}${roles}`, setStudents);
    }
  }, [selectedRoles]);

  useEffect(() => {
    console.log('students', students);
  }, [students]);
  
  return (
    <div className="w-40 flex flex-col gap-16 flex:none">
      <h3 className="text-2xl font-bold text-black-3">Filtros</h3>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">Roles</h4>
          <div>
            {roles.map((role, index) => (
              <label
                key={index}
                className="label cursor-pointer justify-start p-1"
              >
                <input
                  type="checkbox"
                  value={role}
                 
                  onChange={() => changeHandler(role)}
                  className="border-gray-500 checkbox-primary checkbox mr-2 rounded-md border-2"
                />
                <span>{role}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">Desarrollo</h4>
          <div>
            {development.map((role, index) => (
              <label
                key={index}
                className="label cursor-pointer justify-start p-1"
              >
                <input
                  type="checkbox"
                  className="border-gray-500 checkbox-primary checkbox mr-2 rounded-md border-2"
                />
                <span>{role}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFiltersContent;
