import { at } from '../src/strman'

describe('strman.at', () => {
  test('should import at from strman', () => {
    expect(at('foobar', 0)).toBe('f')
    expect(at('ofobar', 1)).toBe('f')
    expect(at('oobarf', -1)).toBe('f')
    expect(at('oobafr', -2)).toBe('f')
  })
})
