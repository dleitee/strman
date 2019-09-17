import { contains } from '../src/strman'

describe('strman.contains', () => {
  test('should be true, caseSensitive = true', () => {
    const fixtures = ['foo bar', 'bar foo', 'foobar', 'foo']

    fixtures.forEach(el => {
      expect(contains(el, 'foo', true)).toBe(true)
    })
  })

  test('should be true, caseSensitive = false', () => {
    const fixtures = ['foo bar', 'bar foo', 'foobar', 'foo']

    fixtures.forEach(el => {
      expect(contains(el, 'FOO', false)).toBe(true)
    })
  })

  test('should be false, caseSensitive = true', () => {
    const fixtures = ['foo bar', 'bar foo', 'foobar', 'foo']

    fixtures.forEach(el => {
      expect(contains(el, 'FOO', true)).toBe(false)
    })
  })

  test('should be false, caseSensitive = false', () => {
    const fixtures = ['foo bar', 'bar foo', 'foobar', 'foo']

    fixtures.forEach(el => {
      expect(contains(el, 'dleitee', false)).toBe(false)
    })
  })
})
