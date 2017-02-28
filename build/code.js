import prefix from './prefix'
import { getFileName, getDefault } from './dependecies'

const getRequires = (dependencies = []) => {
  if (dependencies.length) {
    return dependencies.map(
      dependency => `var ${getDefault(dependency)} = require('${prefix(getFileName(dependency))}')`,
    ).join('\n')
  }
  return ''
}

export default (code, dependencies) => `${getRequires(dependencies)}${code}`
