import righttrim from '../src/righttrim'

describe('strman.righttrim', () => {
  test('should be foo bar', () => {
    const fixtures = [' foo bar', ' foo bar ', ' foo bar  ']

    fixtures.forEach((el) => {
      expect(righttrim(el)).toBe(' foo bar')
    })
  })

  test('should be foo bar without @', () => {
    const fixtures = ['foo bar@', 'foo bar@@@@@']

    fixtures.forEach((el) => {
      expect(righttrim(el, '@')).toBe('foo bar')
    })
  })
})
