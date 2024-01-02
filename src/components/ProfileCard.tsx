import { useState } from 'react';

type Profile = {
  nombreCompleto: string;
  profesion: string;
  lenguajes: string[];
  foto: string;
};

const ProfileCard: React.FC<Profile> = ({
  nombreCompleto,
  profesion,
  lenguajes,
  foto,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="mb-4 flex max-w-[380px] rounded-md border p-2">
      <div className="form-control flex items-center">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="checkbox h-6 w-6 rounded-sm border-2 border-gray-500"
          />
        </label>
      </div>

      <div className="ml-4 flex flex-col ">
        <div className="flex items-center">
          <div>
            <img
              src={foto}
              alt={`Foto de ${nombreCompleto}`}
              className="h-16 w-full rounded-md"
            />
          </div>
          <div className="ml-4 flex flex-col">
            <div className="mb-2 text-lg font-bold leading-4 text-black">
              {nombreCompleto}
            </div>
            <div className="text-base leading-4 text-gray-400">{profesion}</div>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap gap-1 text-xs">
          {lenguajes.map((lenguaje, index) => (
            <button key={index} className=" rounded-md bg-[#D9D9D9] px-3 py-1 ">
              {lenguaje}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
