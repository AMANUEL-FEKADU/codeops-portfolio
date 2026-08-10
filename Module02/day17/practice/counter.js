const makeCounter=()=>{
    let count=0
    return function(){
        count++
        return count
    }
}

const counting=makeCounter();
console.log(counting())

// count remains private because in javaScript, variables declared with 'let' inside a 
// function are  scoped to that function. external code has no direct access to 
// the makeCounter execution context or its inner variables.