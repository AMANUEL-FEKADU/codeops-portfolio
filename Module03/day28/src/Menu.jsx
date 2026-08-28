import Dish from "./Dish"
import "./App.css"
import Card from "./Card"
import { useState } from "react"
import Catagory from "./Catagory"
import DishList from "./DishList"
function Menu({menuDishes}) {



const [selecetedcatagory, setSelectedCatagoty]=useState('All')

const [total,setTotal]=useState(0)

const filtered= selecetedcatagory==='All'
?menuDishes
:menuDishes.filter(dish=>dish.category===selecetedcatagory)

function handleadd(dishprice){
  setTotal(prev=>prev + dishprice)
}
  return (
    <>
     <Catagory seleceted={selecetedcatagory} onSelect={setSelectedCatagoty}/>
      <div className="ordertotal">
        <h4>Total Order: {total} ETB</h4>
      </div>
     <DishList dishes={filtered} addOrder={handleadd}/>
      
    </>
  )
}


export default Menu
