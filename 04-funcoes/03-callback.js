function executar(fn) {
    console.log("Antes da callback");
    fn();
    console.log("Depois da callback");
}

executar(() => {
    console.log("Executando callback");
});

setTimeout(() => {
    console.log("Executou depois de 1 segundo");
}, 1000);