import { hexDecode } from '../src/strman'

describe('strman.hexDecode', () => {
  test('should be string', () => {
    expect(hexDecode('6f22')).toBe('漢')
    expect(hexDecode('0041')).toBe('A')
    expect(hexDecode('00c1')).toBe('Á')
    expect(hexDecode('00410041')).toBe('AA')
  })
})
