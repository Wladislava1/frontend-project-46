import sortAlphabet from '../src/sortAlphabet.js';
import {
  json1Sort, json2Sort, json1, json2,
} from '../__fixtures__/tests.js';

test('alphabetically sorted json and yaml', () => {
  expect(sortAlphabet(json1)).toEqual(json1Sort);
  expect(sortAlphabet(json2)).toEqual(json2Sort);
  expect(sortAlphabet({})).toEqual({});
});
