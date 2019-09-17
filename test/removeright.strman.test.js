import { removeRight } from '../src/strman'

describe('strman.removeRight', () => {
  test('should be true', () => {
    const fixtures = ['foobar', 'foo']

    fixtures.forEach(el => {
      expect(removeRight(el, 'bar')).toBe('foo')
    })

    expect(removeRight('foofoofoobar', 'bar')).toBe('foofoofoo')
    expect(removeRight('foofoofoobar', 'foobar')).toBe('foofoo')
  })
})
