// Aula 03 - Tipos de referência
// Arquivo 3: desestruturação, loops e métodos de array

console.log("=== DESESTRUTURAÇÃO DE OBJECT ===");

const usuario = {
    nome: "Ana",
    idade: 21
};

const { nome, idade } = usuario;

// Ana
console.log(nome);

// 21
console.log(idade);

const produto = {
    nome: "Notebook",
    preco: 3500
};

const { nome: nomeProduto, preco: precoProduto } = produto;

// Notebook
console.log(nomeProduto);

// 3500
console.log(precoProduto);

console.log("\n=== DESESTRUTURAÇÃO DE ARRAY ===");

const cores = ["azul", "verde", "preto"];
const [cor1, cor2, cor3] = cores;

// azul
console.log(cor1);

// verde
console.log(cor2);

// preto
console.log(cor3);

const numerosDes = [10, 20, 30];
const [primeiro, , terceiro] = numerosDes;

// 10
console.log(primeiro);

// 30
console.log(terceiro);

console.log("\n=== LOOP FOR ===");

for (let i = 0; i < 5; i++) {
    // 0
    // 1
    // 2
    // 3
    // 4
    console.log(i);
}

console.log("\n=== LOOP WHILE ===");

let contador = 0;
while (contador < 3) {
    // 0
    // 1
    // 2
    console.log(contador);
    contador++;
}

console.log("\n=== LOOP FOR...OF ===");

for (const cor of cores) {
    // azul
    // verde
    // preto
    console.log(cor);
}

console.log("\n=== LOOP FOR...IN ===");

const pessoa = {
    nome: "Lucas",
    idade: 25
};

for (const chave in pessoa) {
    // nome Lucas
    // idade 25
    console.log(chave, pessoa[chave]);
}

console.log("\n=== ARRAY.FOREACH() ===");

const numeros1 = [1, 2, 3];
numeros1.forEach((numero) => {
    // 1
    // 2
    // 3
    console.log(numero);
});

console.log("\n=== ARRAY.MAP() ===");

const numeros2 = [1, 2, 3];
const dobrados = numeros2.map((numero) => {
    return numero * 2;
});

// [ 2, 4, 6 ]
console.log(dobrados);

console.log("\n=== ARRAY.FILTER() ===");

const numeros3 = [1, 2, 3, 4, 5];
const pares = numeros3.filter((numero) => {
    return numero % 2 === 0;
});

// [ 2, 4 ]
console.log(pares);

console.log("\n=== ARRAY.FIND() ===");

const usuarios = [
    { nome: "Ana", ativo: false },
    { nome: "Beto", ativo: true }
];

const encontrado = usuarios.find((usuarioItem) => {
    return usuarioItem.ativo;
});

// { nome: 'Beto', ativo: true }
console.log(encontrado);

console.log("\n=== ARRAY.SOME() ===");

const notas1 = [4, 6, 8];
const existeAprovado = notas1.some((nota) => {
    return nota >= 7;
});

// true
console.log(existeAprovado);

console.log("\n=== ARRAY.EVERY() ===");

const notas2 = [7, 8, 10];
const todosAprovados = notas2.every((nota) => {
    return nota >= 7;
});

// true
console.log(todosAprovados);

console.log("\n=== ARRAY.REDUCE() ===");

const numeros4 = [1, 2, 3, 4];
const soma = numeros4.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

// 10
console.log(soma);
