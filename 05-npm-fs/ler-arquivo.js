import fs from 'fs';

(() => {

    fs.readFile(
        '05-npm-fs/texlto.txt',
        'utf-8',
        (erro, dados) => {
            if (erro) {
                console.log('Deu erro: ', erro.message);
                return;
            }

        }
    );



})();