import { readFileSync } from 'fs';
import * as path from 'path';

const parseFile = (pathTofile) => JSON.parse(readFileSync(path.resolve(pathTofile)));

export default parseFile;
