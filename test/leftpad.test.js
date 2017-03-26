import leftpad from '../src/leftpad'

describe('strman.leftpad', () => {
  test('should be a string 00001', () => {
    expect(leftpad('1', 5, '00')).toBe('00001')
    expect(leftpad('1', 5, 0)).toBe('00001')
    expect(leftpad('01', 5, 0)).toBe('00001')
    expect(leftpad('001', 5, 0)).toBe('00001')
    expect(leftpad('0001', 5, 0)).toBe('00001')
    expect(leftpad('00001', 5, 0)).toBe('00001')
  })
})
