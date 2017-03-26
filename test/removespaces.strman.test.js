import { removeSpaces } from '../src/strman'

describe('strman.removeSpaces', () => {
  test('should be foobar', () => {
    const fixtures = ['foo bar', 'foo bar ', ' foo bar', ' foo bar ']

    fixtures.forEach((el) => {
      expect(removeSpaces(el)).toBe('foobar')
    })
  })

  test('should be foo-bar', () => {
    const fixtures = ['foo bar']

    fixtures.forEach((el) => {
      expect(removeSpaces(el, '-')).toBe('foo-bar')
    })
  })
})
