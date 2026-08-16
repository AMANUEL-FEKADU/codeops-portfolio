const form=document.querySelector('form')
const phPattern=/^(?:\+251|0)9\d{8}$/;
const count=document.getElementById('count')

function sign(){
    const data=localStorage.getItem('signup')
    return data? JSON.parse(data):[]
}

function update(){
    const sig=sign()
    count.textContent=`total count: ${sig.length}`
}
update()
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name=document.getElementById('name').value
    const ph=document.getElementById('ph').value
    
    const nm=document.getElementById('nm')
    const pn=document.getElementById('pn')

    if(name.length<2){
        nm.textContent="Name length nust be greater than 2"
        nm.style.color='red'
    }

    if(!phPattern.test(ph)){
        pn.textContent="phone doesn't match ethiopian style"
        pn.style.color='red'

    }
    if(name.length>2){
        nm.textContent=''
    }
    if(phPattern.test(ph)){
        pn.textContent=''
    }

    if(name.length>2 && phPattern.test(ph)){
        const signed=sign()
        signed.push({name:name,phone:ph})
        localStorage.setItem('signup',JSON.stringify(signed))
        update()
        form.reset()
    }
    
    
    
})