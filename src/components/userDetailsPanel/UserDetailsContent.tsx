import React, { useContext } from 'react';
import close from '../../assets/svg/close.svg';
import { SmallScreenContext } from '../../context/SmallScreenContext';
import type { TSmallScreenContext } from '../../interfaces/interfaces';
import Projects from './projects/ProjectsCard';

type TUserDetailsContent = {
  handleIsPanelOpen: () => void;
};

const UserDetailsContent: React.FC<TUserDetailsContent> = ({
  handleIsPanelOpen,
}) => {
  const { isMobile }: TSmallScreenContext = useContext(SmallScreenContext);

  return (
    <div
      className={`flex w-full flex-col ${
        isMobile &&
        'gray-4-base relative h-[760px] max-w-[370px] rounded-2xl bg-white'
      }`}
    >
      {/* mobile */}
      {isMobile && (
        <button
          className="absolute right-4 top-5 cursor-pointer"
          onClick={handleIsPanelOpen}
        >
          <img src={close} alt="close icon" className="h-5" />
        </button>
      )}

      {/* tablet & desktop */}
      {!isMobile && (
        <div className="flex items-center justify-between">
          <h3 className="text-colortext text-2xl font-bold">Detalle Perfil</h3>
        </div>
      )}

      {/* content */}
      <div className="mb-4 mr-2 mt-20 overflow-auto pl-5 pr-4">
        <div className="flex flex-col gap-8">
          <div className="border-gray-300 h-[220px] rounded-xl border-2 p-2">
            User Data component<p> (user + about + skills)</p>
          </div>
          <div className="h-[175px]">
            <Projects />
          </div>
          <div className="border-gray-300 h-[140px] rounded-xl border-2 p-2">
            Challenges component
          </div>
          <div className="border-gray-300 h-[140px] rounded-xl border-2 p-2">
            Resources component
          </div>
          <div className="border-gray-300 h-[400px] rounded-xl border-2 p-2">
            Bootcamp component
          </div>
          <div className="border-gray-300 h-[100px] rounded-xl border-2 p-2">
            Languages component
          </div>
          <div className="border-gray-300 h-[70px] rounded-xl border-2 p-2">
            Modality component
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsContent;
