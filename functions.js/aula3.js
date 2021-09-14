// function expression
// function anonymous
let total = 0; 
// (parameters)
const sum = function(number1, number2){ // sum = soma
    // console.log(number1 + number2);
    let total = number1 + number2;
    return total
}


let number1 = 40;
let number2 = 60;

console.log(`O number1 e ${number1}`);
console.log(`O number2 e ${number2}`);
console.log(`A soma e ${sum(number1, number2)}`);

console.log(total);


sum(2,3)//arguments
//sum(44, 55)
//sum(70, 40)