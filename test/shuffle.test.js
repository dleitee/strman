import shuffle from '../src/shuffle'

describe('strman.shuffle', () => {
  test('should be strings shuffle', () => {
    expect(shuffle('foo').length).toBe(3)
    expect(shuffle('daniel').length).toBe(6)
    expect(shuffle('')).toBe('')
    expect(shuffle('b')).toBe('b')
  })
})
