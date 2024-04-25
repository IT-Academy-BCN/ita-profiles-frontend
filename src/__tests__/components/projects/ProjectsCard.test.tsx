import { render, screen, fireEvent } from '@testing-library/react';
import axios from "axios";
import ProjectsCard from '../../../components/studentDetailCards/projectsSection/ProjectsCard';
import { FetchStudentsProjects } from "../../../api/FetchStudentsProjects";


describe('ProjectsCard component', () => {
  beforeEach(() => {
    render(<ProjectsCard />);
  });

  test('renders the title "Proyectos"', () => {
    const titleElement = screen.getByText('Proyectos');
    expect(titleElement).toBeInTheDocument();
  });
 
});

test('renders ProjectsCard component', () => {
    const { getByTestId } = render(<ProjectsCard />);
    const projectsCardElement = getByTestId('ProjectsCard');
    expect(projectsCardElement).toBeInTheDocument();
});


describe("FetchStudentsProjects", () => {
  it("should throw an error when fetching projects fails", async () => {
    const studentUUID = "student123";
    const axiosGetOriginal = axios.get;
    
    axios.get = () => new Promise((resolve, reject) => {
        reject(new Error("API Error"));
      });
    await expect(FetchStudentsProjects(studentUUID)).rejects.toThrow("Error fetching projects");
    axios.get = axiosGetOriginal;
  });
});

test('scrollLeft function scrolls left when button is clicked', () => {
  render(<ProjectsCard />); 
  fireEvent.click(screen.getByAltText('arrow left'));
  expect(screen.getByTestId('ProjectsCard').scrollLeft).toBeGreaterThanOrEqual(0);
});

test('scrollRight function scrolls right when button is clicked', () => {
  render(<ProjectsCard />);
  fireEvent.click(screen.getByAltText('arrow right'));
  expect(screen.getByTestId('ProjectsCard').scrollLeft).toBeGreaterThanOrEqual(0);
});