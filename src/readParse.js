import { readFileSync } from 'fs';
import * as path from 'path';

const parseFile = (pathToFile) => {
  if (!path.isAbsolute(pathToFile)) {
    return JSON.parse(readFileSync(pathToFile));
  }
  return JSON.parse(readFileSync(path.resolve(process.cwd(), pathToFile), 'utf-8'));
};
export default parseFile;
