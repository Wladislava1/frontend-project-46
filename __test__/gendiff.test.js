import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import * as path from 'path';
import parseFile from '../src/parser.js';
import json from '../src/formatters/json.js';
import findDifferences from '../src/diff.js';
import plain from '../src/formatters/plain.js';
import compare from '../src/formatters/index.js';
import {
  jsonNotFlatFormatter, jsonFormatter, json1, json2, jsonNotFlat1,
  jsonNotFlat2, diffrentNotFlat, plainResult, stylishFlat, result1,
  stylishNotFlat, plainFormatter, differentFlat,
  result2,
} from '../__fixtures__/tests.js';
import stylish from '../src/formatters/stylish.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => readFileSync(getFixturePath(filename), 'utf-8').trim();

describe('read and parse files', () => {
  test.each([
    ['file1.json', JSON.parse(readFixture('file1.json'))],
    ['file2.json', JSON.parse(readFixture('file2.json'))],
    ['file1.yml', yaml.load(readFixture('file1.yml'))],
    ['file2.yaml', yaml.load(readFixture('file2.yaml'))],
    ['file1notFlat.json', JSON.parse(readFixture('file1notFlat.json'))],
    ['file2notFlat.json', JSON.parse(readFixture('file2notFlat.json'))],
    ['file1notFlat.yaml', yaml.load(readFixture('file1notFlat.yaml'))],
    ['file2notFlat.yaml', yaml.load(readFixture('file2notFlat.yaml'))],
  ])('parse %s correctly', (filename, expected) => {
    const fileContent = readFixture(filename);
    const fileType = path.extname(filename).slice(1);
    expect(parseFile(fileContent, fileType)).toEqual(expected);
  });
});

describe('formatter json', () => {
  test.each([
    [json1, json2, jsonFormatter],
    [jsonNotFlat1, jsonNotFlat2, jsonNotFlatFormatter],
    [{}, {}, '{}'],
  ])('for %o and %o with format %s', (file1, file2, expected) => {
    expect(json(findDifferences(file1, file2))).toEqual(expected);
  });
});

describe('formatter plain', () => {
  test.each([
    [diffrentNotFlat, plainResult],
    [differentFlat, plainFormatter],
    [{}, ''],
  ])('correctly formats %o', (input, expected) => {
    expect(plain(input)).toEqual(expected);
  });
});

describe('formatter stylish', () => {
  test.each([
    [diffrentNotFlat, stylishNotFlat],
    [differentFlat, stylishFlat],
    [{}, result1],
  ])('correctly formats %o', (input, expected) => {
    expect(stylish(input)).toEqual(expected);
  });
});

describe('compare two files json and yaml with plain', () => {
  test.each([
    [json1, json2, plainFormatter],
    [jsonNotFlat1, jsonNotFlat2, plainResult],
    [{}, {}, result2],
  ])('correctly compares %o and %o with format %s', (file1, file2, expected) => {
    expect(compare(findDifferences(file1, file2), 'plain')).toEqual(expected);
  });
});

describe('compare two files json and yaml with stylish', () => {
  test.each([
    [json1, json2, stylishFlat],
    [jsonNotFlat1, jsonNotFlat2, stylishNotFlat],
    [{}, {}, result1],
  ])('correctly compares %o and %o with format %s', (file1, file2, expected) => {
    expect(compare(findDifferences(file1, file2), 'stylish')).toEqual(expected);
  });
});

test('correctly finds differences between nested objects', () => {
  expect(findDifferences(jsonNotFlat1, jsonNotFlat2)).toEqual(diffrentNotFlat);
});
