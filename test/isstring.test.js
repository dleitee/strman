import isString from '../src/isstring'

describe('strman.isString', () => {
  test('should be false', () => {
    const fixtures = [1, false, 1.2, [], {}]
    fixtures.forEach(el => {
      expect(isString(el)).toBe(false)
    })
  })

  test('should be true', () => {
    const fixtures = ['string', '', 'áéíóú']
    fixtures.forEach(el => {
      expect(isString(el)).toBe(true)
    })
  })
})
