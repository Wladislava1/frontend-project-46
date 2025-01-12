import { diffrentJsonsSort, plainResult } from '../__fixtures__/tests.js';
import plain from '../src/formatters/plain.js';

test('formatter plain', () => {
  expect(plain(diffrentJsonsSort)).toEqual(plainResult);
  expect(plain([])).toEqual([]);
});
