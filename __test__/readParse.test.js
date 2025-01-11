import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import * as path from 'path';
import parseFile from '../src/readParse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => readFileSync(getFixturePath(filename), 'utf-8').trim();
const parseResolvePathJson = JSON.parse(readFixture('file1.json'));
const parseRelativePathJson = JSON.parse(readFixture('file2.json'));
const parseResolvePathYaml = yaml.load(readFixture('file1.json'));
const parseRelativePathYaml = yaml.load(readFixture('file2.json'));
const parseResolvePathJsonNotFlat = JSON.parse(readFixture('file1notFlat.json'));
const parseRelativePathJsonNotFlat = JSON.parse(readFixture('file2notFlat.json'));
const parseResolvePathYamlNotFlat = yaml.load(readFixture('file1notFlat.json'));
const parseRelativePathYamlNotFlat = yaml.load(readFixture('file2notFlat.json'));

test('read and parse json', () => {
  expect(parseFile('__fixtures__/file1.json')).toEqual(parseResolvePathJson);
  expect(parseFile('__fixtures__/file2.json')).toEqual(parseRelativePathJson);
});

test('read and parse yaml', () => {
  expect(parseFile('__fixtures__/file1.yml')).toEqual(parseResolvePathYaml);
  expect(parseFile('__fixtures__/file2.yaml')).toEqual(parseRelativePathYaml);
});

test('read and parse jsonNotFlat', () => {
  expect(parseFile('__fixtures__/file1notFlat.json')).toEqual(parseResolvePathJsonNotFlat);
  expect(parseFile('__fixtures__/file2notFlat.json')).toEqual(parseRelativePathJsonNotFlat);
});

test('read and parse yaml', () => {
  expect(parseFile('__fixtures__/file1notFlat.yaml')).toEqual(parseResolvePathYamlNotFlat);
  expect(parseFile('__fixtures__/file2notFlat.yaml')).toEqual(parseRelativePathYamlNotFlat);
});
