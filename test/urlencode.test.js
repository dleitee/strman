import urlEncode from '../src/urlencode'

describe('strman.slice', () => {
  test('should be foobar', () => {
    expect(urlEncode('https://web.whatsapp.com/')).toBe('https://web.whatsapp.com/')
    expect(urlEncode('https://web.whatsapp.com/?text=áéíóú')).toBe(
      'https://web.whatsapp.com/?text=%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA'
    )
    expect(urlEncode('https://web.whatsapp.com/?text= a')).toBe(
      'https://web.whatsapp.com/?text=%20a'
    )
  })
})
