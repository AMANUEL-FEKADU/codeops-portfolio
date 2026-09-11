const main=document.getElementById('menu')

const menuItems=['burgers','drinks','steaks','desserts','sandwiches']
let menu=[]
const getMenu = async () => {

    try {
        for(let i=0;i<menuItems.length;i++) {
            const items=await fetch(`https://free-food-menus-api-two.vercel.app/${menuItems[i]}`)
            const res= await items.json()
            const sliced=res.slice(0,10)
            console.log(`${menuItems[i]}`,sliced)
            localStorage.setItem(`${menuItems[i]}`,JSON.stringify(sliced))
            menu.push(...sliced)
    }
    console.log('menu\'s are',menu)
    render()
        
    } catch (error) {
        console.log(error)
    }
    
    
}

getMenu()


const render=()=>{
    try {
   
        const shuffle=[...menu].sort(()=>Math.random()-0.5)
        for(let i=0;i<shuffle.length;i++){  
            const item=shuffle[i]
            
      
            let div=document.createElement('div')
            let im=document.createElement('img')
            const h2=document.createElement('h2')
            const price=document.createElement('h4')
            const rate=document.createElement('h4')
            const btn=document.createElement('button')
            

            h2.textContent=item.name
            im.src=item.img
            price.textContent=`$ ${item.price}`
            rate.textContent=`rating: ${item.rate}`
            btn.textContent='Add to cart'
            div.appendChild(im)
            div.appendChild(h2)
            div.appendChild(price)
            div.appendChild(rate)
            div.appendChild(btn)
            main.appendChild(div)
    }
        
        
        

        
    } catch (error) {
        
    }
}

