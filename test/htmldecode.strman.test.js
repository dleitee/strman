import { htmlDecode } from '../src/strman'

describe('strman.htmlDecode', () => {
  test('should be decoded html', () => {
    expect(htmlDecode('&aacute;')).toBe('\u00E1')
    expect(htmlDecode('&SHcy;')).toBe('Ш')
    expect(htmlDecode('&ZHcy;')).toBe('Ж')
    expect(htmlDecode('&boxdl;')).toBe('┐')
    expect(htmlDecode('&boxdlaaa;')).toBe('&boxdlaaa;')
  })
})
