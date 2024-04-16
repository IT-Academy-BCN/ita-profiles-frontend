import { render } from '@testing-library/react'
import StudentCard from '../../../components/students/StudentCard'
import { IStudentList } from '../../../interfaces/interfaces'

const mockStudentCard: IStudentList = {
  id: 'abc123',
  fullname: 'John',
  subtitle: 'Doe',
  photo: 'https://itaperfils.eurecatacademy.org/img/stud_2.png',
  tags: [
    { id: 1, name: 'react' },
    { id: 2, name: 'php' },
  ],
}
describe('StudentCard', () => {
  it('should render the student card component', () => {
    const { container } = render(<StudentCard {...mockStudentCard} />)
    expect(container).toBeInTheDocument()
  })
})
