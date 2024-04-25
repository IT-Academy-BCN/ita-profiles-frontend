import { render, screen } from '@testing-library/react';
import ProjectsCard from '../../../components/studentDetailCards/projectsSection/ProjectsCard';
import axios from "axios";
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
    axios.get = (url) => {
      return new Promise((resolve, reject) => {
        reject(new Error("API Error"));
      });
    };

    await expect(FetchStudentsProjects(studentUUID)).rejects.toThrow("Error fetching projects");
    axios.get = axiosGetOriginal;
  });
});