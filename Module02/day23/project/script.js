const cur=document.getElementById('cur')
const form=document.querySelector('form')
const income=document.getElementById('income')
const expence=document.getElementById('expence')
const catagory=document.getElementById('catagory')
const historyt=document.querySelector('.transaction')
const total=document.getElementById('total')

let transaction_hist=JSON.parse(localStorage.getItem('transactions')) || [];

function getStoredTotal() {
    const raw = localStorage.getItem('total');
    if (!raw || raw === 'null' || raw === 'undefined') return 0;
    return JSON.parse(raw);
}

total.textContent=`${getStoredTotal()} ETB`

const catagoryIcons={
            'eating out':"fa-solid fa-utensils",
            'transport':"fa-solid fa-car-side",
            'rent':"fa-solid fa-house",
            'stock':"fa-solid fa-money-bill-trend-up",
            'crypto':"fa-solid fa-bitcoin-sign",
            'side hustle':"fa-solid fa-dice-six",
            'salary':"fa-solid fa-briefcase",
            'water':"fa-solid fa-droplet",
            'electricity':"fa-solid fa-lightbulb",
            'internet':"fa-solid fa-wifi",
            'gas':"fa-solid fa-gas-pump",
            'entertainment':"fa-solid fa-tv",
            'shopping':"fa-solid fa-cart-shopping",
            'medical':"fa-solid fa-kit-medical",
            'education':"fa-solid fa-book",
            'debt':"fa-regular fa-credit-card",

        }


async function tracker() {

    try{
        const res=await fetch('https://open.er-api.com/v6/latest/ETB')

        if(!res.ok) throw new Error('cant fetch this api')

        const data= await res.json()

        const currency=data.rates
        localStorage.setItem('rates',JSON.stringify(currency))

   }
   catch(error){
        console.log(error.message)
    } 
    

}
function load(){
    try{
    const data=localStorage.getItem('rates')
    if(!data) return;
                
    const parsed=JSON.parse(data)
    cur.innerHTML=''
    for(const [key,value] of Object.entries(parsed)){
        const option=document.createElement('option')
        option.value=key
        option.textContent=key
        cur.appendChild(option)

        }
    for(const [key,value] of Object.entries(catagoryIcons)){
        const option=document.createElement('option')
        option.value=key
        option.textContent=key
        catagory.appendChild(option)
    }
                    
    }
    catch(error){
        console.log(error.message)
        }
        renderTopSpending()
           
    }
   
load()

income.addEventListener('click',(e)=>{
    e.preventDefault()
    try{
       
        const amt=document.getElementById('amt')
        const castAmt=Number(amt.value)
        if(castAmt<1 || !castAmt){
            throw new Error('number must be greater than 1')
            return
        }
        let result=castAmt
        if(cur.value && cur.value!=='ETB'){
            const rateamt=localStorage.getItem('rates')
            if(!rateamt) throw new Error('Exchange rates not loaded')

            const rates=JSON.parse(rateamt)
            const rate=rates[cur.value]

            if(!rate) throw new Error('selected currency rate not found')
            result=castAmt/rate
            }


        const transaction={
            'currency':cur.value,
            'amount':castAmt,
            'amtinetb':Number(result.toFixed(2)),
            'type':'income',
            'catagoty':catagory.value,
            'id':Date.now()  
        }

       
        transaction_hist.push(transaction)
        localStorage.setItem('transactions',JSON.stringify(transaction_hist))
        
        const currenttotal=getStoredTotal()
        const final=Number(Number(currenttotal)+result).toFixed(2)
        localStorage.setItem('total',JSON.stringify(final))
        amt.value=''
    }
    catch(error){
        console.log(error.message)
    }
    render()
    renderTopSpending()
    
})

expence.addEventListener('click',(e)=>{
    e.preventDefault()

    try {
        const amt=document.getElementById('amt')
        const castamt=Number(amt.value)

        if(!castamt||castamt<=0){
            throw new Error('invalid input')
            return
        }
        let result=castamt

        if(cur.value!=='ETB'){
            const rateamt=localStorage.getItem('rates')
            if(!rateamt) throw new Error('Exchange rates not loaded')

            const rates=JSON.parse(rateamt)
            const rate=rates[cur.value]

            if(!rate) throw new Error('selected currency rate not found')
            result=castamt/rate
            }


        const transaction={
            'currency':cur.value,
            'amount':castamt,
            'amtinetb':Number(result.toFixed(2)),
            'type':'expence',
            'catagoty':catagory.value,
            'id':Date.now()  
        }

          const currenttotal=getStoredTotal()
          
        if (currenttotal < Number(result.toFixed(2))) {
            window.alert('you cant expend more than your total')
            return
        }
    
         transaction_hist.push(transaction)
        localStorage.setItem('transactions',JSON.stringify(transaction_hist))
        
        const final=Number(currenttotal-result).toFixed(2)
        localStorage.setItem('total',JSON.stringify(final))
        amt.value=''
        
        
    } catch (error) {
        console.log(error.message)
    }
    render()
    renderTopSpending()
})




