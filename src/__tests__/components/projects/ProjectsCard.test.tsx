import { render, screen } from '@testing-library/react';
import ProjectsCard from '../../../components/studentDetailCards/projectsSection/ProjectsCard';



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



