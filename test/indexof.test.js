import indexOf from '../src/indexof'

describe('strman.indexOf', () => {
  test('should be true', () => {
    let value = 'foobar';
    expect(indexOf(value, 'f')).toBe(0)
    expect(indexOf(value, 'o')).toBe(1)
    expect(indexOf(value, 'b')).toBe(3)
    expect(indexOf(value, 'a')).toBe(4)
    expect(indexOf(value, 'r')).toBe(5)
    expect(indexOf(value, 't')).toBe(-1)
  })
})

describe('strman.indexOf caseSensitive', () => {
  test('should be true', () => {
    let value = 'FOOBAR';
    expect(indexOf(value, 'f', undefined, false)).toBe(0)
    expect(indexOf(value, 'o', undefined, false)).toBe(1)
    expect(indexOf(value, 'b', undefined, false)).toBe(3)
    expect(indexOf(value, 'a', undefined, false)).toBe(4)
    expect(indexOf(value, 'r', undefined, false)).toBe(5)
    expect(indexOf(value, 't', undefined, false)).toBe(-1)
  })
})
