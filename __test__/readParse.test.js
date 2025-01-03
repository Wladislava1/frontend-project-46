import parseFile from '../src/readParse.js';
import {
  resolvePath, relativePath, parseRelativePath, parseResolvePath,
} from '../__fixtures__/tests.js';

test('read and parse', () => {
  expect(parseFile(resolvePath)).toEqual(parseResolvePath);
  expect(parseFile(relativePath)).toEqual(parseRelativePath);
});
