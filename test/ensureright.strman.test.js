import { ensureRight } from '../src/strman'

describe('strman.ensureRight', () => {
  test('should be foobar', () => {
    const fixtures = ['foo', 'foobar']

    fixtures.forEach((el) => {
      expect(ensureRight(el, 'bar')).toBe('foobar')
    })
  })
})
