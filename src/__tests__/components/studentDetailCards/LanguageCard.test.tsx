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

  it('check the map aover mockLanguages', () => {
    render(
      <div className="flex flex-col gap-1">
        {mockLanguages &&
          mockLanguages.map((mockLanguage) => (
            <ul key={mockLanguage.language_id} className="flex flex-col">
              <li className="text-sm font-semibold text-black-2">
                {mockLanguage.language_name}
              </li>
            </ul>
          ))}
      </div>,
    )

    expect(screen.getByText('Español')).toBeInTheDocument()
    expect(screen.getByText('Català')).toBeInTheDocument()
    expect(screen.getByText('English')).toBeInTheDocument()
  })
})
