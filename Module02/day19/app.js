const form=document.querySelector('form')
const name=document.getElementById('name')
const price=document.getElementById('price')
const ul=document.querySelector('ul')
const total=document.querySelector('h3')
let trackPrice=0
form.addEventListener('submit',(e)=>{
    e.preventDefault()

   
    const validName=name.value.trim()
    const validprice=Number(price.value)
    
    if(validName && validprice){
         const li=document.createElement('li')
         const del=document.createElement('button')

         del.textContent='delete'
         del.classList.toggle('del')
         li.dataset.price = validprice;
         trackPrice+=validprice

        
        
        li.textContent=validName+' '+validprice+' '
        total.innerHTML=`total: ${trackPrice}`
        name.value=''
        price.value=''
        li.appendChild(del)
        ul.appendChild(li)
    }
    

})

ul.addEventListener('click',(e)=>{
    if(e.target.tagName==='BUTTON'){
        const itemprice=Number(e.target.parentElement.dataset.price)
        trackPrice-=itemprice
        total.textContent=`total:${trackPrice}`
        e.target.parentElement.remove()
            

    }

    else if(e.target.tagName==='LI'){
        e.target.classList.toggle('bought')
    }
})
