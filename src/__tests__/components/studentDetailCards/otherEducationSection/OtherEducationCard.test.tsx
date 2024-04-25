import '@testing-library/jest-dom'
import axios from 'axios'
import OtherEducationCard from '../../../../components/studentDetailCards/otherEducationSection/OtherEducationCard'
import { configureMockAdapter } from '../../../setup'
import { render } from '../../../test-utils'

describe('OtherEducationCard', () => {
  const axiosInstance = axios.create()
  const mock = configureMockAdapter(axiosInstance)

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
