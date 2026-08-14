async function prom() {
    const res=await fetch('https://openexchangerates.org/api/latest.json?app_id=06a440b4969847b0b3cca9895ed48f1a&prettyprint=false&show_alternative=false')
    
    const data=await res.json()
    let count=0
    for(const [key,value] of Object.entries(data.rates)){
        if(count>=2) break
        console.log(`${key} : ${value}`)
        count++
    }
    
}

prom()