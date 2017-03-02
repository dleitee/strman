import decDecode from '../src/decdecode'

describe('strman.decDecode', () => {
  test('should be string', () => {
    expect(decDecode('28450')).toBe('漢')
    expect(decDecode('00065')).toBe('A')
    expect(decDecode('00193')).toBe('Á')
    expect(decDecode('0006500065')).toBe('AA')
  })
})
