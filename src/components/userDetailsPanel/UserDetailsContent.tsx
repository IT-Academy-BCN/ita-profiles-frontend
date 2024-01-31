import { useContext } from 'react';
import close from '../../assets/svg/close.svg';

import { SmallScreenContext } from '../../context/smallScreenContext';
import { SmallScreenContextT } from '../../interfaces/interfaces';
import About from './about-section/About';
import Bootcamp from './bootcamp-section/Bootcamp';
import Buttons from './buttons/Buttons';
import Collaboration from './collaboration-section/Collaboration';
import Projects from './projects-section/Projects';
import Skills from './skills-section/Skills';
import Languages from './languages-section/Languages';

interface Props {
  handleIsPanelOpen: () => void;
}

const UserDetailsContent = ({ handleIsPanelOpen }: Props) => {
  const { isMobile }: SmallScreenContextT = useContext(SmallScreenContext);

  return (
    <div className={` ${isMobile ? 'modal-box bg-white' : 'bg-transparent'}  `}>
      {/* div only seen in small screens */}
      <div className="mb-1 flex items-center justify-between gap-3 md:hidden">
        <div className="flex gap-1">
          <Buttons />
        </div>
        <div className="block cursor-pointer md:hidden ">
          <button onClick={handleIsPanelOpen}>
            <img src={close} alt="close icon" />
          </button>
        </div>
      </div>
      {/* div seen in md or bigger screens */}
      <div className="flex items-center justify-between">
        <h3 className="text-colortext text-2xl font-bold">Detalle Perfil</h3>
        <div className="hidden cursor-pointer md:flex">
          <button onClick={handleIsPanelOpen}>
            <img src={close} alt="close icon" />
          </button>
        </div>
      </div>

      <div className="my-6" />

      {/* About */}
      <About isEdit={false} />
      <div className="my-6" />

      {/* Skills */}
      <Skills isEdit={false} />
      <div className="my-6" />

      {/* Proyectos */}
      <Projects isEdit={false} />
      <div className="my-6" />

      {/* Colaboración */}
      <Collaboration isEdit={false} />
      <div className="my-6" />

      {/* Datos del bootcamp */}
      <Bootcamp isEdit={false} />
      <div className="my-6" />

      {/* Idiomas */}
      <Languages isEdit={false} />
      <div className="my-6" />
    </div>
  );
};

export default UserDetailsContent;
