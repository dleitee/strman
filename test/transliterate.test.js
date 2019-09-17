import transliterate from '../src/transliterate'

describe('strman.transliterate', () => {
  test('should be foo bar', () => {
    const fixtures = ['fóõ bár']

    fixtures.forEach(el => {
      expect(transliterate(el)).toBe('foo bar')
    })
  })
})
