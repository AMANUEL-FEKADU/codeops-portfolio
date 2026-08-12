import {} from './transaction.js'

export const total=(transactions,type)=>{
   return transactions.filter(transaction=>transaction.type===type)
    .reduce((accum,{amount})=>accum+amount,0)
}
export const recipt=(transactions)=>{
    return transactions.map(({customer,amount,type})=>{
        return `recipt:${customer} paid ${amount} ETB type:${type}`
    })
}