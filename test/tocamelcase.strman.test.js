import { toCamelCase } from '../src/strman'

describe('strman.toCamelCase', () => {
  test('should match camelCase', () => {
    const fixtures = [
      'CamelCase',
      'camelCase',
      'Camel case',
      'Camel  case',
      'camel Case',
      'camel-case',
      '-camel--case',
      'camel_case',
      '     camel_case',
    ]

    fixtures.forEach(el => {
      expect(toCamelCase(el)).toBe('camelCase')
    })
  })
})
