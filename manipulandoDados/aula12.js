
// Manipulando Arrays
    let techs = ["html", "css", "Java"]

// * adicionar item no fim 
techs.push("nodejs")

// * adicionar no começo   
techs.unshift("sql")

// * romover do fim 
// techs.pop()

// * remover do começo 
// techs.shift()

// * pegar somente alguns elementos do array 
// console.log(techs.slice(1, 3));

// * remover 1 ou mais itens de qualquer posição do arrray
// techs.splice(1, 2)

// * encontrar a posição de qualquer elemento de um array
let index = techs.indexOf("css")
techs.splice(index, 1)// remover

 console.log(techs);

