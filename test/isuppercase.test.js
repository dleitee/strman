import isUpperCase from '../src/isuppercase'

describe('strman.isUpperCase', () => {
  test('should be true', () => {
    const fixtures = ['', 'FOO', 'FOOBARFOO']

    fixtures.forEach((el) => {
      expect(isUpperCase(el)).toBe(true)
    })
  })
  test('should be false', () => {
    const fixtures = ['FOOa', 'FOOBARFOOa']

    fixtures.forEach((el) => {
      expect(isUpperCase(el)).toBe(false)
    })
  })
})
