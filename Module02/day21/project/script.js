// localStorage.setItem('theme','dark')
// localStorage.removeItem('theme')
// localStorage.clear()



const phPattern = /^(?:\+251|0)9\d{8}$/;
const emPattern= /^[\w.]+@[\w.]+\.com+$/;
const pwdPattern=/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^0-9]{8,}$/
const form=document.querySelector('form')
const count =document.getElementById('count')
function getSignup(){
    const data=localStorage.getItem('signup')
    return data? JSON.parse(data):[]
}

function updateSignup() {
    const sign=getSignup()
    count.textContent=`total signups: ${sign.length}`
    
}
updateSignup()

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name=document.getElementById('name').value
    const email=document.getElementById('em').value
    const pwd=document.getElementById('pwd').value
    const phone=document.getElementById('ph').value
    const emalert=document.getElementById('emalert')
    const phalert=document.getElementById('phalert')
    const pwdalert=document.getElementById('pwdalert')
    
    let phvalid=true
    let emvalid=true
    let pwdvalid=true
    let namvalid=true

    if (name.length < 2) {
    console.log('Name must be at least 2 characters');
    namvalid=false
}
    if(!phPattern.test(phone)){
    console.log('phone pattern doesnt match the ethiopian pattern')
    phalert.style.display='inline'
    phalert.style.color='red'
    phvalid=false
    
   

    }
    if(!emPattern.test(email)){
        console.log('wrong email')
        emalert.style.display='inline'
        emalert.style.color='red'
        emvalid=false
        
    }

    if(!pwdPattern.test(pwd)){
        console.log('pawword must have atleast\n1 uppercase letter\m1lowercase letter\n1special character')
        pwdalert.style.display='inline'
        pwdalert.style.color='red'
        pwdvalid=false
      
    }

    if(phvalid){
        phalert.style.display='inline'
        phalert.textContent='correct phone num'
        phalert.style.color='green'
        
    }
    if(emvalid){
        emalert.style.display='inline'
        emalert.textContent='correct email'
        emalert.style.color='green'
        
    }
    if(pwdvalid){
        pwdalert.style.display='inline'
        pwdalert.textContent='correct password'
        pwdalert.style.color='green'
        
    }
    

    if(emvalid&&phvalid&&pwdvalid){
        const signups=getSignup()
        signups.push({name:name,phone:phone,email:email,password:pwd})
        localStorage.setItem('signup',JSON.stringify(signups))
        updateSignup()
        form.reset()
    }


 }
)


