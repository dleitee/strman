import base64decode from '../src/base64decode'

describe('strman.base64decode', () => {
  test('should be a string decoded', () => {
    expect(base64decode('RGFuaWVs')).toBe('Daniel')
    expect(base64decode('Zm9v')).toBe('foo')
    expect(base64decode('YmFy')).toBe('bar')
    expect(base64decode('YsOhciE=')).toBe('bár!')
    expect(base64decode('5ryi')).toBe('漢')
  })
})
