import { removeLeft } from '../src/strman'

describe('strman.removeLeft', () => {
  test('should be true', () => {
    const fixtures = ['foobar', 'bar']

    fixtures.forEach((el) => {
      expect(removeLeft(el, 'foo')).toBe('bar')
    })
  })

  test('should be Foobar', () => {
    expect(removeLeft('Foobar', 'foo')).toBe('Foobar')
  })

  test('should be bar', () => {
    expect(removeLeft('Foobar', 'foo', false)).toBe('bar')
  })
})
