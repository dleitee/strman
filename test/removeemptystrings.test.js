import removeEmptyStrings from '../src/removeemptystrings'

describe('strman.removeEmptyStrings', () => {
  test('should be [\'aa\', \'bb\', \'cc\' ]', () => {
    expect(removeEmptyStrings(['aa', '', 'bb', null, 'cc', undefined])).toMatchObject(['aa', 'bb', 'cc'])
  })
})
