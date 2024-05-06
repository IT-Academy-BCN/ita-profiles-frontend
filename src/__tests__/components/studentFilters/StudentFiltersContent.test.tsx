import React, { useContext } from 'react';
import axios from 'axios';
import { fireEvent, render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import { FetchStudentsListHome } from '../../../api/FetchStudentsList';
import { StudentFiltersProvider, StudentFiltersContext } from '../../../context/StudentFiltersContext';
import StudentFiltersContent from '../../../components/studentFilters/StudentFiltersContent';

const mockAxios = new MockAdapter(axios);

describe('FetchStudentsListHome function', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should fetch student list for home', async () => {
    const selectedRoles = ['role1', 'role2'];

    const expectedUrl = 'https://itaperfils.eurecatacademy.org/api/v1/student/list/for-home?specialization=role1,role2';

    const mockData = [{ id: 1, name: 'Student 1' }, { id: 2, name: 'Student 2' }];

    mockAxios.onGet(expectedUrl).reply(200, mockData);

    const result = await FetchStudentsListHome(selectedRoles);

    expect(result).toEqual(mockData);
  });

  it('should handle errors', async () => {
    const selectedRoles: string[] = [];

    const expectedUrl = 'https://itaperfils.eurecatacademy.org/api/v1/student/list/for-home';

    mockAxios.onGet(expectedUrl).reply(500);

    await expect(FetchStudentsListHome(selectedRoles)).rejects.toThrow();
  });
});

describe('StudentFiltersContent component', () => {
  it('renders StudentFiltersContent and handles user events', () => {
    const { getByTestId } = render(
      <StudentFiltersProvider>
        <StudentFiltersContent />
      </StudentFiltersProvider>
    );
    
    // Verifica que el componente se renderiza correctamente
    expect(getByTestId('student-filters-content')).toBeInTheDocument();

    // Supongamos que hay un checkbox que, cuando se marca o desmarca, cambia algún texto en el componente.
    // Primero, obtenemos el checkbox y el elemento de texto por sus data-testid
    const checkbox = getByTestId('my-checkbox');
    const textElement = getByTestId('my-text');

    // Verificamos que el texto inicial es el esperado
    expect(textElement.textContent).toBe('Texto cuando el checkbox no está marcado');

    // Marcamos el checkbox
    fireEvent.change(checkbox, { target: { checked: true } });

    // Verificamos que el texto ha cambiado como resultado de marcar el checkbox
    expect(textElement.textContent).toBe('Texto cuando el checkbox está marcado');

    // Desmarcamos el checkbox
    fireEvent.change(checkbox, { target: { checked: false } });

    // Verificamos que el texto ha vuelto al estado inicial
    expect(textElement.textContent).toBe('Texto cuando el checkbox no está marcado');
  });

  it('should add and remove role', () => {
    const TestComponent = () => {
      const { selectedRoles, addRole, removeRole } = useContext(StudentFiltersContext) || {};
    
      if (!selectedRoles || !addRole || !removeRole) {
        throw new Error('Context is undefined');
      }
        return (
          <div data-testid="student-filters-content">
            <button type="button" onClick={() => addRole('test')}>Add role</button>
            <button type="button" onClick={() => removeRole('test')}>Remove role</button>
            <div>{selectedRoles.join(',')}</div>
          </div>
        );
      };

      const { getByText, queryByText } = render(
        <StudentFiltersProvider>
          <TestComponent />
        </StudentFiltersProvider>
      );

      fireEvent.click(getByText('Add role'));
      expect(getByText('test')).toBeInTheDocument();

      fireEvent.click(getByText('Remove role'));
      expect(queryByText('test')).not.toBeInTheDocument();
    });
});