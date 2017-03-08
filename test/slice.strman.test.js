import { slice } from '../src/strman'

describe('strman.slice', () => {
  test('should be foobar', () => {
    expect(slice('foobar', 0, 6)).toBe('foobar')
    expect(slice('foobar', 1, 5)).toBe('ooba')
    expect(slice('foobar', 2, 4)).toBe('ob')
  })
})
