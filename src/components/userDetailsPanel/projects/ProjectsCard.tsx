import github from '../../../assets/svg/github.svg';
import dots from '../../../assets/svg/three-dots.svg';
import arrowRightProjects from '../../../assets/img/arrow-right-projects.png';
import arrowR from '../../../assets/svg/arrow-right.svg';
import arrowL from '../../../assets/svg/arrow-left.svg';

import { useRef } from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'ITA-Landing',
            url: 'https://github.com',
            company: 'Barcelona Activa',
            tags: ['PHP', 'Laravel']
        },
        {
            name: 'mygamelore.com',
            url: 'https://github.com',
            company: 'Freelance',
            tags: ['PHP', 'Laravel + React']
        },
        {
            name: 'ITA-Profiles',
            url: 'https://github.com',
            company: 'Barcelona Activa',
            tags: ['PHP', 'React']
        }
    ];

    const carouselRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (carouselRef.current) {
            const cardWidth = (carouselRef.current?.firstChild as HTMLElement)?.offsetWidth;
            const scrollAmount = carouselRef.current.scrollLeft - cardWidth;
            carouselRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    
    const scrollRight = () => {
        if (carouselRef.current) {
            const cardWidth = (carouselRef.current?.firstChild as HTMLElement)?.offsetWidth; 
            const scrollAmount = carouselRef.current.scrollLeft + cardWidth;
            carouselRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="carousel-item flex flex-col">
            <div className='flex h-8'>
                <h1 className="text-lg font-bold">Proyectos</h1>
                <div className='flex items-end ml-auto'>
                    <button onClick={scrollLeft} className='w-6'>
                        <img src={arrowL} alt="github link" className='w-6' />
                    </button>
                    <button onClick={scrollRight} className='w-6'>
                        <img src={arrowR} alt="github link" className='w-6' />
                    </button>
                </div>
            </div>
            <div ref={carouselRef} className="flex overflow-x-hidden gap-3">
                {projects.map((project, index) => (
                    <div key={index} className="h-32 rounded-xl border border-gray-3 px-4 py-2 mt-3">
                        <div className="flex items-center justify-between">
                            <div className='flex items-center gap-2  w-52'>
                                <p className="font-semibold text-lg">{project.name}</p>
                                <a href={project.url} className="flex items-center">
                                    <img src={github} alt="github link" className='w-6' />
                                </a>
                            </div>
                            <div>
                                <button className="flex w-6 items-center hover:scale-12">
                                    <img src={dots} alt="pencil icon" />
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-3">{project.company}</p>
                        <div className="flex items-center justify-between mt-4">
                            <p className="rounded-lg border border-black-3 px-2 py-1 font-semibold">{project.tags.join(' · ')}</p>
                            <button className="h-8 rounded-lg border border-black-3 hover:scale-110">
                                <img
                                    src={arrowRightProjects}
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

export default Projects;