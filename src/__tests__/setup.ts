/* eslint-disable no-console */
import { expect, afterEach, beforeAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import MockAdapter from 'axios-mock-adapter'
import { AxiosInstance } from 'axios'

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

export const configureMockAdapter = (axiosInstance: AxiosInstance) => {
  const mock = new MockAdapter(axiosInstance, { onNoMatch: 'throwException' })

  beforeAll(() => {
    mock.reset()
  })

  afterEach(() => {
    cleanup()
  })

  return mock
}
