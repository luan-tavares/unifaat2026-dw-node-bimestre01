import chalk from 'chalk';
import fs from 'fs/promises';

(async () => {
    try {
        const dados = await fs.readFile(
            '05-npm-fs/tdexto.txt',
            'utf-8'
        );
        console.log(chalk.greenBright(dados));
    } catch (error) {
        console.error(chalk.redBright(error));
    }
})();