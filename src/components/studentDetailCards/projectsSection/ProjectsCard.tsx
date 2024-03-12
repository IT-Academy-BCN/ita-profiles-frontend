import { Github, Dots, ArrowLeft, ArrowRight } from '../../../assets/svg';
import { ArrowRightProjects } from '../../../assets/img';
import { useRef } from 'react';

const ProjectsCard = () => {
  const projects = [
    {
      name: 'ITA-Landing',
      url: 'https://github.com',
      company: 'Barcelona Activa',
      tags: ['PHP', 'Laravel'],
    },
    {
      name: 'mygamelore.com',
      url: 'https://github.com',
      company: 'Freelance',
      tags: ['PHP', 'Laravel + React'],
    },
    {
      name: 'ITA-Profiles',
      url: 'https://github.com',
      company: 'Barcelona Activa',
      tags: ['PHP', 'React'],
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = (carouselRef.current?.firstChild as HTMLElement)
        ?.offsetWidth;
      const scrollAmount = carouselRef.current.scrollLeft - cardWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = (carouselRef.current?.firstChild as HTMLElement)
        ?.offsetWidth;
      const scrollAmount = carouselRef.current.scrollLeft + cardWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="carousel-item flex flex-col">
      <div className="flex h-8">
        <h1 className="text-lg font-bold">Proyectos</h1>
        <div className="ml-auto flex items-end">
          <button onClick={scrollLeft} className="w-6">
            <img src={ArrowLeft} alt="github link" className="w-6" />
          </button>
          <button onClick={scrollRight} className="w-6">
            <img src={ArrowRight} alt="github link" className="w-6" />
          </button>
        </div>
      </div>
      <div ref={carouselRef} className="flex gap-3 overflow-x-hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mt-3 h-32 rounded-xl border border-gray-3 px-4 py-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex w-52 items-center  gap-2">
                <p className="text-lg font-semibold">{project.name}</p>
                <a href={project.url} className="flex items-center">
                  <img src={Github} alt="github link" className="w-6" />
                </a>
              </div>
              <div>
                <button className="hover:scale-12 flex w-6 items-center">
                  <img src={Dots} alt="pencil icon" />
                </button>
              </div>
            </div>
            <p className="text-gray-3">{project.company}</p>
            <div className="mt-4 flex items-center justify-between">
              <p className="rounded-lg border border-black-3 px-2 py-1 font-semibold">
                {project.tags.join(' · ')}
              </p>
              <button className="h-8 rounded-lg border border-black-3 hover:scale-110">
                <img
                  src={ArrowRightProjects}
                  alt="right arrow button"
                  className="h-full"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
