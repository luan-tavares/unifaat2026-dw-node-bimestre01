import express from 'express';
import fs from 'fs/promises';

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    response.send(`
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello World</h1>
        <p>Minha primeira rota com Express.</p>
      </body>
    </html>
  `);
});

app.get('/json', (request, response) => {
    const { nome = 'visitante' } = request.query;

    response.json({
        message: `Olá, ${nome}!`,
        status: 'ok',
        rota: '/json'
    });
});

app.get('/texto', async (request, response) => {
    try {
        const conteudo = await fs.readFile('./06-http-express/mensagem.txt', 'utf-8');
        response.setHeader('Content-Type', 'text/plain; charset=utf-8');
        response.send(conteudo);
    } catch (error) {
        response.status(500).send('Erro ao ler o arquivo.');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});