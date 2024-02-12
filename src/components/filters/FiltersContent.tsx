import axios from "axios";
import { useEffect, useState } from "react";

const FiltersContent = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/student/list/for-home").then((response) => {
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
        {roles.map((roles, index) => (
        <label key={index} className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="checkbox-primary checkbox mr-2 rounded-md border-2 border-gray-500"
          />
          <span>{roles}</span>
        </label>
        ))}
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="checkbox-primary  checkbox mr-2 rounded-md border-2 border-gray-500"
          />
          <span>{roles}</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="checkbox-primary  checkbox mr-2 rounded-md border-2 border-gray-500"
          />
          <span>{roles}</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="checkbox-primary  checkbox mr-2 rounded-md border-2 border-gray-500"
          />
          <span>{roles}</span>
        </label>
      </div>

      <div>
        <h4 className="mb-2 mt-4 font-bold">Desarrollo</h4>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="checkbox-primary  checkbox mr-2 rounded-md border-2 border-gray-500"
          />
          <span>Spring</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="checkbox-primary checkbox mr-2 rounded-md border-2 border-gray-500"
          />
          <span>Laravel</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="checkbox-primary  checkbox mr-2 rounded-md border-2 border-gray-500"
          />
          <span>Angular</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="checkbox-primary  checkbox mr-2 rounded-md border-2 border-gray-500"
          />
          <span>React</span>
        </label>
      </div>
    </>
  );
};

export default FiltersContent;
