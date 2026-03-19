const a = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    conjugue: {
        nome: "Maria",
        idade: 25,
        cidade: "Rio de Janeiro"
    }
};

const { nome, cidade } = a.conjugue;

console.log(nome);
console.log(cidade);
/*
for (const chave in a) {
    console.log("Indice " + chave);
    console.log(a[chave]);
    console.log("-------------");
}
*/
const b = [1, 2, 3, 4, 5];

const [primeiro, segundo] = b;

console.log(primeiro);
console.log(segundo);
/*

for (const valor of b) {
    console.log(valor);
}
*/