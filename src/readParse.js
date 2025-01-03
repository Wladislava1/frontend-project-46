import { readFileSync } from 'fs';
import * as path from 'path';

const parseFile = (pathToFile) => {
  if (!path.isAbsolute(pathToFile)) {
    return JSON.parse(readFileSync(pathToFile));
  }
  const relativePathNew = path.relative(process.cwd(), pathToFile).replace(/\\/g, '/');
  return JSON.parse(readFileSync(relativePathNew));
};
export default parseFile;
