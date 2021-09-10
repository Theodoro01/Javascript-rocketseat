// Function hoisting

// hoisting funcionando:

sayMyName()

function sayMyName(){
    console.log('Theo')
}

// hoisting não funcinando: 

sayMyName()

const sayMyName = function(){
    console.log('Theo')
}