import { readFileSync } from 'fs';
import * as path from 'path';
import compare from './formatters/index.js';
import parseFile from './readParse.js';

const choice = (filepath1, filepath2, format) => {
  if (!filepath1 || !filepath2) {
    return `Usage: gendiff [options] ${filepath1} ${filepath2}`;
  }
  const fileContent1 = readFileSync(path.resolve(process.cwd(), filepath1), 'utf-8');
  const fileContent2 = readFileSync(path.resolve(process.cwd(), filepath2), 'utf-8');
  const fileType1 = path.extname(filepath1).slice(1);
  const fileType2 = path.extname(filepath2).slice(1);
  const parsedFile1 = parseFile(fileContent1, fileType1);
  const parsedFile2 = parseFile(fileContent2, fileType2);
  return compare(parsedFile1, parsedFile2, format);
};

export default choice;
