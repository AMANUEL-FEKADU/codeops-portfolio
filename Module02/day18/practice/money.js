export const vat=0.15
export function addvat(amount,rate=vat){
    return amount+(amount*rate)
}

