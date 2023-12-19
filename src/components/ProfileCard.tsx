import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

type Profile = {
  fullName: string;
  profession: string;
  languages: string[];
  foto: string;
};

const ProfileCard: React.FC<Profile> = ({
  fullName,
  profession,
  languages,
  foto,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="bg-white p-4 rounded-md mb-4 flex card-65-percent">
      
      <div className="flex-shrink-0 border-gray-400">
        <div className="form-control flex items-center">
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="checkbox"
            />
            <div className="checkbox-custom absolute top-0 left-0 w-6 h-6 rounded border border-gray-400 bg-white"></div>
          </label>
        </div>
      </div>

      <div className="ml-4 flex flex-col">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              src={foto}
              alt={`Foto de ${fullName}`}
              className="w-12 h-12 rounded"
            />
          </div>
          <div className="ml-4">
            <div className="text-black font-poppins font-bold text-lg leading-4 mb-2">{fullName}</div>
            <div className="text-gray-600 font-poppins font-medium text-base leading-4">{profession}</div>
          </div>
        </div>

        <div className="flex mt-2 text-sm">
          {languages.map((language, index) => (
            <div key={index} className="mr-2">
              <button className="bg-gray-300 text-1E1E1E px-3 py-1 rounded border border-gray-400 font-semibold">
                {language}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
