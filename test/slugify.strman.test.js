import { slugify } from '../src/strman'

describe('strman.slugfiy', () => {
  test('should be foo-bar', () => {
    const fixtures = ['foo bar', 'foo bar.', 'foo bar ', ' foo bar', ' foo bar ', 'foo------bar', 'fóõ bár', 'foo ! bar', 'foo ~~ bar', 'foo     bar', 'FOO     bar']

    fixtures.forEach((el) => {
      expect(slugify(el)).toBe('foo-bar')
    })
  })
  test('should be foo-and-bar', () => {
    const fixtures = ['foo&bar', 'foo&bar.', 'foo&bar ', ' foo&bar', ' foo&bar ', 'foo&bar', 'fóõ-and---bár', 'foo  &    bar', 'FOO  &   bar']

    fixtures.forEach((el) => {
      expect(slugify(el)).toBe('foo-and-bar')
    })
  })

  test('should be throw', () => {
    const fixtures = [1, [], {}, 1.2, false, true]

    fixtures.forEach((el) => {
      expect(() => {
        slugify(el)
      }).toThrow(Error)
    })
  })
})
