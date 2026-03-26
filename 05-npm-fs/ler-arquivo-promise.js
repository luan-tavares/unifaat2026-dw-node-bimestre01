import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);

async function lerArquivo(caminho) {
    return await fs.readFile(path.join(__dirname, caminho), 'utf-8');
}

console.log(await lerArquivo('texto.txt'));