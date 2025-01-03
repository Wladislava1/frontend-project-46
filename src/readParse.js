import { readFileSync } from 'fs';
import * as path from 'path';

const workDirectory = process.env.GITHUB_WORKSPACE || process.cwd();
const parseFile = (pathToFile) => {
  const absolutePath = path.relative(workDirectory, pathToFile);
  return JSON.parse(readFileSync(absolutePath, 'utf-8'));
};
export default parseFile;
