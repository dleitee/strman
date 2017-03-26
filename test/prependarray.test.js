import prependArray from '../src/prependarray'

describe('strman.prependArray', () => {
  test('should be foobar', () => {
    expect(prependArray('r', ['f', 'o', 'o', 'b', 'a'])).toBe('foobar')
    expect(prependArray('foobar')).toBe('foobar')
    expect(prependArray('', ['foobar'])).toBe('foobar')
    expect(prependArray('bar', ['foo'])).toBe('foobar')
  })
})
