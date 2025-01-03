import { readFileSync } from 'fs';
import * as path from 'path';

const parseFile = (pathTofile) => {
  const relativePath = path.relative(process.cwd(), pathTofile);
  return JSON.parse(readFileSync(relativePath));
};
export default parseFile;
