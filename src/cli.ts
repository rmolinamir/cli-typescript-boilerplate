#!/usr/bin/env node

import yargs from 'yargs';
import fs from 'fs';
import path from 'path';

const packageJson = JSON.parse(fs
  .readFileSync(path.resolve(__dirname, '..', 'package.json'))
  .toString('utf-8'));

yargs
  .scriptName(`${packageJson.name as string}\n\n${packageJson.description as string}\n\n`)
  .version(packageJson.version as string)
  .commandDir('commands')
  .demandCommand(1, 'At least one command is required.')
  .help()
  .argv;
