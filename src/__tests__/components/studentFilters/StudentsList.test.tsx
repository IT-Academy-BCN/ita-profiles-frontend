import { test, expect } from 'vitest'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { render, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { StudentFiltersContext } from '../../../context/StudentFiltersContext'
import StudentsList from '../../../components/students/StudentsList'
import { FetchStudentsListHome } from '../../../api/FetchStudentsList'

type StudentFiltersContextType = {
  selectedRoles: string[]
  addRole: (role: string) => void
  removeRole: (role: string) => void
}

// Simulamos la función FetchStudentsListHome
jest.mock('../../../api/FetchStudentsList', () => ({
  __esModule: true,
  FetchStudentsListHome: jest.fn(),
}))

let mock: MockAdapter

mock = new MockAdapter(axios)

test('renders students list and handles state and context changes', async () => {
  const mockContextValue: StudentFiltersContextType = {
    selectedRoles: ['role1', 'role2'],
    addRole: jest.fn(),
    removeRole: jest.fn(),
  }

  // Mock API responses
  mock
    .onGet('https://itaperfils.eurecatacademy.org/api/v1/specialization/list')
    .reply(200, mockContextValue.selectedRoles)

  await act(async () => {
    const { getByText } = render(
      <StudentFiltersContext.Provider value={mockContextValue}>
        <StudentsList />
      </StudentFiltersContext.Provider>
    )

    // Wait for data to be fetched and rendered
    await waitFor(() => {
      mockContextValue.selectedRoles.forEach((role) => {
        expect(getByText(role)).toBeInTheDocument()
      })
    })
  })

  // Verificamos que FetchStudentsListHome se haya llamado
  expect(FetchStudentsListHome).toHaveBeenCalled()

  mock.reset()
})