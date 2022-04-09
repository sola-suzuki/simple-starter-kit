#! /usr/bin/env node

const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')

const src = `${__dirname}/src`
const dest = `${path.resolve()}`

const exclude = ['.git']
const invisible = ['.gitignore']

const files = fs.readdirSync(dest)
const isEmpty = files.filter(item => exclude.indexOf(item) === -1).length === 0

if (!isEmpty) {
  throw new Error('Directory not empty')
}

fse.copySync(src, dest)
invisible.forEach(item => fse.pathExistsSync(`${dest}/${item}`) || fse.copySync(`${src}/${item}`, `${dest}/${item}`))
