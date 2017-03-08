import { leftPad } from '../src/strman'

describe('strman.leftPad', () => {
  test('should be a string 00001', () => {
    expect(leftPad('1', 5, '00')).toBe('00001')
    expect(leftPad('1', 5, 0)).toBe('00001')
    expect(leftPad('01', 5, 0)).toBe('00001')
    expect(leftPad('001', 5, 0)).toBe('00001')
    expect(leftPad('0001', 5, 0)).toBe('00001')
    expect(leftPad('00001', 5, 0)).toBe('00001')
  })
})
