/* 
Expressões e operadores

    -Expressions
    -Operators
        Binary 
        Unary 
        Ternary

*/

/*
    Expressões são qualquer linha de código que resolve alguma 
    coisa no JavaScript, um exemplo é a expressão:*/
        let number;
/*
    Isso é uma expressão, já que estamos declarando uma váriavel, 
    nesse caso com o valor de undefined.
*/

/*
    Toda expressão do Javascript pode ou não terminar com ; (ponto e vírgula)
    Em alguns casos é necessário o uso de ; (ponto e vírgula), como numa função 
    auto-executável, é um dos poucos casos onde faz falta, e é em um 
    cenário como o seguinte:
*/
let number = 1 // é necessario colocar ";" após o "1" para nao ocorrer erro.

(function(){
  console.log('alo')
})()

// OPERADORES

/* unário */
let number = 1

console.log(++number)

/* binário */
let number = 1

console.log(number + 1)

/* ternário */
console.log(true ? 'alo' : 'nada')