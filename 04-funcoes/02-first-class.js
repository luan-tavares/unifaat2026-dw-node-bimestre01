function saudacao() {
    console.log("Olá");
}

// armazenando a função em si
const fn = saudacao;

// armazenando o retorno da execução
function gerarNumero() {
    return 42;
}

const valor = gerarNumero();

console.log("Função armazenada:", fn);
fn(); // executa a função

console.log("Valor retornado:", valor); // 42