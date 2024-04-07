import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setFilteredStudents } from '../../../src/store/reducers/getUserDetail/apiGetUserDetail'; //Import the setFilteredStudents function from the appropriate file
import { FetchStudentsListHome } from '../../api/FetchStudentsList';


const StudentFiltersContent: React.FC = () => {
  const [roles, setRoles] = useState<string[]>([]);
  const [development, setDevelopment] = useState<string[]>([]);

  const urlRoles =
    'https://itaperfils.eurecatacademy.org/api/v1/specialization/list'
  const urlDevelopment =
    'https://itaperfils.eurecatacademy.org/api/v1/development/list';

  const fetchData = (
    url: string,
    setData: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    fetchData(urlRoles, setRoles)
  }, [urlRoles])

  useEffect(() => {
    fetchData(urlDevelopment, setDevelopment);
  }, [urlDevelopment]);

  return (
    <div className="w-40 flex flex-col gap-16 flex:none">
      <h3 className="text-2xl font-bold text-black-3">Filtros</h3>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">Roles</h4>
          <div>
            {roles.map((role) => (
              <label
                key={role}
                className="label cursor-pointer justify-start p-1"
                htmlFor="roleInput"
              >
                <input
                  id="roleInput"
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
            {development.map((role) => (
              <label
                key={role}
                className="label cursor-pointer justify-start p-1"
                htmlFor="developmentInput"
              >
                <input
                  type="checkbox"
                  id="developmentInput"
                  className="border-gray-500 checkbox-primary checkbox mr-2 rounded-md border-2"
                />
                <span>{role}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentFiltersContent
