const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeout(() => {
    console.log('Executado após 1 segundo');
}, 0);

console.log('Executando...');

await sleep(2000);

console.log('Executado após 2 segundos');