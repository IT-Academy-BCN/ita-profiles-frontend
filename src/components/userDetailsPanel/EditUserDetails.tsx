import About from './about-section/About';
import Skills from './skills-section/Skills';
import Projects from './projects-section/Projects';
import Collaboration from './collaboration-section/Collaboration';
import Bootcamp from './bootcamp-section/Bootcamp';
import Languages from './languages-section/Languages';
import pencil from '../../assets/svg/pencil.svg';

const EditUserDetails = () => {
  return (
    <div className="mb-2 p-2 md:max-h-[83vh] md:w-2/4 md:overflow-hidden md:overflow-y-auto">
      <h3 className="my-8 w-40 text-2xl font-bold text-black-3">Mi perfil</h3>
      {/* About */}
      <About />

      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />

      {/* Skills */}
      <Skills />
      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />

      {/* Proyectos */}
      <Projects />

      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />

      {/* Colaboración */}
      <Collaboration />

      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />

      {/* Datos del bootcamp */}
      <div className="mb-2 flex justify-between gap-1">
        <h4 className="font-bold text-black-3">Datos del bootcamp</h4>
        {/* dejar esto fuera me haria poner todos los handlers en este archivo. */}
        <button className="hover:scale-125">
          <img src={pencil} alt="pencil icon" />
        </button>
      </div>
      <Bootcamp />

      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />

      {/* Idiomas */}
      <Languages />
    </div>
  );
};

export default EditUserDetails;
