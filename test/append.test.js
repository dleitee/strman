import append from '../src/append'

describe('strman.append', () => {
  test('should be foobar', () => {
    expect(append('f', 'o', 'o', 'b', 'a', 'r')).toBe('foobar')
    expect(append('foobar')).toBe('foobar')
    expect(append('', 'foobar')).toBe('foobar')
  })
})
