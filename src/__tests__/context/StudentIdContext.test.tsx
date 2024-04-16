import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TchildrenProps } from '../../interfaces/interfaces'
import {
  SelectedStudentProvider,
  useStudentIdContext,
} from '../../context/StudentIdContext'

describe('SelectedStudentProvider', () => {
  it('should render children', () => {
    const wrapper = ({ children }: TchildrenProps) => (
      <SelectedStudentProvider>{children}</SelectedStudentProvider>
    )
    const { result } = renderHook(() => useStudentIdContext(), { wrapper })
    expect(result.current.studentUUID)
  })
})
// describe('SelectedStudentIdContext', () => {
// it('should return studentId when a card is selected', () => {})
// it('should store studentId when a card is selected', () => {})
// })
