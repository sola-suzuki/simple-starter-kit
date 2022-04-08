#! /usr/bin/env node

const fs = require('fs');
const path = require('path');

const src = `${__dirname}/src`;
const dest = `${path.resolve()}`;

const copy = function(src, dest) {
  if (fs.existsSync(src)) {
    const stats = fs.statSync(src);
    const isDirectory = stats.isDirectory();

    if (isDirectory) {
      !fs.existsSync(dest) && fs.mkdirSync(dest);
      fs.readdirSync(src).forEach(function(key) {
        copy(path.join(src, key), path.join(dest, key));
      });
    } else {
      fs.linkSync(src, dest);
    }
  }
}

if (fs.readdirSync(dest).length) {
  throw new Error('Directory not empty');
}

copy(src, dest)

const ignore = `${dest}/.gitignore`
!fs.existsSync(ignore) && fs.writeFileSync(ignore, 'dist/\nnode_modules/')
