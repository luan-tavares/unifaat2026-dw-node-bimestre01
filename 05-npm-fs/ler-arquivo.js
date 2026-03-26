import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function lerArquivo(caminho) {

    fs.readFile(path.join(__dirname, caminho), 'utf-8', (err, data) => {
        if (err) {
            console.error('Erro ao ler arquivo:', err);
            return;
        }
        console.log('Arquivo lido com sucesso:', data);
    });
}

lerArquivo('texto.txt');