/* 

    Manipulando Arrays
   
    contando elementos de um array

*/
console.log(["a","b","c"].length);

//Qualquer tipo de dado em um array pode ser um elemento diferente.
console.log([
    "a",
    {type: "array"},
    function(){return "alo"}    
][2]());

/* 
    .length - vendo quantos elementos tem no array
    [2] vendo o segundo elemento do array
    () chamando a função.
 
*/