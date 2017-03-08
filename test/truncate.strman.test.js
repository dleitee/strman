import { truncate } from '../src/strman'

describe('strman.truncate', () => {
  test('should be strings truncated', () => {
    expect(truncate('foo bar', 0, '.')).toBe('')
    expect(truncate('foo bar', 3, '.')).toBe('fo.')
    expect(truncate('foo bar', 2, '.')).toBe('f.')
    expect(truncate('foo bar', 4, '.')).toBe('foo.')
    expect(truncate('foo bar', 7, '.')).toBe('foo bar')
    expect(truncate('foo bar', 8, '.')).toBe('foo bar')
  })
})
