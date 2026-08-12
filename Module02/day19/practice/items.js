const items=['watch','phone','laptop']
let ul=document.getElementById('ul')

items.forEach(item=>{
    let li=document.createElement('li')
    li.textContent=item + ' '
   
    const del=document.createElement('button')
    del.textContent='delete'
    
    li.appendChild(del)
    ul.append(li)
    
})

ul.addEventListener('click',(e)=>{
    if(e.target.tagName==='BUTTON'){
        e.target.parentElement.remove();
    }
})

