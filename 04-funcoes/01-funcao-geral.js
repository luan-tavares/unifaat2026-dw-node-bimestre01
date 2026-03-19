function soma(a, b) {
    // recebe dois valores e retorna outro valor
    return a + b;
}

function apresentar(nome) {
    // exemplo de função sem retorno útil
    console.log(`Olá, ${nome}`);
}

const resultado = soma(10, 5);

console.log("Resultado da soma:", resultado); // 15
apresentar("Maria"); // Olá, Maria