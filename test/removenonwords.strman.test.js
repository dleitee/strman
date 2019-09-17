import { removeNonWords } from '../src/strman'

describe('strman.removeNonWords', () => {
  test('should be foobar', () => {
    const fixtures = ['foo bar', 'foo&bar-']

    fixtures.forEach(el => {
      expect(removeNonWords(el)).toBe('foobar')
    })
  })
})
