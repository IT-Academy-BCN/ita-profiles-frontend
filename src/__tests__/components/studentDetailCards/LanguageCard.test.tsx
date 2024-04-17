import { render, screen, waitFor } from '@testing-library/react'
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

jest.mock('../../../context/StudentIdContext', () => ({
  studentUUID: 'mocked-uuid',
}))

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({ data: { languages: mockLanguages } }),
}))

describe('LanguagesCard', () => {
  it('should render the languages correctly', async () => {
    const { container } = render(
      <SelectedStudentProvider>
        <LanguagesCard />
      </SelectedStudentProvider>,
    )
    expect(container).toBeInTheDocument()
    expect(mockLanguages.length).toBe(3)
    expect(screen.getByText('Idiomas')).toBeInTheDocument()
  })

  it('renders ul and li elements for mockLanguages', async () => {
    render(
      <SelectedStudentProvider>
        <LanguagesCard />
      </SelectedStudentProvider>,
    )
    const ulElements = screen.getAllByRole('list')
    const liElements = screen.getAllByRole('listitem')
    expect(ulElements.length).toBeGreaterThan(0)
    expect(liElements.length).toBeGreaterThan(0)
  })

  it('renders language list when languages request is successful', async () => {
    render(
      <SelectedStudentProvider>
        <LanguagesCard />
      </SelectedStudentProvider>,
    )
    await waitFor(() => {
      const languageElements = screen.getAllByTestId('LanguagesCard')
      expect(languageElements.length).toBeGreaterThan(0)

      const languageList = languageElements[0].querySelectorAll('ul li')
      expect(languageList.length).toBe(mockLanguages.length)

      mockLanguages.forEach((mockLanguage) => {
        expect(screen.getByText(mockLanguage.language_name)).toBeInTheDocument()
      })
    })
  })
})
