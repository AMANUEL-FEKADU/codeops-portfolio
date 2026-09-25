import React, { useEffect, useState, useCallback } from 'react'
import Header from './Header'

import CatagoryBar from './CatagoryBar'
import DishWrapper from './DishWrapper'
import DeliveryForm from './DeliveryForm'
import Searchbox from './Searchbox'
import { useFetch } from './useFetch'
import { CartProvider, useCart } from './CartContext'

function MenuContent() {
    
    const [catagory,setCatagory]=useState('All Dishes')
    const {dispatch,total}=useCart()
    
    const{data:menu,loading,error}=useFetch('/dishes.json')
    const handlecartTotal = useCallback((dish) => {
    dispatch({ type: 'add', dish })
  }, [dispatch])
    const currentMenu=menu||[]
    const displayed=catagory==='All Dishes'?
                    currentMenu
                    :currentMenu.filter(dishe=>dishe.category===catagory)

    useEffect(()=>{
        document.title=displayed.length
    },[displayed])
         if(loading) return <div>Loading...</div>    
        if(error) return <div>{error}</div>



    return (
   <>

   <Header/>
   <p>total:{total}</p>
   <Searchbox/>
   <CatagoryBar select={catagory} onSelect={setCatagory} menu={currentMenu}/>
   {displayed.length===0? <div>Empty</div>: <DishWrapper children={displayed} onAdd={handlecartTotal}/>}
    <DeliveryForm/>
   
   </>
  )
}

export default function Menu(){
    return(
        <CartProvider>
            <MenuContent/>
        </CartProvider>
    )
}