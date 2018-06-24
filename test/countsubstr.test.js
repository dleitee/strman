import countSubstr from '../src/countsubstr'

describe('strman.countSubstr', () => {
  test('should be 7', () => {
    const fixtures = ['aaaaaAaaAA', 'faaaAAaaaaAA', 'aaAAaaaaafA', 'AAaaafaaaaAAAA']

    fixtures.forEach((el) => {
      expect(countSubstr(el, 'a')).toBe(7)
    })
  })

  test('should be 7 without caseSensitive', () => {
    const fixtures = ['aaaaaaa', 'faaaaaaa', 'aaaaaaaf', 'aaafaaaa']

    fixtures.forEach((el) => {
      expect(countSubstr(el, 'A', false)).toBe(7)
    })
  })

  test('should be 2 with allowOverlaping', () => {
    expect(countSubstr('aaa', 'aa', true, true)).toBe(2)
  })

  test('should be 1 without allowOverlaping', () => {
    expect(countSubstr('aaa', 'aa', true, false)).toBe(1)
  })
})
