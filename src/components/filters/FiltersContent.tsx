import axios from 'axios';
import { useEffect, useState } from 'react';

const FiltersContent: React.FC = () => {
  const [specialities, setSpecialities] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const urlSpecialities: string =
    'https://itaperfils.eurecatacademy.org/api/v1/specialization/list';
  const urlTags: string =
    'https://itaperfils.eurecatacademy.org/api/v1/development/list';

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
    fetchData(urlSpecialities, setSpecialities);
  }, [urlSpecialities, setSpecialities]);

  useEffect(() => {
    fetchData(urlTags, setTags);
  }, [urlTags, setTags]);

  return (
    <>
      <h3 className="mb-7 w-40 text-2xl font-bold md:mb-14">Filtros</h3>
      <div>
        <h4 className="mb-2 mt-4 font-bold">Roles</h4>
        {tags &&
          tags.map((tag, index) => (
            <label
              key={index}
              className="label cursor-pointer justify-start p-1"
            >
              <input
                type="checkbox"
                className="checkbox-primary  checkbox mr-2 rounded-md border-2 border-gray-500"
              />
              <span>{tag}</span>
            </label>
          ))}
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
