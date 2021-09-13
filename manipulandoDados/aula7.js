/* 
    Manipulando String e Numeros

   Separe um texto que contem espaços, em um novo array onde cada
   texto é uma posição do array. Depois disso trasforme o array em texto
   e onde era espaço coloque _
*/

let phrase = "Deus é o puro amor!"
let myArray = phrase.split(" ");
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)