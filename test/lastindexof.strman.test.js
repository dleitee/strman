import { lastIndexOf } from '../src/strman'

describe('strman.lastIndexOf', () => {
  test('should be true', () => {
    const value = 'foobarfoobar'
    expect(lastIndexOf(value, 'f')).toBe(6)
    expect(lastIndexOf(value, 'o')).toBe(8)
    expect(lastIndexOf(value, 'b')).toBe(9)
    expect(lastIndexOf(value, 'a')).toBe(10)
    expect(lastIndexOf(value, 'r')).toBe(11)
    expect(lastIndexOf(value, 't')).toBe(-1)
  })
})

describe('strman.lastIndexOf caseSensitive', () => {
  test('should be true', () => {
    const value = 'foobarfoobar'
    expect(lastIndexOf(value, 'F', undefined, false)).toBe(6)
    expect(lastIndexOf(value, 'O', undefined, false)).toBe(8)
    expect(lastIndexOf(value, 'B', undefined, false)).toBe(9)
    expect(lastIndexOf(value, 'A', undefined, false)).toBe(10)
    expect(lastIndexOf(value, 'R', undefined, false)).toBe(11)
    expect(lastIndexOf(value, 'T', undefined, false)).toBe(-1)
  })
})
