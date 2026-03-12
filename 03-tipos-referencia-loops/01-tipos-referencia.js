// Aula 03 - Tipos de referência
// Arquivo 1: referência, comparação, copy e spread

console.log("=== TIPOS DE REFERÊNCIA ===");

const a = { nome: "Maria" };
const b = a;

b.nome = "João";

// João
console.log(a.nome);

// João
console.log(b.nome);

console.log("\n=== COMPARAÇÃO DE TIPOS DE REFERÊNCIA ===");

const obj1 = { valor: 10 };
const obj2 = { valor: 10 };

// false
console.log(obj1 === obj2);

const obj3 = { valor: 10 };
const obj4 = obj3;

// true
console.log(obj3 === obj4);

console.log("\n=== CÓPIA DE TIPOS DE REFERÊNCIA ===");

const original = { nome: "Carlos" };
const copia = original;

copia.nome = "Fernanda";

// Fernanda
console.log(original.nome);

console.log("\n=== COPY ===");

const usuario1 = { nome: "Ana" };
const usuario2 = usuario1;

usuario2.nome = "Bruna";

// Bruna
console.log(usuario1.nome);

// Bruna
console.log(usuario2.nome);

console.log("\n=== SPREAD OPERATOR COM OBJECT ===");

const usuario = { nome: "Lia", idade: 30 };
const copiaUsuario = { ...usuario };

copiaUsuario.nome = "Bruna";

// Lia
console.log(usuario.nome);

// Bruna
console.log(copiaUsuario.nome);

console.log("\n=== SPREAD OPERATOR COM ARRAY ===");

const numeros = [1, 2, 3];
const copiaNumeros = [...numeros];

copiaNumeros.push(4);

// [1, 2, 3]
console.log(numeros);

// [1, 2, 3, 4]
console.log(copiaNumeros);

console.log("\n=== SPREAD COM CÓPIA SUPERFICIAL ===");

const pessoa = {
    nome: "Rafa",
    endereco: { cidade: "Recife" }
};

const copiaPessoa = { ...pessoa };
copiaPessoa.endereco.cidade = "Olinda";

// Olinda
console.log(pessoa.endereco.cidade);
