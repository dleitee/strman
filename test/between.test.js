import between from '../src/between'

describe('strman.between', () => {
  test('should be ["foo"]', () => {
    expect(between('[foo]', '[', ']')[0]).toBe('foo')
    expect(between('<span>foo</span>', '<span>', '</span>')[0]).toBe('foo')
    expect(between('<span>bar</span><span>foo</span>', '<span>', '</span>')[0]).toBe('bar')
    expect(between('<span>bar</span><span>foo</span>', '<span>', '</span>')[1]).toBe('foo')
  })
})
