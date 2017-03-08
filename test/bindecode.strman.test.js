import { binDecode } from '../src/strman'

describe('strman.binDecode', () => {
  test('should be a string decoded', () => {
    expect(binDecode('0110111100100010')).toBe('漢')
    expect(binDecode('0000000001000001')).toBe('A')
    expect(binDecode('0000000011000001')).toBe('Á')
    expect(binDecode('00000000010000010000000001000001')).toBe('AA')
  })
})
