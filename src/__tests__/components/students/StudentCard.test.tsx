import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import StudentCard from '../../../components/students/StudentCard'
import { IStudentList } from '../../../interfaces/interfaces'
import { store } from '../../../store/store'

// We dont need to import anything like describe, it etc from vitest
// We also dont need to import anything from react-testing-library
// Kevin already setted it up so it doesnt become repetitive and you
// Just do the tests...
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
    const { container } = render(
      <Provider store={store}>
        <StudentCard {...mockStudentCard} />
      </Provider>,
    )
    expect(container).toBeInTheDocument()
  })
})
