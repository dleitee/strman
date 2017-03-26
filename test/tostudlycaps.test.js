import toStudlyCaps from '../src/tostudlycaps'

describe('strman.toStudlyCaps', () => {
  test('should match DeCamelize', () => {
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

    fixtures.forEach((el) => {
      expect(toStudlyCaps(el)).toBe('DeCamelize')
    })
  })
  test('should match DeCamelize', () => {
    const fixtures = [
      `
      1`,
    ]

    fixtures.forEach((el) => {
      expect(toStudlyCaps(el)).toBe('1')
    })
  })
})
