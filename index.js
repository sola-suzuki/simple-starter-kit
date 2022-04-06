#! /usr/bin/env node

const fs = require('fs');
const path = require('path');

const src = `${__dirname}/src`;
const dest = `${path.resolve()}`;

const copy = function(src, dest) {
  if (fs.existsSync(src)) {
    const stats = fs.existsSync(src) && fs.statSync(src);
    const isDirectory = fs.existsSync(src) && stats.isDirectory();

    if (fs.existsSync(src) && isDirectory) {
      !fs.existsSync(dest) && fs.mkdirSync(dest);
      fs.readdirSync(src).forEach(function(key) {
        copy(path.join(src, key), path.join(dest, key));
      });
    } else {
      fs.linkSync(src, dest);
    }
  }
}

copy(src, dest)