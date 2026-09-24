import React, { useEffect, useState } from 'react'
import Header from './Header'

import CatagoryBar from './CatagoryBar'
import DishWrapper from './DishWrapper'
import DeliveryForm from './DeliveryForm'
import Searchbox from './Searchbox'
import { ThemeProvider } from './ThemeContext'
import { useFetch } from './useFetch'

function Menu() {
    
    const [catagory,setCatagory]=useState('All Dishes')
    const [total,setTotal]=useState(0)
  
    
        const{data:menu,loading,error}=useFetch('/dishes.json')
    function handlecartTotal(price){
        setTotal(total+price)
    }
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
   <ThemeProvider>
   <Header/>
   <p>total:{total}</p>
   <Searchbox/>
   <CatagoryBar select={catagory} onSelect={setCatagory} menu={currentMenu}/>
   {displayed.length===0? <div>Empty</div>: <DishWrapper children={displayed} onAdd={handlecartTotal}/>}
    <DeliveryForm/>
    </ThemeProvider>
   </>
  )
}

export default Menu