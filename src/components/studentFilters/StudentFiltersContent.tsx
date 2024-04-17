import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { StudentFiltersContext } from '../../context/StudentFiltersContext';

const StudentFiltersContent: React.FC = () => {
  const [roles, setRoles] = useState<string[]>([]);
  const [development, setDevelopment] = useState<string[]>([]);

  if(!StudentFiltersContext) {
    console.error('StudentFiltersContext must be provided');
    return null;
  }

  // @ts-ignore
  const { selectedRoles, addRole, removeRole, selectedTags, addTag, removeTag } = useContext(StudentFiltersContext);

  const urlRoles = 'https://itaperfils.eurecatacademy.org/api/v1/specialization/list';
  const urlDevelopment = 'https://itaperfils.eurecatacademy.org/api/v1/development/list';

  const fetchData = (
    url: string,
    setData: React.Dispatch<React.SetStateAction<string[]>>
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
    fetchData(urlDevelopment, setDevelopment);
  }, [urlRoles, urlDevelopment]);

  const toggleRole = (role: string) => {
    if (selectedRoles.includes(role)) {
      removeRole(role);
    } else {
      addRole(role);
    }
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      removeTag(tag);
    } else {
      addTag(tag);
    }
  };

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
                  className="border-gray-500 checkbox-primary checkbox mr-2 rounded-md border-2"
                  checked={selectedRoles.includes(role)} // Verificamos si el role está en tags
                  onChange={() => toggleRole(role)}
                />
                <span>{role}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">Desarrollo</h4>
          <div>
            {development.map((tag) => (
              <label
                key={tag}
                className="label cursor-pointer justify-start p-1"
                htmlFor="developmentInput"
              >
                <input
                  type="checkbox"
                  id="developmentInput"
                  className="border-gray-500 checkbox-primary checkbox mr-2 rounded-md border-2"
                  checked={selectedTags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                />
                <span>{tag}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFiltersContent;
