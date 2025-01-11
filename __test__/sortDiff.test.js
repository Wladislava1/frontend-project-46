import sortDiff from '../src/sortDiff.js';
import {
  diffrentJsons, diffrentJsonsSort,
} from '../__fixtures__/tests.js';

test('alphabetically sorted diff', () => {
  expect(sortDiff(diffrentJsons)).toEqual(diffrentJsonsSort);
  expect(sortDiff({})).toEqual({});
});
