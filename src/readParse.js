import { readFileSync } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const parseFile = (pathToFile) => {
  const absolutePath = path.resolve(__dirname, '..', pathToFile);
  return JSON.parse(readFileSync(absolutePath, 'utf-8'));
};
export default parseFile;
