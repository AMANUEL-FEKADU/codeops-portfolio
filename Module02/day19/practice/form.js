const tasks=[]
const input=document.querySelector('input')
const ul=document.querySelector('ul')
const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const task=input.value.trim()

    if(task){
        let li=document.createElement('li')
        li.textContent=task
        ul.appendChild(li)
        input.value=''
    }
})