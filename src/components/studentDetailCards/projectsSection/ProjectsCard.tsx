import { Github, Dots, ArrowLeft, ArrowRight } from '../../../assets/svg'
import { ArrowRightProjects } from '../../../assets/img'
import { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { getStudentProjects } from '../../../api/getStudentProjects'
import { SelectedStudentIdContext } from '../../../context/StudentIdContext'
import { TProject } from '../../../interfaces/interfaces'

const ProjectsCard: React.FC = () => {
  const [projects, setProjects] = useState<TProject[] | null>()

  // we grab the id from the selected student
  const { studentUUID } = useContext(SelectedStudentIdContext)

  useEffect(() => {
    const getProjects = async () => {
      try {
        // we pass the id to the getStudentProjects call
        const studentProjects = await getStudentProjects(studentUUID)
        setProjects(studentProjects)
      } catch (error) {
        throw new Error('Failed to obtain projects')
      }
    }

    if (studentUUID) {
      getProjects()
    }
  }, [studentUUID])

  const carouselRef = useRef<HTMLDivElement>(null)
  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = (carouselRef.current?.firstChild as HTMLElement)
        ?.offsetWidth
      const scrollAmount = carouselRef.current.scrollLeft - cardWidth
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = (carouselRef.current?.firstChild as HTMLElement)
        ?.offsetWidth
      const scrollAmount = carouselRef.current.scrollLeft + cardWidth
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div
      className="carousel-item flex flex-col gap-4"
      data-testid="ProjectsCard"
    >
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Proyectos</h3>
        <div className="h-3 self-end">
          <button type="button" onClick={scrollLeft}>
            <img src={ArrowLeft} alt="arrow left" className="w-5" />
          </button>
          <button type="button" onClick={scrollRight}>
            <img src={ArrowRight} alt="arrow right" className="w-5" />
          </button>
        </div>
      </div>
      <div ref={carouselRef} className="flex gap-3 overflow-x-hidden">
        {projects?.map((project) => (
          <div
            key={project.uuid}
            className="flex flex-col gap-1 rounded-xl border border-gray-3 px-5 py-3.5 "
          >
            <div className="flex items-center justify-between">
              <div className="flex w-48 items-center gap-3">
                <p className="text-md font-semibold">{project.project_name}</p>
                <a href={project.github_url} className="flex items-center">
                  <img src={Github} alt="github link" className="w-6" />
                </a>
              </div>
              <button type="button" className="-mt-1 flex w-6 self-start">
                <img src={Dots} alt="3 dots" />
              </button>
            </div>
            <p className="text-sm text-gray-3">{project.company_name}</p>
            <div className="flex items-center justify-between pt-3">
              <div className="rounded-lg border border-black-3 px-2 py-1 text-sm font-semibold">
                {project.tags.join(' · ')}
              </div>
              <button
                type="button"
                className="h-8 rounded-lg border border-black-3"
              >
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
  )
}

export default ProjectsCard
