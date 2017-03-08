import { base64decode } from '../src/strman'

describe('strman.base64decode', () => {
  test('should import base64decode from strman', () => {
    expect(base64decode('RGFuaWVs')).toBe('Daniel')
    expect(base64decode('Zm9v')).toBe('foo')
    expect(base64decode('YmFy')).toBe('bar')
    expect(base64decode('YsOhciE=')).toBe('bár!')
    expect(base64decode('5ryi')).toBe('漢')
  })
})
