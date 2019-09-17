import toKebabCase from '../src/tokebabcase'

describe('strman.toKebabCase', () => {
  test('should match de_camelize', () => {
    const fixtures = [
      'deCamelize',
      'de-Camelize',
      'de camelize',
      'de  camelize',
      'de Camelize',
      'de-camelize',
      '-de--camelize',
      'de_camelize',
      '     de_camelize',
    ]

    fixtures.forEach(el => {
      expect(toKebabCase(el)).toBe('de-camelize')
    })
  })
})
