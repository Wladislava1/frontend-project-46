#!/usr/bin/env node
import { Command } from 'commander';
import parseFile from '../src/readParse.js';
import compare from '../src/compare.js';
import formarterNotFlat from '../src/stylish.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format', formarterNotFlat)
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, options) => {
    const format = options.format || formarterNotFlat;
    console.log(compare(parseFile(filepath1), parseFile(filepath2), format));
    if (!filepath1 || !filepath2) {
      console.log(`Usage: gendiff [options] ${filepath1} ${filepath2}`);
    }
  });
program.parse();
