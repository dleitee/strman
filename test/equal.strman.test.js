import { equal } from '../src/strman'

describe('strman.equal', () => {
  test('should be true or false', () => {
    expect(equal('a', 'b')).toBe(false)
    expect(equal('a', 'a')).toBe(true)
    expect(equal('0', 0)).toBe(false)
  })
})
