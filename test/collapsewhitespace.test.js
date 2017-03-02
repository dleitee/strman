import collapseWhitespace from '../src/collapsewhitespace'

describe('strman.collapseWhitespace', () => {
  test('should be foo bar', () => {
    const fixtures = ['foo    bar', '     foo     bar    ', ' foo     bar   ', '    foo     bar ']

    fixtures.forEach((el) => {
      expect(collapseWhitespace(el)).toBe('foo bar')
    })
  })
})
