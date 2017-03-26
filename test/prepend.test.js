import prepend from '../src/prepend'

describe('strman.prepend', () => {
  test('should be foobar', () => {
    expect(prepend('r', 'f', 'o', 'o', 'b', 'a')).toBe('foobar')
    expect(prepend('foobar')).toBe('foobar')
    expect(prepend('', 'foobar')).toBe('foobar')
    expect(prepend('bar', 'foo')).toBe('foobar')
  })
})
