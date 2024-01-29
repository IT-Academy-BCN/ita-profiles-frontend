import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import dog from '../../assets/img/stud_1.png';
import pencil from '../../assets/svg/pencil.svg';
import plus from '../../assets/svg/plus.svg';
import arrowLeft from '../../assets/svg/arrow-left.svg';
import arrowRight from '../../assets/svg/arrow-right.svg';
import Resources from './resources/Resources';
import Challenges from './challenges/Challenges';
import Projects from './projects/Projects';

const EditUserDetails = () => {
  {
    /* reutilizar los components challenges, projects, resources?
   -- Crear uno de base y luego crear un EditChallenges?
   -- importaria el componente base y agregaría el feature de editar el campo? Ahora es un input.. crear un componente nuevo? no mezclar funcionalidad!!!, uno es solo para leer el otro es editar. Crear. Si el usuario quiere editar sus datos, vuelve aqui? */
  }
  return (
    // Each section should be its own component. mucho texto
    <div className="mb-2 md:max-h-[83vh] md:w-2/4 md:overflow-hidden md:overflow-y-auto">
      <h3 className="my-8 w-40 text-2xl font-bold text-black-3">Mi perfil</h3>
      {/* About section */}
      <div className="flex gap-2">
        {/* user img */}
        <div className="min-w-fit">
          <img
            src={dog}
            alt="image here"
            className="h-full max-w-full rounded-md"
          />
        </div>
        {/* name - rol- links */}
        <div className="flex h-full w-full flex-col">
          <div className="text-lg font-bold text-black">Your Name</div>
          <div>Your role</div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              className="flex items-center gap-1"
            >
              <img src={github} alt="github icon" />
              <span className="text-gray-3">Github</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center gap-1"
            >
              <img src={linkedin} alt="linkedin icon" />
              <span className="text-gray-3">Linkedin</span>
            </a>
          </div>
        </div>
        <button className="min-w-fit hover:scale-125">
          <img src={pencil} alt="pencil icon" />
        </button>
      </div>
      {/* About - description. */}
      <h4 className="mt-6 font-bold text-black-3">About</h4>
      <div className="">
        {/* flex flex-col ???
          Div is empty until we know how to ->
          Integrate the Ver Mas button */}
        <p className="max-h-12 overflow-hidden">
          overflowhidden
          <span className="text-red-500">
            small issue: how to do a see more button at the end of the text!!!
            max-characters?{' '}
          </span>{' '}
          Lorem ipsum dolor, sit asum, dolor sit amet consectetur adipisicing
          elit. Officiis, ipsam!
        </p>
        {/* <button>... ver más</button> */}
      </div>
      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />
      {/* Skills */}
      <div>
        <div className="flex justify-between gap-1">
          <h4 className="font-bold text-black-3">Skills</h4>
          <button className="hover:scale-125">
            <img src={pencil} alt="pencil icon" />
          </button>
        </div>
        <div>
          <button className="flex items-center gap-2 rounded-md bg-gray-4-base px-2 py-1 text-sm ">
            Nueva skill
            <img src={plus} alt="plus icon" />
          </button>
        </div>
      </div>
      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />
      {/* Proyectos */}
      <div className="carousel flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex  gap-1">
            <h4 className="font-bold text-black-3">Proyectos</h4>
            <button className="rounded-md border px-1 text-sm hover:bg-gray-4-base/50">
              Nuevo proyecto
            </button>
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
          <div className="carousel-item">
            <Projects />
          </div>
          <div className="carousel-item">
            <Projects />
          </div>
          <div className="carousel-item">
            <Projects />
          </div>
          <div className="carousel-item">
            <Projects />
          </div>
        </div>
      </div>
      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />
      {/* Colaboración */}
      <div className="mb-2 flex justify-between gap-1">
        <h4 className="font-bold text-black-3">Colaboración</h4>
        <button className="hover:scale-125">
          <img src={pencil} alt="pencil icon" />
        </button>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <Resources />
        <Challenges />
      </div>

      {/* linea divisoria */}
      <div className="my-4 border border-gray-4-base/25" />
      {/* Datos del bootcamp */}
      <div>
        <h4 className="font-bold text-black-3">Datos del bootcamp</h4>
      </div>
    </div>
  );
};

export default EditUserDetails;
