import compare from '../src/compare'

describe('strman.compare', () => {
  test('should be 1, -1, 0', () => {
    expect(compare('a', 'b')).toBe(-1)
    expect(compare('b', 'a')).toBe(1)
    expect(compare('a', 'a')).toBe(0)
    expect(compare('0', '1')).toBe(-1)
    expect(compare('1', '0')).toBe(1)
    expect(compare('0', '0')).toBe(0)
  })
})
