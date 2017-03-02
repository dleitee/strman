import inequal from '../src/inequal'

describe('strman.inequal', () => {
  test('should be true or false', () => {
    expect(inequal('a', 'b')).toBe(true)
    expect(inequal('a', 'a')).toBe(false)
    expect(inequal('0', 0)).toBe(true)
  })
})
