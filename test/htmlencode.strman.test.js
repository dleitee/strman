import { htmlEncode } from '../src/strman'

describe('strman.htmlEncode', () => {
  test('should be encoded html', () => {
    expect(htmlEncode('á')).toBe('&aacute;')
    expect(htmlEncode('áéíóú')).toBe('&aacute;&eacute;&iacute;&oacute;&uacute;')
    expect(htmlEncode('Ш')).toBe('&SHcy;')
    expect(htmlEncode('Ж')).toBe('&ZHcy;')
    expect(htmlEncode('┐')).toBe('&boxdl;')
    expect(htmlEncode('a')).toBe('a')
    expect(htmlEncode('¶')).toBe('¶')
  })
})
