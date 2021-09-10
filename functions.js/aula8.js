//Callback function

/*      
    Uma callback function é uma função que está
    sendo passada para outra função como parâmetro.
        
*/

function sayMyName(name) {
    console.log("antes da callback!");


    // Como se extivesse acontecendo isso
    
    // function name() {
    //     console.log("Estou em uma callback");
    // }
    
    name()//callback
    
    console.log("depois da callback!");
}

sayMyName(
    () => {
        console.log("Estou em uma callback");
    }
)