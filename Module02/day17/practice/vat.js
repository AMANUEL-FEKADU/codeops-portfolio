function vat(amount,rate=0.15){
    return amount+(amount*rate)
}

// arrow function
const vat=(amount,rate=0.15)=>amount+(amount*rate)
