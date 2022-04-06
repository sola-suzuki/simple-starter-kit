#! /usr/bin/env node

const copy = require('fs-copy');

copy(`${__dirname}/src`, './');
