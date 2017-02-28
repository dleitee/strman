import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'

import { transformFileSync } from 'babel-core'
import showdeps from 'showdeps'

import packageJson from '../package.json'

import makePackage from './package'
import makeCode from './code'
import makeReadme from './readme'
import { getFileName } from './dependecies'

const tmpDir = `/tmp${path.sep}`
const workdir = fs.mkdtempSync(tmpDir)
const filename = 'src/lefttrim.js'
const libname = filename.match(/[a-z]+.js$/g)[0].replace('.js', '')
const file = fs.readFileSync(filename, { encoding: 'UTF-8' })

const deps = showdeps(file)
const dependencies = deps.map(getFileName)

const code = transformFileSync(filename, {
  plugins: ['transform-remove-import', 'add-module-exports', 'transform-remove-strict-mode'],
}).code

const library = {}
library.code = makeCode(code, deps)
library.package = makePackage(libname, packageJson.version, dependencies)
library.readme = makeReadme(libname, packageJson.version)

const options = { encoding: 'utf-8' }

fs.writeFileSync(`${workdir}/index.js`, library.code, options)
fs.writeFileSync(`${workdir}/package.json`, library.package, options)
fs.writeFileSync(`${workdir}/readme.md`, library.readme, options)

exec(`cd ${workdir} && npm publish`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }
  console.info(`stdout: ${stdout}`)
  console.info(`stderr: ${stderr}`)
})
