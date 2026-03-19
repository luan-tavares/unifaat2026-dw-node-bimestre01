function minhaPromise() {
    return new Promise((resolve, reject) => {
        const sucesso = true;

        if (sucesso) {
            resolve("Promise resolvida com sucesso");
            return;
        }

        reject("Promise rejeitada");
    });
}

console.log("Iniciando a execução da promise...");

minhaPromise()
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.log(erro);
    });


console.log("Continuando a execução do código...");