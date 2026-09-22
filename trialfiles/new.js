const main=document.getElementById('menu')
const cartContainer=document.querySelector('.cart')
const t=document.getElementById('total')
const cart=[]
const menuItems=['burgers','drinks','steaks','desserts','sandwiches']
let menu=[]
let total=0
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
    renderCart()
    } catch (error) {
        console.log(error)
    }
    
    
}

getMenu()

const addToCart=(item)=>{
    cart.push(item)
    renderCart()

}

const renderCart=()=>{
    cartContainer.innerHTML='<h3>Your Cart</h3>'

    if(cart.length===0){
        const empty=document.createElement('p');
        empty.textContent='Cart is empty';
        cartContainer.appendChild(empty)
        return;
    }

    cart.forEach((item,index)=>{
        const cartItem = document.createElement('div');
        cartItem.style.display = 'flex';
        cartItem.style.justifyContent = 'space-between';
        cartItem.style.margin = '8px 0';
        cartItem.style.padding = '5px 10px';
        cartItem.style.border = '1px solid #ddd';

        const nameSpan = document.createElement('span');
        nameSpan.textContent = item.name;

        const priceSpan = document.createElement('span');
        priceSpan.textContent = `$${item.price}`;
        total+=item.price
       t.textContent=`total: $${total}`
        cartItem.appendChild(nameSpan);
        cartItem.appendChild(priceSpan);
     
        cartContainer.appendChild(cartItem);
    })
}


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
            btn.addEventListener('click',()=>addToCart(item))

            div.appendChild(im)
            div.appendChild(h2)
            div.appendChild(price)
            div.appendChild(rate)
            div.appendChild(btn)
            div.className='card'
            main.appendChild(div)
    }
        
        
        

        
    } catch (error) {
        
    }
}

