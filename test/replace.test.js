import replace from '../src/replace'

describe('strman.replace', () => {
  test('should be bar bar', () => {
    const fixtures = ['foo bar']

    fixtures.forEach((el) => {
      expect(replace(el, 'foo', 'bar')).toBe('bar bar')
    })
  })
  test('should be bar bar bar', () => {
    const fixtures = ['foo bar foo']

    fixtures.forEach((el) => {
      expect(replace(el, 'foo', 'bar')).toBe('bar bar bar')
    })
  })
})

describe('strman.replace - caseSensitive', () => {
  test('should be bar bar', () => {
    const fixtures = ['FOO bar']

    fixtures.forEach((el) => {
      expect(replace(el, 'foo', 'bar', false)).toBe('bar bar')
    })
  })
  test('should be bar bar bar', () => {
    const fixtures = ['FOO bar foo']

    fixtures.forEach((el) => {
      expect(replace(el, 'foo', 'bar', false)).toBe('bar bar bar')
    })
  })
})
