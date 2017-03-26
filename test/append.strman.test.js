import { append } from '../src/strman'

describe('strman.append', () => {
  test('should import append from strman', () => {
    expect(append('f', 'o', 'o', 'b', 'a', 'r')).toBe('foobar')
    expect(append('foobar')).toBe('foobar')
    expect(append('', 'foobar')).toBe('foobar')
  })
})
