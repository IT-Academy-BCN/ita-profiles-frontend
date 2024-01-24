import { useContext } from 'react';
import dog from '../../assets/img/stud_1.png';
import close from '../../assets/svg/close.svg';
import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import { SmallScreenContext } from '../../context/smallScreenContext';
import { SmallScreenContextT } from '../../interfaces/interfaces';
import Bootcamp from './bootcamp/Bootcamp';
import Buttons from './buttons/Buttons';
import Challenges from './challenges/Challenges';
import Projects from './projects/Projects';
import Resources from './resources/Resources';

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
        <h3 className="text-2xl font-bold text-colortext">Detalle Perfil</h3>
        <div className="hidden cursor-pointer md:flex">
          <button onClick={handleIsPanelOpen}>
            <img src={close} alt="close icon" />
          </button>
        </div>
      </div>
      {/* user bookmark and message */}
      <div className="flex">
        <div>
          <img src={dog} alt="image here" className="h-full w-full" />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <p className="text-lg font-bold text-black">nombreUsu</p>
            <p className="">Full stack</p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-1"
              >
                <img src={github} alt="github icon" />
                <span className="text-gray-400">Github</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-1"
              >
                <img src={linkedin} alt="linkedin icon" />
                <span className="text-gray-400">Linkedin</span>
              </a>
            </div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Buttons />
          </div>
        </div>
      </div>
      {/* about */}
      <div>
        <h4 className="text-lg font-bold text-colortext">About</h4>
        <p className="my-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro ea
          incidunt cumque perferendis corporis nobis! Deserunt vero quod
          assumenda?
        </p>
        <div>map on each tech.</div>
      </div>
      {/* Proyectos */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-colortext">Proyectos</h4>
          <div>"left""right"</div>
        </div>

        <div className="flex max-w-lg overflow-hidden overflow-y-auto">
          {/* Componente proyectos map! con DaisyUI carrousel? */}
          <Projects />
          <Projects />
          <Projects />
        </div>
      </div>
      {/* Colaboración */}
      <div>
        <h4 className="text-lg font-bold text-colortext">Colaboración</h4>
        <div className="flex flex-col items-center justify-center gap-1 border md:flex-row">
          {/* Recursos subidos componente */}
          <Resources />
          <Challenges />
        </div>
      </div>
      {/* Datos del bootcamp */}
      <div>
        <h4 className="text-lg font-bold text-colortext">Datos del bootcamp</h4>
        <div>
          <Bootcamp />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsContent;
