async function Invalid() {
    

    try{
        const res=await fetch('https://thisdomain-dont-exist')
    
         console.log("success")
        
        
    } 
    catch(error){
        console.log(error.message)

    }
    
}
Invalid()
//-----------------------------

async function httperror() {
    

    try{
        const res=await fetch('https://openexchangerates.org/api/latest.json?app_id=06a440b969847b0b3cca9895ed48f1a&prettyprint=false&show_alternative=false')
    
        if(!res.ok) throw new Error(`${res.status} error`)
        
        
    } 
    catch(error){
        console.log(error.message)

    }
    
}
httperror()


