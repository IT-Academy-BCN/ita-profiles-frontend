import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import OtherEducationCard from '../../../../components/studentDetailCards/otherEducationSection/OtherEducationCard'
import { mock } from '../../../setup'

describe('OtherEducationCard', () => {
  it('should render OtherEducationCard component correctly', () => {
    render(<OtherEducationCard />)
  })
  it('should fetch the student Additional Training correctly', async () => {
    const baseApi = 'https://itaperfils.eurecatacademy.org'
    const studentUUID = 'abc'

    const additionalTraining = [
      {
        uuid: '123',
        course_name: 'React Bootcamp',
        study_center: 'IT academy',
        course_beginning_year: 2023,
        course_ending_year: 2024,
        duration_hrs: 100,
      },
    ]

    mock
      .onGet(`${baseApi}/api/v1/students/${studentUUID}/additionaltraining`)
      .reply(200, { additionalTraining })
  })
})
