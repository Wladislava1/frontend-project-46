import compare from '../src/formatters/index.js';
import plain from '../src/formatters/plain.js';
import {
  json1, json2, jsonNotFlat1, jsonNotFlat2, result, result1,
  resultNotFlat, plainResultJson, plainFormatter,
} from '../__fixtures__/tests.js';

test('compare two files json and yaml with plain', () => {
  expect(compare(json1, json2, plain)).toEqual(plainFormatter);
  expect(compare(jsonNotFlat1, jsonNotFlat2, plain)).toEqual(plainResultJson);
  expect(compare({}, {})).toEqual(result1);
});

test('compare two files json and yaml with stylish', () => {
  expect(compare(json1, json2)).toEqual(result);
  expect(compare(jsonNotFlat1, jsonNotFlat2)).toEqual(resultNotFlat);
  expect(compare({}, {})).toEqual(result1);
});
