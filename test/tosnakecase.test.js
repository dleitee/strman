import toSnakeCase from '../src/tosnakecase'

describe('strman.toSnakeCase', () => {
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
      expect(toSnakeCase(el)).toBe('de_camelize')
    })
  })
})
