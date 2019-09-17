import { ensureLeft } from '../src/strman'

describe('strman.ensureLeft', () => {
  test('should be foobar', () => {
    const fixtures = ['bar', 'foobar']

    fixtures.forEach(el => {
      expect(ensureLeft(el, 'foo')).toBe('foobar')
    })
  })
})
