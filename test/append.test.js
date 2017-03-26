import append from '../src/append'
import { append as strmanAppend } from '../src/strman'

describe('strman.append', () => {
  test('should be foobar', () => {
    expect(append('f', 'o', 'o', 'b', 'a', 'r')).toBe('foobar')
    expect(append('foobar')).toBe('foobar')
    expect(append('', 'foobar')).toBe('foobar')
  })
})

describe('strman.append', () => {
  test('should import append from strman', () => {
    expect(strmanAppend('f', 'o', 'o', 'b', 'a', 'r')).toBe('foobar')
    expect(strmanAppend('foobar')).toBe('foobar')
    expect(strmanAppend('', 'foobar')).toBe('foobar')
  })
})
