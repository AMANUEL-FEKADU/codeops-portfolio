const applyToAll=(list,callback)=>{
    const result=[]
    for(let i of list){
        result.push(callback(i))
    }
    return result

}

const vat=(amt)=>{
    return amt+(amt*0.15)
    
}
const items=[100,200,300]

const taxxed=applyToAll(items,vat)
console.log(taxxed)