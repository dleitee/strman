import toUpperCase from '../touppercase'

export default (value, caseSensitive = true) => {
  if (caseSensitive) {
    return value
  }
  return toUpperCase(value)
}
