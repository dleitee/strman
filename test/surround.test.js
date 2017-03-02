import surround from '../src/surround'

describe('strman.surround', () => {
  test('should be strings surround', () => {
    expect(surround('foo', 'bar')).toBe('barfoobar')
    expect(surround('daniel', '_')).toBe('_daniel_')
    expect(surround('', '>')).toBe('>>')
    expect(surround('bar', '')).toBe('bar')
    expect(surround('f')).toBe('f')
    expect(surround('div', '<', '>')).toBe('<div>')
  })
})
