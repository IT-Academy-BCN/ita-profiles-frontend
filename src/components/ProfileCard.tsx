import { useState } from 'react';
import { useAppDispatch } from '../hooks/ReduxHooks';
import { toggleUserPanel } from '../store/reducers/getUserDetail/apiGetUserDetail';

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
  const dispatch = useAppDispatch();

  const handleUserDetailToggler = () => {
    dispatch(toggleUserPanel());
  };

  return (
    <div className="mb-4 mr-8 flex w-full cursor-pointer rounded-2xl p-3 hover:bg-[#F2F2F2] md:max-w-[380px]">
      <div className="form-control flex items-center">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="checkbox h-6 w-6 rounded-md border-2 border-gray-500 [--chkbg:theme(colors.pinkit)] [--chkfg:white] checked:border-transparent"
          />
        </label>
      </div>

      <div
        className="ml-4 flex w-full flex-col"
        onClick={handleUserDetailToggler}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleUserDetailToggler();
          }
        }}
        tabIndex={0}
      >
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
            <span key={index} className=" rounded-md bg-[#D9D9D9] px-3 py-1 ">
              {lenguaje}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
