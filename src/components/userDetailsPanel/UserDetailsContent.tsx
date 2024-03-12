import React, { useContext } from 'react';
import close from '../../assets/svg/close.svg';
import { SmallScreenContext } from '../../context/SmallScreenContext';
import type { TSmallScreenContext } from '../../interfaces/interfaces';
import Projects from './projects/ProjectsCard';
import StudentData from './studentData/StudentData';

type TUserDetailsContent = {
  handleIsPanelOpen: () => void;
};

const UserDetailsContent: React.FC<TUserDetailsContent> = ({
  handleIsPanelOpen,
}) => {
  const { isMobile }: TSmallScreenContext = useContext(SmallScreenContext);

  return (
    <div
      className={`flex flex-col gap-4 ${isMobile && 'modal-box rounded-2xl p-2'}`}
    >
      <div className="flex items-center justify-end md:justify-between p-3">
        <h3 className="text-colortext hidden md:block text-2xl font-bold">
          Detalle Perfil
        </h3>
        <button className="cursor-pointer " onClick={handleIsPanelOpen}>
          <img src={close} alt="close icon" className="h-5" />
        </button>
      </div>

      <div className="overflow-auto pr-3">
        <div className="flex flex-col gap-8">
          
            <StudentData />
          
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
