const state={
    base:"ETB",
    rates: {}, 
    watchlist: [], 
    amount: 100,
    currency: "USD",
};
const statusm=document.getElementById('status')
const form=document.querySelector('form')

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
        h2.textContent="loading"
        statusm.appendChild(h2)
        const res=await fetch(url)

        if(!res.ok) throw new Error("cant fetch the api")

        const data=await res.json()

        state.rates=data.rates
        statusm.textContent=''
        render()

    }
    catch(error){
        statusm.textContent=error.messge
        
    }
    
}

loadRates()