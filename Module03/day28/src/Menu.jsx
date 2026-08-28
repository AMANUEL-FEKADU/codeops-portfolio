import Dish from "./Dish"
import "./App.css"
import Card from "./Card"
import { useState } from "react"
import Catagory from "./Catagory"
import DishList from "./DishList"
function Menu({menuDishes}) {



const [selecetedcatagory, setSelectedCatagoty]=useState('All')




const filtered= selecetedcatagory==='All'
?menuDishes
:menuDishes.filter(dish=>dish.category===selecetedcatagory)


  return (
    <>
     <Catagory seleceted={selecetedcatagory} onSelect={setSelectedCatagoty}/>
     <DishList dishes={filtered}/>
      
    </>
  )
}


export default Menu
