#! /usr/bin/env node

const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')

const src = path.resolve(__dirname, 'src')
const dest = path.resolve()

const exclude = ['.git']
const files = fs.readdirSync(dest)
const isEmpty = files.filter(item => exclude.indexOf(item) === -1).length === 0

if (!isEmpty) {
  throw new Error('Directory not empty')
}

fse.copySync(src, dest)

const ignore = ['dist/', 'node_modules/']
fs.writeFileSync(path.resolve(dest, '.gitignore'), ignore.join('\n'));
