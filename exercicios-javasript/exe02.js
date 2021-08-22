
/* 

Exercício 02

 Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

*/

function triangulo(a, b, c) {
    if ((a === b) && (a === c)){
        return(`Esse triângulo é EQUILÁTERO`)
    }else if ((a===b) || (a===c) || (b === c)){
        return(`Esse triângulo é ISÓSCELES`)
    }else{
        return(`Esse triângulo é ESCALENO`)
    }
}

console.log(triangulo(2, 3, 1))
