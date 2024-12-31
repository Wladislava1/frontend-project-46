import { readFileSync } from 'fs';
import * as path from 'path';

const parseFile = (pathTofile) => {
  if (path.isAbsolute(pathTofile)) {
    return JSON.parse(readFileSync(pathTofile, 'utf-8'));
  }
  return JSON.parse(readFileSync(path.resolve(pathTofile)));
};
export default parseFile;
