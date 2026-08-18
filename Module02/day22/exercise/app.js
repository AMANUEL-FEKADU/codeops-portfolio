const state={
    base:"ETB",
    rates: {}, 
    watchlist: [], 
    amount: 100,
    currency: "USD",
};
const statusm=document.getElementById('status')
const form=document.querySelector('form')
const sec=document.getElementById('watchsec')
const ul=document.getElementById('watchli')

function render(){
    const selectcur=document.getElementById('currency')
    selectcur.innerHTML=''
    for (const [key,value] of Object.entries(state.rates)){
         const option=document.createElement('option')
        option.value=key
        option.textContent=key

        if(key===state.currency){
            option.selected=true
        }

        selectcur.appendChild(option)
    }
    
}

render()

async function loadRates(){
        statusm.textContent="loading..."
        const h2=document.createElement('h2')
    try{
        const url='https://open.er-api.com/v6/latest/ETB'
        const res=await fetch(url)

        if(!res.ok) throw new Error("cant fetch the api")

        const data=await res.json()

        state.rates=data.rates
        statusm.textContent=''
        render()

    }
    catch(error){
        statusm.textContent=error.message
        
    }
    
}

loadRates()

form.addEventListener('submit',(e)=>{
    const result=document.getElementById('result')
    try{
        e.preventDefault()
        const amt = document.getElementById('amt').value
        const newamt=Number(amt)
    
        if(newamt<1 || !newamt){
            result.textContent='incorrect input'
            return
        } 
        const option=document.getElementById('currency').value
        state.amount=newamt
        state.currency=option
        const curRate=state.rates[option]
        if(!curRate) throw new Error("currency doesn't currently have value")
         const final=newamt*curRate
        result.textContent=`${newamt} ${state.base}=${final.toFixed(2)} ${state.currency}`
        
    }
    catch(error){
        result.textContent=error.message
        
    }
    

})



function renderwatch() {
    ul.innerHTML=''

    state.watchlist.forEach((curr)=>{
        const rate=state.rates[curr]?state.rates[curr].toFixed(3) : 'N/A'
        const li=document.createElement('li')

        li.innerHTML=`${curr} : ${rate} <button class='rem' data-c='${curr}'>remove</button>`
        ul.appendChild(li)
    })


    
}

sec.addEventListener('click',(e)=>{

    if(e.target.id==='add'){
        const current=document.getElementById('currency').value || state.currency
        
        if(!state.watchlist.includes(current)){
            state.watchlist.push(current)
            renderwatch()
        }
    }

    if(e.target.classList.contains('rem')){
        const del=e.target.dataset.c;

        state.watchlist=state.watchlist.filter(curr=>curr!== del)
        renderwatch()
    }
})