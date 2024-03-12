import React, { useContext } from 'react';
import { Close } from '../../assets/svg';
import { SmallScreenContext } from '../../context/SmallScreenContext';
import type { TSmallScreenContext } from '../../interfaces/interfaces';
import Projects from '../studentDetailCards/projectsSection/ProjectsCard';

type TStudentDetailsContent = {
  handleIsPanelOpen: () => void;
};

const StudentDetailsContent: React.FC<TStudentDetailsContent> = ({
  handleIsPanelOpen,
}) => {
  const { isMobile }: TSmallScreenContext = useContext(SmallScreenContext);

  return (
    <div
      className={`flex flex-col gap-4 ${
        isMobile ? 'modal-box rounded-2xl p-2 pl-4' : 'h-full'
      }`}
    >
      <div className="flex items-center justify-end p-3 md:justify-between">
        <h3 className="hidden text-2xl font-bold md:block">Detalle Perfil</h3>
        <button className="cursor-pointer" onClick={handleIsPanelOpen}>
          <img src={Close} alt="close icon" className="h-5" />
        </button>
      </div>

      <div className={`overflow-auto ${isMobile ? 'pr-4' : 'pr-12'}`}>
        <div className="flex flex-col gap-8">
          <div className="border-gray-300 h-[220px] rounded-xl border-2 p-2">
            User Data component<p> (user + about + skills)</p>
          </div>
          <Projects />
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

export default StudentDetailsContent;
