import { reverse } from '../src/strman'

describe('strman.reverse', () => {
  test('should be strings reverse', () => {
    expect(reverse('foo')).toBe('oof')
    expect(reverse('daniel')).toBe('leinad')
    expect(reverse('')).toBe('')
    expect(reverse('bar')).toBe('rab')
    expect(reverse('foo_')).toBe('_oof')
    expect(reverse('f')).toBe('f')
  })
})
