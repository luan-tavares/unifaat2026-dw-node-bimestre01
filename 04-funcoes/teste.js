
const executar = (callback) => {
    callback();
    return 'Executado';
}

const callback = () => {
    console.log('Executando callback');
};

console.log(executar(callback));

const obj = {
    nome: 'Objeto',
    executar: (a) => {
        return "Executando " + a;
    }
};

console.log(obj.executar("teste"));

/*
setTimeout(executar, 2000);

setTimeout(executar, 3000);
*/
