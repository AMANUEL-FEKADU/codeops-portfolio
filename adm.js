const form=document.querySelector('form')
const field=document.querySelector('fieldset')
let items=[]
const div=document.querySelector('div')
const ul=document.createElement('ul')
const count=document.querySelector('h2')
div.appendChild(ul)
form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const name=document.getElementById('name')
    const amt=document.getElementById('amt')

    const curerror=field.querySelector('span')
    if(curerror) curerror.remove()
    if(!name.value || !amt.value){
        const span=document.createElement('span')
        span.textContent='incorrect input'
        span.style.color='red'
        span.id='error'
        field.appendChild(span)
        console.log(error)
        return

    }

    items.push({id:Date.now() , name:name.value,amt:amt.value, done:false})
    name.value=''
    amt.value=''
    render()

})

const render=()=>{
    ul.innerHTML=''
    count.textContent=items.filter(i=>!i.done).length

    items.forEach(i=>{
        const li=document.createElement('li')
        const span=document.createElement('span')
        const btn=document.createElement('BUTTON')

        if(i.done){
           span.classList.add('done') 
        }
        li.dataset.id=i.id
        span.textContent=`${i.name} ---- ${i.amt}`
        btn.textContent='delete'
        li.appendChild(span)
        li.appendChild(btn)
        ul.appendChild(li)
    })

}
render()

ul.addEventListener('click',e=>{
    const listele=e.target.closest('li')
    if(!listele) return

    const itid=Number(listele.dataset.id)
    const targetit=items.find(i=>i.id===itid)

    if(!targetit) retrun

    if(e.target.tagName==="BUTTON"){
        items=items.filter(i=>i.id!==itid)
    } else{
        targetit.done=!targetit.done
    }
    render()
})