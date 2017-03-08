import { insert } from '../src/strman'

describe('strman.insert', () => {
  test('should be foo bar', () => {
    expect(insert('fbar', 'oo ', 1)).toBe('foo bar')
    expect(insert('foo', ' bar', 3)).toBe('foo bar')
    expect(insert('foo bar', 'asadasd', 13)).toBe('foo bar')
  })
})
