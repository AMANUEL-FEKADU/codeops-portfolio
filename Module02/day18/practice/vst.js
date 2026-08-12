const prices=[250,1200,750,4550,840,865,950,1047]
const vat=prices.map(num=>num+(num*0.15))
// console.log(vat)
const filtered=vat.filter(num=>num<1000)
// console.log(filtered)

const reduced=filtered.reduce((accum,curr)=>{
    return accum+curr
},0)

console.log(reduced)