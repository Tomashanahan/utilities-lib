/* eslint-disable @typescript-eslint/ban-ts-comment */
import { capitalizeWords } from '@src/strings/capitalizeWords/capitalizeWords'

describe('capitalizeWords', () => {
  it('should capitalize the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World')
    expect(capitalizeWords('3hello world')).toBe('3hello World')
    expect(capitalizeWords('helloworld')).toBe('Helloworld')
    expect(capitalizeWords('')).toBe('')
  })

  it('should return the received parameter when is not typeof string', () => {
    // @ts-expect-error
    expect(capitalizeWords({})).toStrictEqual({})
    // @ts-expect-error
    expect(capitalizeWords([])).toStrictEqual([])
    // @ts-expect-error
    expect(capitalizeWords(null)).toStrictEqual(null)
    // @ts-expect-error
    expect(capitalizeWords()).toBe()
  })
})
