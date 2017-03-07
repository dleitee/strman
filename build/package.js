import prefix from './prefix'

const mapDependencies = (dependencies, version) =>
  dependencies.map(dependency => `"${dependency}":"${version}"`)

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
    "version": "${version}",
    "description": "The [strman](https://github.com/dleitee/strman) method \`${name}\` exported as a [Node.js](https://nodejs.org/) module.",
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
