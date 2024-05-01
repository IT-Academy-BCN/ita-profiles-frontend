import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import { FetchStudentsListHome } from '../../../api/FetchStudentsList';
import { StudentFiltersProvider, StudentFiltersContext } from '../../../context/StudentFiltersContext';
import { fireEvent, render } from '@testing-library/react';
import StudentFiltersContent from '../../../components/studentFilters/StudentFiltersContent';
import React, { useContext } from 'react';

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

    // Simula un evento de usuario y verifica que el componente responde como se espera
    fireEvent.click(getByTestId('some-button'));
    expect(getByTestId('some-result')).toBeInTheDocument();
  });

  it('should add and remove role', () => {
    const TestComponent = () => {
      const { selectedRoles, addRole, removeRole } = useContext(StudentFiltersContext) || {};
    
      if (!selectedRoles || !addRole || !removeRole) {
        throw new Error('Context is undefined');
      }
        return (
          <div>
            <button onClick={() => addRole('test')}>Add role</button>
            <button onClick={() => removeRole('test')}>Remove role</button>
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