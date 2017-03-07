import prefix from './prefix'

export const getFileName = dependency => prefix(dependency.file.replace(/.+\/(lib\/)*/, ''))

export const getRequires = dependencies => dependencies.reduce((requires, file) => {
  const newRequires = file.specifiers.map((dependency) => {
    if (dependency.type === 'ImportSpecifier') {
      return `var ${dependency.name} = require('${getFileName(file)}').${dependency.name}`
    }
    return `var ${dependency.name} = require('${getFileName(file)}')`
  }).join('\n')
  return `${requires}${newRequires}\n`
}, '')
