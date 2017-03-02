import first from '../src/first'

describe('strman.first', () => {
  test('should be foo', () => {
    const fixtures = ['foo', 'foobar']

    fixtures.forEach((el) => {
      expect(first(el, 3)).toBe('foo')
    })
  })
})
