#!/usr/bin/env node
import { Command } from 'commander';
import parseFile from '../src/readParse.js'
import compare from '../src/compare.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    console.log(compare(parseFile(filepath1), parseFile(filepath2)))
    if (!filepath1 || !filepath2) {
      console.log( `Usage: gendiff [options] ${filepath1} ${filepath2}`)
    }
  })
program.parse();