const cities=['Addis Ababa','Adama','Gonder']
let ul=document.querySelector('ul')


cities.forEach(city=>{
    let li=document.createElement('li')
    li.textContent=city
    ul.appendChild(li)
})
