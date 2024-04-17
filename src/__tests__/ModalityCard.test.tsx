import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ModalityCard from '../components/studentDetailCards/modalitySection/modalityCard'
import { SelectedStudentProvider } from '../context/StudentIdContext'

describe('ModalityCard', () => {
  beforeEach(() => {
    render(
      <SelectedStudentProvider>
        <ModalityCard />
      </SelectedStudentProvider>,
    )
  })
  test('should show "Modalidad" all the time', () => {
    expect(screen.getByText('Modalidad')).toBeInTheDocument()
  })
  // test('should show loading message', () => { expect(screen.getByText('Loading modality data...')).toBeInTheDocument()})

  test('should render the ModalityCard component with an image next to the modality text', () => {
    expect(
      screen.getByAltText(/remoto|presencial|hibrido/i),
    ).toBeInTheDocument()
  })
})
