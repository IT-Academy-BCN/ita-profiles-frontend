import React, { useContext } from 'react';
import { Close } from '../../assets/svg';
import { SmallScreenContext } from '../../context/SmallScreenContext';
import type { TSmallScreenContext } from '../../interfaces/interfaces';
import ProjectsCard from '../studentDetailCards/projectsSection/ProjectsCard';
import CollaborationCard from '../studentDetailCards/collaborationSection/CollaborationCard';
import BootcampCard from '../studentDetailCards/bootcampSection/BootcampCard';
import ModalityCard from '../studentDetailCards/modalitySection/modalityCard';
import StudentDataCard from '../studentDetailCards/studentDataSection/StudentDataCard';
import LanguagesCard from '../studentDetailCards/languagesSection/LanguagesCard';

type TStudentDetailsContent = {
  handleIsPanelOpen: () => void;
};

const StudentDetailsContent: React.FC<TStudentDetailsContent> = ({
  handleIsPanelOpen,
}) => {
  const { isMobile }: TSmallScreenContext = useContext(SmallScreenContext);

  return (
    <div
      className={`flex flex-col gap-6 ${isMobile ? 'modal-box rounded-2xl p-2 pl-4' : 'h-full'
        }`}
    >
      <div className="flex items-center justify-end p-3 md:justify-between">
        <h3 className="hidden text-2xl font-bold md:block">Detalle Perfil</h3>
        <button className="cursor-pointer" onClick={handleIsPanelOpen}>
          <img src={Close} alt="close icon" className="h-5" />
        </button>
      </div>

      <div className={`overflow-auto ${isMobile ? 'pr-4' : 'pr-12'}`}>
        <div className="flex flex-col gap-9">
          <StudentDataCard />
          <ProjectsCard />
          <CollaborationCard />
          <BootcampCard />
          <ModalityCard />
          <div className="border-gray-300 h-[100px] rounded-xl border-2 p-2">
            Other Education
            M</div>
          <div className="border-gray-300 h-[100px] rounded-xl border-2 p-2">
            Languages component
          </div>
          </div>
          <LanguagesCard />
          <div className="border-gray-300 h-[70px] rounded-xl border-2 p-2">
            Modality component
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsContent;
