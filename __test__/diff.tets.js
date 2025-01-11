import { jsonNotFlat1, jsonNotFlat2, diffrentJsons } from '../__fixtures__/tests.js';
import findDifferences from '../src/diff.js';

test('check diff of files', () => {
  expect(findDifferences(jsonNotFlat1, jsonNotFlat2)).toEqual(diffrentJsons);
});
