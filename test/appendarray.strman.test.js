import { appendArray } from '../src/strman'

describe('strman.appendArray', () => {
  test('should import appendArray from strman', () => {
    expect(appendArray('f', ['o', 'o', 'b', 'a', 'r'])).toBe('foobar')
    expect(appendArray('foobar')).toBe('foobar')
    expect(appendArray('', ['foobar'])).toBe('foobar')
  })
})
