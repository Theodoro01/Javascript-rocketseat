// Function scope

let subject = "create video"

// valor subject parametro é != do de fora
function createThink(subject){  
    subject = 'study'
    return subject
}
console.log(subject);
console.log(createThink(subject));