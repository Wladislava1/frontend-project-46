import { readFileSync } from 'fs';
import * as path from 'path';

const parseFile = (pathToFile) => JSON.parse(readFileSync(path.resolve(process.cwd(), pathToFile)));
export default parseFile;
