import React, { useEffect, useState, useCallback } from 'react'
import Header from './Header'

import CatagoryBar from './CatagoryBar'
import DishWrapper from './DishWrapper'

import Searchbox from './Searchbox'
import { useFetch } from './useFetch'
import { CartProvider, useCart } from './CartContext'
import { useSearchParams } from 'react-router-dom'

function Menu() {
    const[searchParams,setSearchParams]=useSearchParams()
    const category=searchParams.get('category')||'All Dishes'
    const {dispatch,total}=useCart()
    
    const{data:menu,loading,error}=useFetch('/dishes.json')
    const handlecartTotal = useCallback((dish) => {
    dispatch({ type: 'add', dish })
  }, [dispatch])

  const handleselected=(newCAt)=>{
    if(newCAt==="All Dishes"){
        setSearchParams({})
    } else{
        setSearchParams({category:newCAt})
    }
  }
    const currentMenu=menu||[]
    const displayed=category==='All Dishes'?
                    currentMenu
                    :currentMenu.filter(dishe=>dishe.category===category)

    useEffect(()=>{
        document.title=displayed.length
    },[displayed])
         if(loading) return <div>Loading...</div>    
        if(error) return <div>{error}</div>



    return (
   <>

 
   <p>total:{total}</p>
   <Searchbox/>
   <CatagoryBar select={category} onSelect={handleselected} menu={currentMenu}/>
   {displayed.length===0? <div>Empty</div>: <DishWrapper children={displayed} onAdd={handlecartTotal}/>}
   
   
   </>
  )
}

export default  Menu