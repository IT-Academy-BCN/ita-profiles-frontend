import axios from 'axios';
import { useEffect, useState } from 'react';

const StudentFiltersContent = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios
      .get('https://itaperfils.eurecatacademy.org/api/v1/specialization/list')
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-16">
      <h3 className="w-40 text-2xl font-bold text-black-3">Filtros</h3>
      <div className='flex flex-col gap-8'>
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
            <label className="label cursor-pointer justify-start p-1">
              <input
                type="checkbox"
                className="border-gray-500  checkbox-primary checkbox mr-2 rounded-md border-2"
              />
              <span>Spring</span>
            </label>
            <label className="label cursor-pointer justify-start p-1">
              <input
                type="checkbox"
                className="border-gray-500 checkbox-primary checkbox mr-2 rounded-md border-2"
              />
              <span>Laravel</span>
            </label>
            <label className="label cursor-pointer justify-start p-1">
              <input
                type="checkbox"
                className="border-gray-500  checkbox-primary checkbox mr-2 rounded-md border-2"
              />
              <span>Angular</span>
            </label>
            <label className="label cursor-pointer justify-start p-1">
              <input
                type="checkbox"
                className="border-gray-500  checkbox-primary checkbox mr-2 rounded-md border-2"
              />
              <span>React</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFiltersContent;
