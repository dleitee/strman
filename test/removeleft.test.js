import removeLeft from '../src/removeleft'

describe('strman.removeLeft', () => {
  test('should be true', () => {
    const fixtures = ['foobar', 'bar']

    fixtures.forEach((el) => {
      expect(removeLeft(el, 'foo')).toBe('bar')
    })
  })
})
