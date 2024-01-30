import { useContext } from 'react';
import close from '../../assets/svg/close.svg';

import { SmallScreenContext } from '../../context/smallScreenContext';
import { SmallScreenContextT } from '../../interfaces/interfaces';
import Buttons from './buttons/Buttons';
import Challenges from './collaboration-section/Challenges';
import Resources from './collaboration-section/Resources';
import Bootcamp from './bootcamp-section/Bootcamp';
import About from './about-section/About';
import Projects from './projects-section/Projects';

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

      <About />

      {/* Proyectos */}

      <Projects />
      {/* Colaboración */}
      <div>
        <h4 className="text-colortext text-lg font-bold">Colaboración</h4>
        <div className="flex flex-col items-center justify-center gap-1 md:flex-row">
          {/* Recursos subidos componente */}
          <Resources />
          <Challenges />
        </div>
      </div>
      {/* Datos del bootcamp */}
      <div>
        <h4 className="text-colortext text-lg font-bold">Datos del bootcamp</h4>
        <Bootcamp />
      </div>
    </div>
  );
};

export default UserDetailsContent;
