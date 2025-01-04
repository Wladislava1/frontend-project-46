import compare from '../src/compare.js';
import {
  json1, json2, result, result1,
} from '../__fixtures__/tests.js';

test('compare two files json and yaml', () => {
  expect(compare(json1, json2)).toEqual(result);
  expect(compare({}, {})).toEqual(result1);
});
