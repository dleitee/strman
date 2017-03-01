import appendArray from '../src/appendarray'

describe('strman.appendArray', () => {
  test('should be foobar', () => {
    expect(appendArray('f', ['o', 'o', 'b', 'a', 'r'])).toBe('foobar')
    expect(appendArray('foobar')).toBe('foobar')
    expect(appendArray('', ['foobar'])).toBe('foobar')
  })
})
