import { containsAny } from '../src/strman'

describe('strman.containsAny', () => {
  test('should be true, caseSensitive = true', () => {
    const fixtures = ['foo bar', 'bar foo', 'foobar']

    fixtures.forEach((el) => {
      expect(containsAny(el, ['foo', 'bar', 'test'], true)).toBe(true)
    })
  })

  test('should be true, caseSensitive = false', () => {
    const fixtures = ['foo bar', 'bar foo', 'foobar']

    fixtures.forEach((el) => {
      expect(containsAny(el, ['FOO', 'BAR', 'Test'], false)).toBe(true)
    })
  })

  test('should be false, caseSensitive = true', () => {
    const fixtures = ['foo', 'bar foo', 'foobar', 'foo']

    fixtures.forEach((el) => {
      expect(containsAny(el, ['FOO', 'BAR', 'TEST'], true)).toBe(false)
    })
  })

  test('should be false, caseSensitive = false', () => {
    const fixtures = ['foo bar', 'bar foo', 'foobar', 'foo']

    fixtures.forEach((el) => {
      expect(containsAny(el, ['dleitee'], false)).toBe(false)
    })
  })
})
