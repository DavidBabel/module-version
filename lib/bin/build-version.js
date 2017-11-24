#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {execSync} from 'child_process';
import appRoot from 'app-root-path';

function createVersion() {
  console.log('Build of version.json starting');
  try {
    const _package = require(path.join(appRoot.path, 'package.json'));
    const NEW_LINE_REGEX = /\r?\n|\r/g;
    const version = JSON.stringify({
      name: _package.name,
      tag: execSync('git name-rev --tags --name-only HEAD').toString().replace(NEW_LINE_REGEX, ''),
      sha: execSync('git rev-parse --verify HEAD').toString().replace(NEW_LINE_REGEX, ''),
      build_date: new Date().toISOString()
    });

    fs.writeFileSync(path.join(appRoot.path, 'version.json'), version);

    console.log('version.json created successfully');
  } catch (e) {
    throw new Error('Could not create version.json');
  }
}

createVersion();
