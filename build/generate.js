import fs from 'fs'
import { exec } from 'child_process'

import { transformFileSync } from 'babel-core'
import showdeps from 'showdeps'

import packageJson from '../package.json'

import makePackage from './package'
import makeCode from './code'
import makeReadme from './readme'
import { getFileName } from './dependecies'

export default async (filename) => {
  console.info(`Executing: ${filename}\n`)
  const tmpDir = '/tmp/'
  const workdir = fs.mkdtempSync(tmpDir)
  const libname = filename.match(/[\w]+.js$/g)[0].replace('.js', '').toLowerCase()
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

  await exec(`cd ${workdir} && npm publish`, (error, stdout, stderr) => {
    console.info(filename)
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.info(`stdout: ${stdout}`)
    console.info(`stderr: ${stderr}`)
  })
}
