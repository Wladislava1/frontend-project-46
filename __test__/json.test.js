import {
  jsonNotFlatFormatter, jsonFormatter, json1, json2, jsonNotFlat1, jsonNotFlat2,
} from '../__fixtures__/tests.js';
import json from '../src/formatters/json.js';
import findDifferences from '../src/diff.js';

test('formatter json', () => {
  expect(json(findDifferences(json1, json2))).toEqual(jsonFormatter);
  expect(json(findDifferences(jsonNotFlat1, jsonNotFlat2))).toEqual(jsonNotFlatFormatter);
  expect(json({})).toEqual('{}');
});
