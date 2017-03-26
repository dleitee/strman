import rightPad from '../src/rightpad'

describe('strman.rightPad', () => {
  test('should be 10000', () => {
    expect(rightPad('1', 5, '00')).toBe('10000')
    expect(rightPad('1', 5, 0)).toBe('10000')
    expect(rightPad('10', 5, 0)).toBe('10000')
    expect(rightPad('100', 5, 0)).toBe('10000')
    expect(rightPad('1000', 5, 0)).toBe('10000')
    expect(rightPad('10000', 5, 0)).toBe('10000')
  })
})
