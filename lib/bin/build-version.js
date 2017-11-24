#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {execSync} from 'child_process';
import appRoot from 'app-root-path';

function createVersion() {
  try {
    const package = require(path.join(appRoot, 'package.json'));
    const NEW_LINE_REGEX = /\r?\n|\r/g;
    const version = JSON.stringify({
      name: package.name,
      tag: execSync('git name-rev --tags --name-only HEAD').toString().replace(NEW_LINE_REGEX, ''),
      sha: execSync('git rev-parse --verify HEAD').toString().replace(NEW_LINE_REGEX, ''),
      build_date: new Date().toISOString()
    });

    fs.writeFileSync(path.join(appRoot, 'version.json'), version);
  } catch (e) {
    throw new Error('Could not create version.json');
  }
}

createVersion();
