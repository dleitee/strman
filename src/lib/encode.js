import chars from '../chars'
import leftPad from '../leftpad'

export default (value, length, base) =>
  chars(value)
    .map(data => leftPad(data.charCodeAt(0).toString(base), length, '0'))
    .join('')
