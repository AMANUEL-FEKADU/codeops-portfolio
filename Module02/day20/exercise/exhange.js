// const exchange ='https://openexchangerates.org/api/latest.json?app_id=06a440b4969847b0b3cca9895ed48f1a&prettyprint=false&show_alternative=false'
// fetch(exchange)
//     .then((Response)=>Response.json())
//     .then((data)=>{
//         console.log(data)
//         console.log("USD to ETB:", data.rates.ETB)
//         console.log(data)
//     })



async function Toetb() {
    const url='https://openexchangerates.org/api/latest.json?app_id=06a440b4969847b0b3cca9895ed48f1a&prettyprint=false&show_alternative=false'
    
    const responce=await fetch(url)

    if(!responce.ok){
        throw new Error('failed to fetch the data')
    }
    const data= await responce.json()
    
    return data.rates.ETB
}

Toetb()
.then((rate)=>{console.log('USD to ETB',rate)})
.catch((err)=>console.log(err))
