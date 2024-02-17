import axios from "axios";
import { useEffect, useState } from "react";

const FiltersContent = () => {
  const [students, setStudents] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get("https://itaperfils.eurecatacademy.org/api/v1/specialization/list").then((response) => {
      setStudents(response.data);
    });

    axios.get("https://itaperfils.eurecatacademy.org/api/v1/specialization/list").then((response) => {
      setRoles(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);


  return (
    <>
      <h3 className="mb-7 w-40 text-2xl font-bold md:mb-14">Filtros</h3>
      <div>
        <h4 className="mb-2 font-bold">Roles</h4>
        {roles.map((role, index) => (
          <label key={index} className="label cursor-pointer justify-start p-1">
            <input
              type="checkbox"
              className="checkbox-primary checkbox mr-2 rounded-md border-2 border-gray-500"
            />
            <span>{role}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default FiltersContent;