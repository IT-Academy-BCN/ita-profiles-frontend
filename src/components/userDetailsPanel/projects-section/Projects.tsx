import { useState } from 'react';
import ModalProjects from './ModalProjects';
import arrowLeft from '../../../assets/svg/arrow-left.svg';
import arrowRight from '../../../assets/svg/arrow-right.svg';
import ProjectCard from './ProjectCard';
import { IisEdit } from '../../../interfaces/interfaces';

const Projects = ({ isEdit }: IisEdit) => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleProjectModal = () => {
    setIsProjectModalOpen((prev) => !prev);
  };

  return (
    <div className="carousel flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex  gap-1">
          <h4 className="font-bold text-black-3">Proyectos</h4>
          {isEdit && (
            <button
              className="rounded-md border border-gray-3 px-1 text-sm hover:bg-gray-4-base/50"
              onClick={handleProjectModal}
            >
              Nuevo proyecto
            </button>
          )}
        </div>

        <div className="flex">
          <button className="hover:scale-125">
            <img src={arrowLeft} alt="left arrow icon" />
          </button>
          <button className="hover:scale-125">
            <img src={arrowRight} alt="right arrow icon" />
          </button>
        </div>
      </div>
      {/* projects */}
      <div className="carousel flex gap-2 overflow-hidden overflow-x-auto">
        {/* use this carousel with the arrows like in  https://daisyui.com/components/carousel/ 
        each project should have an unique id and that id should be used dinamically? to the arrows.
      */}
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      {isProjectModalOpen && <ModalProjects onClose={handleProjectModal} />}
    </div>
  );
};

export default Projects;
