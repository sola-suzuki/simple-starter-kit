#! /usr/bin/env node

const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')

const src = `${__dirname}/src`
const dest = `${path.resolve()}`

const exclude = ['.git']
const invisible = ['.gitignore']

const addDot = (path, file) => fse.moveSync(`${path}/${file.replace(/^./, '')}`, `${path}/${file}`)
const removeDot = (path, file) => fse.moveSync(`${path}/${file}`, `${path}/${file.replace(/^./, '')}`)

const files = fs.readdirSync(dest)
const isEmpty = files.filter(item => exclude.indexOf(item) === -1).length === 0

if (!isEmpty) {
  throw new Error('Directory not empty')
}

invisible.forEach(item => removeDot(src, item))
fse.copySync(src, dest)
invisible.forEach(item => { addDot(src, item); addDot(dest, item) })
