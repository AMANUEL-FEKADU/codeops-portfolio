const body=document.querySelector('body')
async function status() {
    const p=document.createElement('p')
     p.textContent='loading...'
        body.appendChild(p)
   
    try{
        
        const res=await fetch('https://openexchangerates.org/api/latest.json?app_id=06a440b4969847b0b3cca9895ed48f1a&prettyprint=false&show_alternative=false')
        console.log('pending')
       
        if(!res.ok){
            throw new Error(`rejected ${res.status}`)
        }

        const data=await res.json()
        console.log('fullfilled')
        p.remove()
        const ul=document.createElement('ul')
        for(const [key,value] of Object.entries(data.rates)){
            const li=document.createElement('li')
            li.textContent=`${key}: ${value}`
            ul.appendChild(li)
        }
        body.appendChild(ul)

    }
    catch(error){
        console.log(error.message)
        p.textContent=error.message
        p.style.color='red'
    }

    
}

status()