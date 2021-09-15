// Throw

function sayMyName(name = ""){
    if(name === ""){
        throw "Nome é obrigatorio"
    }
}
console.log(name);

// Try  Catch

try{
    sayMyName("Theo")
}catch(e){
    console.log(e);
}
console.log("após try e catch")