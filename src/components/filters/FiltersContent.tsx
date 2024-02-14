import axios from 'axios';
import { useEffect, useState } from 'react';

const FiltersContent: React.FC = () => {
  const [specialities, setSpecialities] = useState([]);

  const url: string =
    'https://itaperfils.eurecatacademy.org/api/v1/specialization/list';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setSpecialities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return (
    <>
      <h3 className="mb-7 w-40 text-2xl font-bold md:mb-14">Filtros</h3>
      <div>
        <h4 className="mb-2 font-bold">Roles</h4>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="checkbox-primary checkbox mr-2 rounded-md border-2 border-gray-500"
          />
          <span>Frontend</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="checkbox-primary  checkbox mr-2 rounded-md border-2 border-gray-500"
          />
          <span>Backend</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="checkbox-primary  checkbox mr-2 rounded-md border-2 border-gray-500"
          />
          <span>Fullstack</span>
        </label>
        <label className="label cursor-pointer justify-start p-1">
          <input
            type="checkbox"
            className="checkbox-primary  checkbox mr-2 rounded-md border-2 border-gray-500"
          />
          <span>Data Science</span>
        </label>
      </div>

      <div>
        <h4 className="mb-2 mt-4 font-bold">Desarrollo</h4>
        {specialities &&
          specialities.map((speciality, index) => (
            <label
              key={index}
              className="label cursor-pointer justify-start p-1"
            >
              <input
                type="checkbox"
                className="checkbox-primary  checkbox mr-2 rounded-md border-2 border-gray-500"
              />
              <span>{speciality}</span>
            </label>
          ))}
      </div>
    </>
  );
};

export default FiltersContent;
