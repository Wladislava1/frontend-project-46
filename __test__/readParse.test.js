import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';
import parseFile from '../src/readParse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => readFileSync(getFixturePath(filename), 'utf-8').trim();
const parseResolvePath = JSON.parse(readFixture('file1.json'));
const parseRelativePath = JSON.parse(readFixture('file2.json'));

test('read and parse', () => {
  expect(parseFile('__fixtures__/file1.json')).toEqual(parseResolvePath);
  expect(parseFile('__fixtures__/file2.json')).toEqual(parseRelativePath);
});
