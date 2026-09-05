import React from 'react'
import Card from './Card'
import Dish from './Dish'
function DishList({dishes,addOrder}) {
  if(dishes.length===0){
  return (
    <>
    <main className="menu">
      <p>No dishes in this catagory</p>
    </main>
    
    </>

)}

return(
    <main className="menu">
       
        {dishes.map((dish)=>(
          <Card key={dish.id}>
            <Dish dishName={dish.name} price={dish.price} spicy={dish.spicy} addOrder={addOrder}/>

          </Card>
        ))} </main>

)
}

export default DishList