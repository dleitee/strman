import toStudlyCaps from '../src/tostudlycaps'

describe('strman.toStudlyCaps', () => {
  test('should match DeCamelize', () => {
    const fixtures = ['deCamelize', 'de-Camelize', 'de camelize', 'de  camelize', 'de Camelize', 'de-camelize', '-de--camelize', 'de_camelize', '     de_camelize']

    fixtures.forEach((el) => {
      expect(toStudlyCaps(el)).toBe('DeCamelize')
    })
  })
})
