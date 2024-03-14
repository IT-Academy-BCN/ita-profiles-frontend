import React, { useContext } from 'react';
import close from '../../assets/svg/close.svg';
import { SmallScreenContext } from '../../context/SmallScreenContext';
import type { TSmallScreenContext } from '../../interfaces/interfaces';
import Projects from './projects/ProjectsCard';
import Collaboration from './collaborationSection/Collaboration';
import Bootcamp from './bootcampSection/BootcampCard';
import LanguageCard from './languageSection/LanguageCard';

type TUserDetailsContent = {
  handleIsPanelOpen: () => void;
};

const UserDetailsContent: React.FC<TUserDetailsContent> = ({
  handleIsPanelOpen,
}) => {
  const { isMobile }: TSmallScreenContext = useContext(SmallScreenContext);

  return (
    <div
      className={`flex flex-col gap-4 ${
        isMobile && 'modal-box rounded-2xl p-2'
      }`}
    >
      <div className="flex items-center justify-end p-3 md:justify-between">
        <h3 className="text-colortext hidden text-2xl font-bold md:block">
          Detalle Perfil
        </h3>
        <button className="cursor-pointer " onClick={handleIsPanelOpen}>
          <img src={close} alt="close icon" className="h-5" />
        </button>
      </div>

      <div className="overflow-auto pr-3">
        <div className="flex flex-col gap-8">
          <div className="border-gray-300 h-[220px] rounded-xl border-2 p-2">
            User Data component<p> (user + about + skills)</p>
          </div>
          <div className="h-[175px]">
            <Projects />
          </div>
          <Collaboration />
          <Bootcamp />
          <LanguageCard />
          <div className="border-gray-300 h-[70px] rounded-xl border-2 p-2">
            Modality component
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsContent;
