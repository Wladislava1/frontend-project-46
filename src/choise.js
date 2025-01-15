import compare from './formatters/index.js';
import plain from './formatters/plain.js';
import json from './formatters/json.js';
import parseFile from './readParse.js';
import stylish from './formatters/stylish.js';

const choice = (filepath1, filepath2, format) => {
  if (!filepath1 || !filepath2) {
    return `Usage: gendiff [options] ${filepath1} ${filepath2}`;
  }

  const parsedFile1 = parseFile(filepath1);
  const parsedFile2 = parseFile(filepath2);

  if (format === 'plain') {
    return compare(parsedFile1, parsedFile2, plain);
  } if (format === 'json') {
    return compare(parsedFile1, parsedFile2, json);
  }
  return compare(parsedFile1, parsedFile2, stylish);
};

export default choice;
