import { safeTruncate } from '../src/strman'

describe('strman.safeTruncate', () => {
  test('should be strings safeTruncated', () => {
    expect(safeTruncate('foo bar', 0, '.')).toBe('')
    expect(safeTruncate('foo bar', 4, '.')).toBe('foo.')
    expect(safeTruncate('foo bar', 3, '.')).toBe('.')
    expect(safeTruncate('foo bar', 2, '.')).toBe('.')
    expect(safeTruncate('foo bar', 4, '.')).toBe('foo.')
    expect(safeTruncate('foo bar', 7, '.')).toBe('foo bar')
    expect(safeTruncate('foo bar', 8, '.')).toBe('foo bar')
    expect(safeTruncate('A Javascript string manipulation library.', 16, '...')).toBe(
      'A Javascript...'
    )
    expect(safeTruncate('A Javascript string manipulation library.', 15, '...')).toBe(
      'A Javascript...'
    )
    expect(safeTruncate('A Javascript string manipulation library.', 14, '...')).toBe('A...')
  })
})
