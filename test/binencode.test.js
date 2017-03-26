import binencode from '../src/binencode'

describe('strman.binencode', () => {
  test('should be a binary', () => {
    expect(binencode('漢')).toBe('0110111100100010')
    expect(binencode('A')).toBe('0000000001000001')
    expect(binencode('Á')).toBe('0000000011000001')
    expect(binencode('AA')).toBe('00000000010000010000000001000001')
  })
})
