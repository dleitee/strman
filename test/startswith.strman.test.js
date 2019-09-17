import { startsWith } from '../src/strman'

describe('strman.startsWith', () => {
  test('should be true', () => {
    const fixtures = ['foo bar', 'foobar', 'foo']

    fixtures.forEach(el => {
      expect(startsWith(el, 'foo')).toBe(true)
    })

    const fixtures2 = ['afoo barr', 'afoo']

    fixtures2.forEach(el => {
      expect(startsWith(el, 'foo', 1)).toBe(true)
    })
  })
})

describe('strman.startsWith caseSensitive', () => {
  test('should be true', () => {
    const fixtures = ['foo bar', 'foobar', 'foo']

    fixtures.forEach(el => {
      expect(startsWith(el, 'FOO', 0, false)).toBe(true)
    })

    const fixtures2 = ['afoo barr', 'afoo']

    fixtures2.forEach(el => {
      expect(startsWith(el, 'FOO', 1, false)).toBe(true)
    })
  })
})