function render(){
    try{

    
    historyt.innerHTML=''
    const data=localStorage.getItem('transactions')
    const parsed=JSON.parse(data)

    const amount=getStoredTotal()
    total.textContent=`${amount} ETB`
    if(!parsed || parsed.length===0){
        const div=document.createElement('div')
        const p=document.createElement('p')
        p.innerHTML='No history recorded'
        div.appendChild(p)
        historyt.appendChild(div)
        return
        
    }
   
    
    

    for(let item of parsed){
        const div=document.createElement('div')
        const icon=document.createElement('i')
        const iconClass=catagoryIcons[item.catagoty] ||'fa-solid fa-receipt'
        const p=document.createElement('p')
        const h4=document.createElement('h4')
        const btn=document.createElement('button')

       

        icon.className=`${iconClass}`
        icon.style.color='white'
        icon.style.backgroundColor='gray'
        icon.style.padding='8px'
        icon.style.borderEndEndRadius='10px'
        icon.style.borderTopLeftRadius='10px'
        p.textContent=item.catagoty
        h4.textContent=`${item.amtinetb} ETB`
        h4.className=item.type==='income'? 'inc':'exp'
        btn.innerHTML = '<i class="fa-solid fa-trash"></i>'
        btn.className='del'
        btn.setAttribute('data-id', item.id);
        btn.style.color='white'

        div.appendChild(icon)
        div.appendChild(p)
        div.appendChild(h4)
        div.appendChild(btn)
        
        historyt.appendChild(div)

        
    }
  }
  catch(error){
    console.log(error.message)
    console.log(error)
  }

  renderTopSpending()
}
render()
tracker()

historyt.addEventListener('click',(e)=>{
    const delbtn=e.target.closest('.del')

    if(!delbtn) return

    const iddel=Number(delbtn.getAttribute('data-id'))

    const targeted=transaction_hist.find(item=>item.id===iddel)

    if(targeted){
        const currnt=Number(getStoredTotal())
        let upd=currnt

        if(targeted.type==='income'){
            upd-=targeted.amtinetb
        }
        else if(targeted.type==='expence'){
            upd+=targeted.amtinetb
        }
        localStorage.setItem('total',JSON.stringify(Number(upd.toFixed(2))))
    }
    transaction_hist=transaction_hist.filter(item=>item.id!==iddel)

    localStorage.setItem('transactions',JSON.stringify(transaction_hist))

    render()
    renderTopSpending()
})


function renderTopSpending() {
    const listContainer = document.getElementById('top-spending-list');
    if (!listContainer) return;

    const rawData = localStorage.getItem('transactions'); 
    const transactions = rawData ? JSON.parse(rawData) : [];

   
    const categoryTotals = transactions
        .filter(t => t.type === 'expense' || t.type === 'expence')
        .reduce((acc, t) => {
            const amount = parseFloat(t.amtinetb) || parseFloat(t.amount) || 0;
            const categoryName = t.catagoty || t.catagory || 'Uncategorized';
            acc[categoryName] = (acc[categoryName] || 0) + amount;
            return acc;
        }, {});

  
    const sortedCategories = Object.entries(categoryTotals)
        .map(([category, total]) => ({ category, total }))
        .sort((a, b) => b.total - a.total);

    if (sortedCategories.length === 0) {
        listContainer.innerHTML = `<span class="no-history-badge">NO SPENDING DATA</span>`;
        return;
    }

    const htmlString = sortedCategories.slice(0, 5).map(item => {
        const iconClass = catagoryIcons[item.category] || 'fa-solid fa-receipt';

        return `
            <div class="spending-item">
                <span class="cat-label"><i class="${iconClass}"></i> ${item.category}</span>
                <span class="leader-line"></span>
                <span class="cat-amount">${item.total.toLocaleString()} ETB</span>
            </div>
        `;
    }).join('');

    listContainer.innerHTML = htmlString;
}