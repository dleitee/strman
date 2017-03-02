import format from '../src/format'

describe('strman.format', () => {
  test('should be formated strings', () => {
    expect(format('foo bar')).toBe('foo bar')
    expect(format('{0} bar', ['foo'])).toBe('foo bar')
    expect(format('foo {0}', ['bar'])).toBe('foo bar')
    expect(format('foo {0}', ['bar', 'foo'])).toBe('foo bar')
    expect(format('{0} {1}', ['foo', 'bar'])).toBe('foo bar')
    expect(format('{1} {0}', ['bar', 'foo'])).toBe('foo bar')
    expect(format('{1} {0}', ['bar'])).toBe('{1} bar')
    expect(format('{foo} bar', { foo: 'foo' })).toBe('foo bar')
    expect(format('{foo} {bar}', {
      foo: 'foo',
      bar: 'bar',
    })).toBe('foo bar')
  })

  test('should be {0}', () => {
    expect(format('foo bar {0}')).toBe('foo bar {0}')
  })
})
