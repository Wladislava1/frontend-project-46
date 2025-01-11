import compare from '../src/compare.js';
import {
  json1, json2, jsonNotFlat1, jsonNotFlat2, result, result1, resultNotFlat,
} from '../__fixtures__/tests.js';

test('compare two files json and yaml', () => {
  expect(compare(json1, json2)).toEqual(result);
  expect(compare(jsonNotFlat1, jsonNotFlat2)).toEqual(resultNotFlat);
  expect(compare({}, {})).toEqual(result1);
});
