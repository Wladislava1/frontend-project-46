import { readFileSync } from 'fs';
import * as path from 'path';
import { workDirectory } from '../__fixtures__/tests.js';

const parseFile = (pathTofile) => {
  const relativePathNew = path.resolve(workDirectory, pathTofile);
  return JSON.parse(readFileSync(relativePathNew));
};
export default parseFile;
