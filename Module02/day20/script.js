const div=document.getElementById('infobox')
const form=document.querySelector('form')


div.innerHTML=''

async function name() {
  const defau='ethiopia'
  const h1=document.createElement('h1')
  const p=document.createElement('p')
  h1.textContent='Loading...'
  div.appendChild(h1)

  try{
    const response = await fetch(`https://api.restcountries.com/countries/v5/names.common/${defau}`,
    { headers: { 'Authorization': 'Bearer rc_live_4ac9d33003e0440890f16ff041fa5219',
    'Accept': 'application/json'
  } }
)
  if(!response.ok){
    throw new Error("cant find the country")
    
  }

  const maindata = await response.json();
  const [country]=maindata.data.objects

  h1.textContent=country.names.common
  console.log(country)
  const p2=document.createElement('p')
  p2.textContent=`capital: ${country.capitals[0].name}`
  
  const p3=document.createElement('p')
  const popln=Number(country.population).toLocaleString()
  p3.textContent=`population: ${popln}`

  const p4=document.createElement('p')
  p4.textContent=`region: ${country.region}`

  const p5=document.createElement('p')
  p5.textContent=`currency: ${country.currencies[0].code}`
  
  const p6=document.createElement('p')
  p6.textContent=`flag: ${country.flag.description}`
  const img=document.createElement('img')
  img.src=`${country.flag.url_png}`
  img.style.width='50px'
  
  div.appendChild(p2)
  div.appendChild(p3)
  div.appendChild(p4)
  div.appendChild(p5)
  div.appendChild(p6)
  div.appendChild(img)
  

    } catch(error){
      h1.textContent=error.message
    }
    

}
name()



form.addEventListener('submit',(e)=>{
  e.preventDefault()
  div.innerHTML=''
async function newr() {
  const input=document.querySelector('input').value
  const reqst=input
  const h1=document.createElement('h1')
  const p=document.createElement('p')
  h1.textContent='Loading...'
  div.appendChild(h1)

  try{
    const response = await fetch(`https://api.restcountries.com/countries/v5/names.common/${reqst}`,
    { headers: { 'Authorization': 'Bearer rc_live_4ac9d33003e0440890f16ff041fa5219',
    'Accept': 'application/json'
  } }
)
  if(!response.ok){
    throw new Error("cant find the country")
    
  }

  const maindata = await response.json();
  const [country]=maindata.data.objects

  h1.textContent=country.names.common
  console.log(country)
  const p2=document.createElement('p')
  p2.textContent=`capital: ${country.capitals[0].name}`
  
  const p3=document.createElement('p')
  const popln=Number(country.population).toLocaleString()
  p3.textContent=`population: ${popln}`

  const p4=document.createElement('p')
  p4.textContent=`region: ${country.region}`

  const p5=document.createElement('p')
  p5.textContent=`currency: ${country.currencies[0].code}`
  
  const p6=document.createElement('p')
  p6.textContent=`flag: ${country.flag.description}`
  const img=document.createElement('img')
  img.src=`${country.flag.url_png}`
  img.style.width='50px'
  
  div.appendChild(p2)
  div.appendChild(p3)
  div.appendChild(p4)
  div.appendChild(p5)
  div.appendChild(p6)
  div.appendChild(img)
  

    } catch(error){
      h1.textContent=error.message
    }
    

}

newr()
  
})