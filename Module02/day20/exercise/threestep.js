const ul=document.querySelector('ul')
ul.textContent='from usd to:'
ul.style.fontWeight=800
async function exchange() {
    try {
        const res=await fetch('https://openexchangerates.org/api/latest.json?app_id=06a440b4969847b0b3cca9895ed48f1a&prettyprint=false&show_alternative=false')
        if(!res.ok){
            throw new Error("Error while fetching data")
        }
        const data=await res.json()
        for(const [key,value] of Object.entries(data.rates)){
            const li=document.createElement('li')
            li.textContent=`${key} : ${value}`
            ul.appendChild(li)

        }
    } catch (error) {
        console.log(error)
    }
    
}

exchange()