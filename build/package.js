import prefix from './prefix'

const mapDependencies = (dependencies, version) =>
  dependencies.map(dependency => `"${prefix(dependency)}":"${version}"`)

const getDependencies = (dependencies, version) => {
  if (dependencies.length) {
    return `"dependencies": {
    \t${mapDependencies(dependencies, version).join(',\n\t')}
    },`
  }

  return ''
}

export default (name, version, dependencies = []) => `
  {
    "name": "${prefix(name)}",
    "version": "${version}-0",
    "description": "A Javascript string manipulation library without npm dependences.",
    "main": "index.js",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/dleitee/strman.git"
    },
    "keywords": [
      "string",
      "manipulate",
      "str",
      "manipulation",
      "strman",
      "${name}"
    ],
    ${getDependencies(dependencies, version)}
    "author": "Daniel Leite de Oliveira <dleitee@gmail.com>",
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/dleitee/strman/issues"
    },
    "homepage": "https://github.com/dleitee/strman#readme"
  }

`
