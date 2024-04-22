import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import OtherEducationCard from '../../../../components/studentDetailCards/otherEducationSection/OtherEducationCard'

describe('OtherEducationCard', () => {
  it('should render OtherEducationCard component correctly', () => {
    render(<OtherEducationCard />)
  })
})
