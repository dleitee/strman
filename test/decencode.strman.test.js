import { decEncode } from '../src/strman'

describe('strman.decEncode', () => {
  test('should be binary', () => {
    expect(decEncode('漢')).toBe('28450')
    expect(decEncode('A')).toBe('00065')
    expect(decEncode('Á')).toBe('00193')
    expect(decEncode('AA')).toBe('0006500065')
  })
})
