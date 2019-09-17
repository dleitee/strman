import containsAll from '../src/containsall'

describe('strman.containsAll', () => {
  test('should be true, if needle = []', () => {
    expect(containsAll('a', [], true)).toBe(false)
  })

  test('should be true, caseSensitive = true', () => {
    const fixtures = ['foo bar', 'bar foo', 'foobar']

    fixtures.forEach(el => {
      expect(containsAll(el, ['foo', 'bar'], true)).toBe(true)
    })
  })

  test('should be true, caseSensitive = false', () => {
    const fixtures = ['foo bar', 'bar foo', 'foobar']

    fixtures.forEach(el => {
      expect(containsAll(el, ['FOO', 'BAR'], false)).toBe(true)
    })
  })

  test('should be false, caseSensitive = true', () => {
    const fixtures = ['foo', 'bar foo', 'foobar', 'foo']

    fixtures.forEach(el => {
      expect(containsAll(el, ['FOO', 'BAR'], true)).toBe(false)
    })
  })

  test('should be false, caseSensitive = false', () => {
    const fixtures = ['foo bar', 'bar foo', 'foobar', 'foo']

    fixtures.forEach(el => {
      expect(containsAll(el, ['foo', 'bar', 'dleitee'], false)).toBe(false)
    })
  })
})
