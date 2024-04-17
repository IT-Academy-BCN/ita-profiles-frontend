import { render, screen } from '@testing-library/react'
import type { TLanguage } from '../../../interfaces/interfaces'
import { SelectedStudentProvider } from '../../../context/StudentIdContext'
import LanguagesCard from '../../../components/studentDetailCards/languagesSection/LanguagesCard'

const mockLanguages: TLanguage[] = [
  {
    language_id: '1',
    language_name: 'Español',
    language_level: 'Nativo',
  },
  {
    language_id: '2',
    language_name: 'Català',
    language_level: 'Nativo',
  },
  {
    language_id: '3',
    language_name: 'English',
    language_level: 'Intermedio',
  },
]

describe('LanguagesCard', () => {
  it('should render the languages correctly', async () => {
    render(
      <SelectedStudentProvider>
        <LanguagesCard />
      </SelectedStudentProvider>,
    )

    expect(mockLanguages.length).toBe(3)
    expect(screen.getByText('Idiomas')).toBeInTheDocument()
  })
})
