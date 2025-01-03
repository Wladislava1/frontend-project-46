import parseFile from '../src/readParse.js';
import {
  relativePath, parseRelativePath,
} from '../__fixtures__/tests.js';

test('read and parse', () => {
  expect(parseFile(relativePath)).toEqual(parseRelativePath);
});
