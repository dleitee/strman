import fs from 'fs'

import generate from './generate'

const filesIgnore = ['lib', 'strman.js']

const files = fs.readdirSync('./src/').filter(file => filesIgnore.indexOf(file) === -1)
const libFiles = fs.readdirSync('./src/lib/')

files.forEach((value) => {
  generate(`src/${value}`)
})

libFiles.forEach((value) => {
  generate(`src/lib/${value}`)
})
