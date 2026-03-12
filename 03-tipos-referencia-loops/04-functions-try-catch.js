// Aula 03 - Tipos de referência
// Arquivo 4: functions, parâmetros, retorno e try/catch

console.log("=== FUNCTION COMO VALOR ===");

const saudacao = () => {
    console.log("Olá");
};

saudacao();

console.log("\n=== FUNCTION COMO PARÂMETRO ===");

function executar(acao) {
    acao();
}

executar(() => {
    console.log("Executando ação");
});

console.log("\n=== PARÂMETRO E RETORNO ===");

function somar(a, b) {
    return a + b;
}

const resultado = somar(2, 3);

// 5
console.log(resultado);

console.log("\n=== TEMPO DE DECLARAÇÃO E TEMPO DE EXECUÇÃO ===");

function dizerOi() {
    console.log("Oi");
}

// A função foi declarada acima e executa somente quando chamada abaixo.
dizerOi();

function executarFuncao(fn) {
    fn();
}

function teste() {
    console.log("Teste");
}

executarFuncao(teste);

console.log("\n=== CALLBACK ===");

function processar(callback) {
    callback();
}

processar(() => {
    console.log("Isso é um callback");
});

console.log("\n=== TRY/CATCH COM JSON.PARSE ===");

try {
    const usuario = JSON.parse('{ nome: "Ana" }');
    console.log(usuario);
} catch (erro) {
    console.log("Ocorreu um erro ao converter JSON");
    console.log(erro.message);
}

console.log("\n=== TRY/CATCH COM ERROR ===");

try {
    throw new Error("Erro proposital");
} catch (erro) {
    // Mensagem do erro: Erro proposital
    console.log("Mensagem do erro:", erro.message);
}
