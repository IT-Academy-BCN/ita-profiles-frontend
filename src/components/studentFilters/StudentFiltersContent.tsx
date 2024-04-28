import axios from 'axios'
import React, { useEffect, useState, useContext, useMemo, ReactNode } from 'react';
import { StudentFiltersContext } from '../../context/StudentFiltersContext';

interface Props {
  children: ReactNode;
}

const StudentFiltersProvider: React.FC<Props> = ({ children }) => {
  const [roles, setRoles] = useState<string[]>([]);
  const [development, setDevelopment] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]); // Nuevo estado para los tags

  const context = useContext(StudentFiltersContext);
  
  if(!context) {
    throw new Error('StudentFiltersContext must be provided');
  }

  const { selectedRoles, addRole, removeRole } = context;

  // Funciones para añadir y eliminar tags
  const addTag = (tag: string) => {
    setTags(prevTags => [...prevTags, tag]);
  };

  const removeTag = (tag: string) => {
    setTags(prevTags => prevTags.filter(t => t !== tag));
  };

  const value = useMemo(() => ({
    selectedRoles,
    addRole,
    removeRole,
  }), [selectedRoles, addRole, removeRole]);

  const urlRoles = 'https://itaperfils.eurecatacademy.org/api/v1/specialization/list';
  const urlDevelopment = 'https://itaperfils.eurecatacademy.org/api/v1/development/list';

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
        throw new Error(error)
      })
  }

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

  return (
    <StudentFiltersContext.Provider value={value}>
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
                  htmlFor={`roleInput-${role}`}
                >
                  <input
                    id={`roleInput-${role}`}
                    type="checkbox"
                    className="border-gray-500 checkbox-primary checkbox mr-2 rounded-md border-2"
                    checked={selectedRoles.includes(role)}
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
                    id={`developmentInput-${tag}`}
                    className="border-gray-500 checkbox-primary checkbox mr-2 rounded-md border-2"
                  />
                  <span>{tag}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      {children}
    </StudentFiltersContext.Provider>
  )
}

export default StudentFiltersProvider