// Aula 03 - Tipos de referência
// Arquivo 2: object, JSON, array e API nativa

console.log("=== OBJECT ===");

const aluno = {
    nome: "Ana",
    idade: 21,
    apresentar: () => {
        return "Olá, eu sou Ana";
    }
};

// { nome: 'Ana', idade: 21, apresentar: [Function: apresentar] }
console.log(aluno);

// Notebook
const produto = {
    nome: "Notebook",
    preco: 3500,
    emEstoque: true
};
console.log(produto.nome);

// 3500
console.log(produto["preco"]);

produto.marca = "Lenovo";
produto.preco = 3200;

delete produto.emEstoque;

// [ 'nome', 'preco', 'marca' ]
console.log(Object.keys(produto));

// [ 'Notebook', 3200, 'Lenovo' ]
console.log(Object.values(produto));

// [ [ 'nome', 'Notebook' ], [ 'preco', 3200 ], [ 'marca', 'Lenovo' ] ]
console.log(Object.entries(produto));

console.log("\n=== JSON ===");

const textoJson = '{"nome":"Ana","idade":21}';
const objeto = JSON.parse(textoJson);

// { nome: 'Ana', idade: 21 }
console.log(objeto);

const usuario = {
    nome: "Ana",
    idade: 21
};

const texto = JSON.stringify(usuario);

// {"nome":"Ana","idade":21}
console.log(texto);

console.log("\n=== ARRAY ===");

const frutas = ["maçã", "banana", "uva"];

// maçã
console.log(frutas[0]);

// 3
console.log(frutas.length);

frutas[1] = "laranja";

const numeros = [10, 20, 30];

numeros.push(40);
numeros.pop();

// true
console.log(numeros.includes(20));

// 2
console.log(numeros.indexOf(30));

console.log("\n=== API NATIVA DE STRING ===");

const textoApi = "desenvolvimento web";

// 19
console.log(textoApi.length);

// DESENVOLVIMENTO WEB
console.log(textoApi.toUpperCase());

// true
console.log(textoApi.includes("web"));

// desenvolvimento
console.log(textoApi.slice(0, 14));

console.log("\n=== API NATIVA DE NUMBER ===");

const valor = 123.456;

// 123.46
console.log(valor.toFixed(2));

// 123.456
console.log(valor.toString());

// false
console.log(Number.isInteger(valor));

console.log("\n=== API NATIVA DE ARRAY ===");

const nomes = ["Ana", "Bruno", "Carla"];

// 3
console.log(nomes.length);

// Ana - Bruno - Carla
console.log(nomes.join(" - "));

// true
console.log(nomes.includes("Ana"));
