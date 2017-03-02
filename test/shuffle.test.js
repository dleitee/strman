import shuffle from '../src/shuffle'

describe('strman.shuffle', () => {
  test('should be strings shuffle', () => {
    expect(length(shuffle('foo'))).toBe(3)
    expect(length(shuffle('daniel'))).toBe(6)
    expect(shuffle('')).toBe('')
    expect(shuffle('b')).toBe('b')
  })
})
