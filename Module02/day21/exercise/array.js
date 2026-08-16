

const fruit=['apple','banana','mango']
const save=()=>{
    try{
        const text=JSON.stringify(fruit)
        localStorage.setItem('fruit',text)
        console.log('stringify and stored')
    }
    catch(error){
        console.log(error)
    }
    
}

const load=()=>{
    try {
        const item=localStorage.getItem('fruit')
        if(item===null) return [];
        const parsed=JSON.parse(item)
        console.log(parsed)
        return parsed
        
    } catch (error) {
        console.log(error)
        return[]
    }
    
}

save()
load()