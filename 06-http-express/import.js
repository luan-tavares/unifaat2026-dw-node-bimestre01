import { somar, multiplicar, saudacao } from './export.js';

const resultadoSoma = somar(10, 5);
const resultadoMultiplicacao = multiplicar(4, 3);
const mensagem = saudacao('Luan');

console.log('Soma:', resultadoSoma);
console.log('Multiplicação:', resultadoMultiplicacao);
console.log('Saudação:', mensagem);