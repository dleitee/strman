import { first } from '../src/strman'

describe('strman.first', () => {
  test('should be foo', () => {
    const fixtures = ['foo', 'foobar']

    fixtures.forEach(el => {
      expect(first(el, 3)).toBe('foo')
    })
  })
})
