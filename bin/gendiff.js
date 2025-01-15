#!/usr/bin/env node
import { Command } from 'commander';
import choise from '../src/choise.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, options) => {
    console.log(choise(filepath1, filepath2, options.format));
  });
program.parse();
