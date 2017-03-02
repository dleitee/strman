import lefttrim from '../src/lefttrim'

describe('strman.lefttrim', () => {
  test('should be foo bar', () => {
    const fixtures = ['foo bar ', ' foo bar ', '  foo bar ']

    fixtures.forEach((el) => {
      expect(lefttrim(el)).toBe('foo bar ')
    })
  })

  test('should be foo bar without @', () => {
    const fixtures = ['foo bar@', '@foo bar@', '@@@foo bar@']

    fixtures.forEach((el) => {
      expect(lefttrim(el, '@')).toBe('foo bar@')
    })
  })

  test('should be foo bar without @ and with #', () => {
    const fixtures = ['@#foo bar@', '@#foo bar@', '@@#foo bar@']

    fixtures.forEach((el) => {
      expect(lefttrim(el, '@')).toBe('#foo bar@')
    })
  })
})
