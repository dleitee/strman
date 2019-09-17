import { urlDecode } from '../src/strman'

describe('strman.slice', () => {
  test('should be foobar', () => {
    expect(urlDecode('https://web.whatsapp.com/')).toBe('https://web.whatsapp.com/')
    expect(urlDecode('https://web.whatsapp.com/?text=%20a')).toBe(
      'https://web.whatsapp.com/?text= a'
    )
    expect(urlDecode('https://web.whatsapp.com/?text=%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA')).toBe(
      'https://web.whatsapp.com/?text=áéíóú'
    )
  })
})
