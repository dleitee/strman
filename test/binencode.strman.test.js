import { binEncode } from '../src/strman'

describe('strman.binEncode', () => {
  test('should be a binary', () => {
    expect(binEncode('漢')).toBe('0110111100100010')
    expect(binEncode('A')).toBe('0000000001000001')
    expect(binEncode('Á')).toBe('0000000011000001')
    expect(binEncode('AA')).toBe('00000000010000010000000001000001')
  })
})
