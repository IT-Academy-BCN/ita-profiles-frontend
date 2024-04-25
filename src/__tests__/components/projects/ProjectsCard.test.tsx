import { render, screen } from '@testing-library/react';
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
    // Arrange
    const studentUUID = "student123";

    // Mock axios.get to throw an error
    const axiosGetOriginal = axios.get;
    axios.get = () => new Promise((resolve, reject) => {
        reject(new Error("API Error"));
      });

    // Act & Assert
    await expect(FetchStudentsProjects(studentUUID)).rejects.toThrow("Error fetching projects");

    // Restore the original axios.get function
    axios.get = axiosGetOriginal;
  });
});