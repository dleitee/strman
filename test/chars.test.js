import chars from '../src/chars'

describe('strman.chars', () => {
  it('should be ["t", "i", "t", "l", "e"]', () => {
    const title = 'title'
    expect(chars(title)[0]).toBe('t')
    expect(chars(title)[1]).toBe('i')
    expect(chars(title)[2]).toBe('t')
    expect(chars(title)[3]).toBe('l')
    expect(chars(title)[4]).toBe('e')
  })
})
