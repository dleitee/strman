import { rightTrim } from '../src/strman'

describe('strman.rightTrim', () => {
  test('should be foo bar', () => {
    const fixtures = [' foo bar', ' foo bar ', ' foo bar  ']

    fixtures.forEach((el) => {
      expect(rightTrim(el)).toBe(' foo bar')
    })
  })

  test('should be foo bar without @', () => {
    const fixtures = ['foo bar@', 'foo bar@@@@@']

    fixtures.forEach((el) => {
      expect(rightTrim(el, '@')).toBe('foo bar')
    })
  })
})
