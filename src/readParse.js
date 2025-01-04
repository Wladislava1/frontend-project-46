import { readFileSync } from 'fs';
import * as path from 'path';
import yaml from 'js-yaml';

const parseFile = (pathToFile) => {
  if (path.extname(pathToFile) === '.yaml' || path.extname(pathToFile) === '.yml') {
    return yaml.load(readFileSync(path.resolve(process.cwd(), pathToFile)));
  }
  return JSON.parse(readFileSync(path.resolve(process.cwd(), pathToFile)));
};
export default parseFile;
