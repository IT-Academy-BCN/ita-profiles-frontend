import { Github, Dots, ArrowLeft, ArrowRight } from '../../../assets/svg';
import { ArrowRightProjects } from '../../../assets/img';
import { useRef } from 'react';

const ProjectsCard: React.FC = () => {
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
    <div className="carousel-item flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold">Proyectos</h1>
        <div className="h-3 self-end">
          <button onClick={scrollLeft}>
            <img src={ArrowLeft} alt="arrow left" className="w-5" />
          </button>
          <button onClick={scrollRight}>
            <img src={ArrowRight} alt="arrow right" className="w-5" />
          </button>
        </div>
      </div>
      <div ref={carouselRef} className="flex gap-3 overflow-x-hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 rounded-xl border border-gray-3 px-5 py-3.5 "
          >
            <div className="flex items-center justify-between">
              <div className="flex w-48 items-center gap-3">
                <p className="text-md font-semibold">{project.name}</p>
                <a href={project.url} className="flex items-center">
                  <img src={Github} alt="github link" className="w-6" />
                </a>
              </div>
              <button className="-mt-1 flex w-6 self-start">
                <img src={Dots} alt="3 dots" />
              </button>
            </div>
            <p className="text-sm text-gray-3">{project.company}</p>
            <div className="flex items-center justify-between pt-3">
              <div className="text-sm rounded-lg border border-black-3 px-2 py-1 font-semibold">
                {project.tags.join(' · ')}
              </div>
              <button className="h-8 rounded-lg border border-black-3">
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
