import { removeLeft } from '../src/strman'

describe('strman.removeLeft', () => {
  test('should be true', () => {
    const fixtures = ['foobar', 'bar']

    fixtures.forEach((el) => {
      expect(removeLeft(el, 'foo')).toBe('bar')
    })
  })
})
