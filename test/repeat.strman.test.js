import { repeat } from '../src/strman'

describe('strman.repeat', () => {
  test('should be 1 repeated', () => {
    expect(repeat('1', 1)).toBe('1')
    expect(repeat('1', 2)).toBe('11')
    expect(repeat('1', 3)).toBe('111')
    expect(repeat('1', 4)).toBe('1111')
    expect(repeat('1', 5)).toBe('11111')
  })
})
