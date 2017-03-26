import { hexEncode } from '../src/strman'

describe('strman.hexEncode', () => {
  test('should be hexadecimal', () => {
    expect(hexEncode('漢')).toBe('6f22')
    expect(hexEncode('A')).toBe('0041')
    expect(hexEncode('Á')).toBe('00c1')
    expect(hexEncode('AA')).toBe('00410041')
  })
})
