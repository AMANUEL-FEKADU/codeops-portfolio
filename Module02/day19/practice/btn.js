let btn=document.querySelector('button')
let div=document.querySelector('div')
btn.addEventListener('click',(e)=>{
    console.log('btn observer',e.target)
})

div.addEventListener('click',(e)=>{
    console.log('div observer',e.target)
})