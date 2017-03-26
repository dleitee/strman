import bindecode from '../src/bindecode'

describe('strman.bindecode', () => {
  test('should be a string decoded', () => {
    expect(bindecode('0110111100100010')).toBe('漢')
    expect(bindecode('0000000001000001')).toBe('A')
    expect(bindecode('0000000011000001')).toBe('Á')
    expect(bindecode('00000000010000010000000001000001')).toBe('AA')
  })
})
