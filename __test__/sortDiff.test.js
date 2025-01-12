import sortObj from '../src/sortDiff.js';
import {
  diffrentJsons, diffrentJsonsSort,
} from '../__fixtures__/tests.js';

test('alphabetically sorted diff', () => {
  expect(sortObj(diffrentJsons)).toEqual(diffrentJsonsSort);
  expect(sortObj({})).toEqual({});
});
