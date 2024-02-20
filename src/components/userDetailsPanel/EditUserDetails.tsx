import About from './about-section/About';
import Skills from './skills-section/Skills';
import Projects from './projects-section/Projects';
import Collaboration from './collaboration-section/Collaboration';
import Bootcamp from './bootcamp-section/Bootcamp';
import Languages from './languages-section/Languages';

const EditUserDetails = () => {
  return (
    <div className="mb-2 p-2 md:max-h-[83vh] md:w-2/4 md:overflow-hidden md:overflow-y-auto">
      <h3 className="my-8 w-40 text-2xl font-bold text-black-3">Mi perfil</h3>
      {/* About */}
      <About isEdit={true} />

      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />

      {/* Skills */}
      <Skills isEdit={true} />

      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />

      {/* Proyectos */}
      <Projects isEdit={true} />

      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />

      {/* Colaboración */}
      <Collaboration isEdit={true} />

      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />

      {/* Datos del bootcamp */}
      <Bootcamp isEdit={true} />

      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />

      {/* Idiomas */}
      <Languages isEdit={true} />
    </div>
  );
};

export default EditUserDetails;
