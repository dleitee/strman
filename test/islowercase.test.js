import isLowerCase from '../src/islowercase'

describe('strman.isLowerCase', () => {
  test('should be true', () => {
    const fixtures = ['', 'foo', 'foobarfoo']

    fixtures.forEach((el) => {
      expect(isLowerCase(el)).toBe(true)
    })
  })
  test('should be false', () => {
    const fixtures = ['fooA', 'foobarfoAo']

    fixtures.forEach((el) => {
      expect(isLowerCase(el)).toBe(false)
    })
  })
})
