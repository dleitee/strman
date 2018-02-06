import { split } from '../src/strman'

describe('strman.split', () => {
  test('should be [f o o]', () => {
    expect(split('foo')).toEqual(['f', 'o', 'o'])
  })
  test('should be [f o]', () => {
    expect(split('foo', '', 2)).toEqual(['f', 'o'])
  })
  test('should be [foo bar]', () => {
    expect(split('foo bar', ' ')).toEqual(['foo', 'bar'])
  })
})
