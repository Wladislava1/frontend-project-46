#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
  .name('Reference')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-h', '-help', 'output usage information')
  .action(() => {
    console.log( 'Usage: gendiff [options]')
    console.log('Compares two configuration files and shows a difference.')
    console.log('Options:')
    console.log('-V, --version        output the version number')
    console.log('-h, --help           output usage information')
  })
program.parse();