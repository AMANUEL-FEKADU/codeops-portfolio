const currency=document.getElementById('currency')
const resu=document.getElementById('resu')
const conv=document.getElementById('conv')
const watch=document.getElementById('watch')
const add=document.getElementById('add')
const page=document.getElementById('page')
let search_hist
async function converter() {
    
    try{
        const res= await fetch('https://open.er-api.com/v6/latest/ETB')

        if(!res.ok) throw new Error("can't fetch this api")

        const data=await res.json()

        const cur=data.rates
        localStorage.setItem('rates',JSON.stringify(cur))
   

        
        
        function load(){
            const data=localStorage.getItem('rates')

            if(!data) return;
            const parsed=JSON.parse(data)
           
            for(const [key,value] of Object.entries(parsed)){
                const option=document.createElement('option')
                option.value=value
                option.textContent=key
                currency.appendChild(option)
            }
        }
         load()
    
       

    }
    catch(error){
        page.textContent=error.message
    }
    
}   
conv.addEventListener('click',(e)=>{
    e.preventDefault()
    const amt=document.getElementById('amount').value
    const newamt=Number(amt)

    if(!newamt || newamt <1){
        console.log('please write a valid amount')
        return
    }


    const result=newamt*currency.value
    resu.textContent=result
    const curName=currency.options[currency.selectedIndex].textContent
    
    search_hist=JSON.parse(localStorage.getItem('search')) || []
    
     const newres={'cur':curName,
                'amt':amt,
                'result':result,
                'id':Date.now()
       }

    const exist=search_hist.map((item)=>{
        return `${item.cur}-${item.amt}`
        
    })

    const curnt=`${curName}-${amt}`
   
   if(!exist.includes(curnt)){
        
       search_hist.push(newres)
       localStorage.setItem('search',JSON.stringify(search_hist))
      
  
    } 

    render()
    
    
})

 function render(){
    page.innerHTML=''

        const data=localStorage.getItem('search')
        const item=JSON.parse(data) || []
        
        if(!item || item.length<1){
            const p=document.createElement('p')
            p.textContent='empty'
            page.appendChild(p)
            return
        }
        for(let items of item){
            
            const p=document.createElement('p')
            const button=document.createElement('button')
            button.textContent='delete'
            
            p.innerHTML=`<span>${items.cur} --- ${items.amt} --- ${items.result}</span> <button class="del" dataid="${items.id}">delete</button> `
            page.appendChild(p)
        }

        
    }

page.addEventListener('click',(e)=>{
    if(e.target.classList.contains('del')){
        const target=Number(e.target.getAttribute('dataid'))
        search_hist=JSON.parse(localStorage.getItem('search'))

        search_hist=search_hist.filter(item=>item.id!== target)
        localStorage.setItem('search',JSON.stringify(search_hist))
        render()
    }
        
})
converter()
render()

