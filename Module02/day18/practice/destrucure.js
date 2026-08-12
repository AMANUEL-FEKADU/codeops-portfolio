const customer={name:"Abebe",city:"Addis Ababa"}
const {name,city}=customer

function greet({name}){
    return `Hello ${name}`

}

console.log(greet(customer))