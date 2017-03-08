import { endsWith } from '../src/strman'

describe('strman.endsWith', () => {
  test('should be true', () => {
    const fixtures = ['foo bar', 'bar']

    fixtures.forEach((el) => {
      expect(endsWith(el, 'bar')).toBe(true)
    })

    const fixtures2 = ['foo barr', 'barr']

    fixtures2.forEach((el) => {
      expect(endsWith(el, 'bar', el.length - 1)).toBe(true)
    })
  })
})

describe('strman.endsWith caseSensitive', () => {
  test('should be true', () => {
    const fixtures = ['foo bar', 'bar']

    fixtures.forEach((el) => {
      expect(endsWith(el, 'BAR', null, false)).toBe(true)
    })

    const fixtures2 = ['foo barr', 'barr']

    fixtures2.forEach((el) => {
      expect(endsWith(el, 'BAR', el.length - 1, false)).toBe(true)
    })
  })
})
