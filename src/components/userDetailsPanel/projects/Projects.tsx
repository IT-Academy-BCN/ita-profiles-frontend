import github from '../../../assets/svg/github.svg';
import pencil from '../../../assets/svg/pencil.svg';
import arrowRightProjects from '../../../assets/img/arrow-right-projects.png';

const Projects = () => {
  return (
    <div className="h-32 w-64 rounded-xl border p-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold ">ITA-Landing</p>
        <div className="flex items-start">
          <a href="https://github.com" className="flex h-8 items-center">
            <img src={github} alt="github link" />
          </a>
          <button className="flex h-8 items-center hover:scale-125">
            <img src={pencil} alt="pencil icon" />
          </button>
        </div>
      </div>
      <p className="text-gray-3">Barcelona Activa</p>
      <div className="flex items-center justify-between">
        <p className="rounded-lg border px-1">PHP · Laravel</p>
        <button className="h-8 rounded-lg border hover:scale-110">
          <img
            src={arrowRightProjects}
            alt="right arrow button"
            className="h-full"
          />
        </button>
      </div>
    </div>
  );
};

export default Projects;
