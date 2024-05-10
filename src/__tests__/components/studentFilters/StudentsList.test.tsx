import { render, act } from '@testing-library/react';
import { StudentFiltersContext } from '../../../context/StudentFiltersContext';
import StudentsList from '../../../components/students/StudentsList';
import { FetchStudentsListHome } from '../../../api/FetchStudentsList';

type StudentFiltersContextType = {
  selectedRoles: string[];
  addRole: (role: string) => void;
  removeRole: (role: string) => void;
};

// Simulamos la función FetchStudentsListHome
jest.mock('../../../api/FetchStudentsList', () => ({
  __esModule: true,
  FetchStudentsListHome: jest.fn(),
}));

describe('StudentsList', () => {
  it('renders students list and handles state and context changes', async () => {
    const mockContextValue: StudentFiltersContextType = {
      selectedRoles: ['role1', 'role2'], // Aquí puedes poner los roles que quieras
      addRole: jest.fn(),
      removeRole: jest.fn(),
    };

    await act(async () => {
      render(
        <StudentFiltersContext.Provider value={mockContextValue}>
          <StudentsList />
        </StudentFiltersContext.Provider>
      );
    });

    // Verificamos que FetchStudentsListHome se haya llamado
    expect(FetchStudentsListHome).toHaveBeenCalled();

    // Aquí puedes continuar con tus aserciones y simulaciones de eventos
  });
});