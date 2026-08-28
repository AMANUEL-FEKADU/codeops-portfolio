import PropTypes from 'prop-types'
import { useState } from 'react'

function Dish({dishName,price,currency="ETB",spicy=false,addOrder}){

    const[count,setCount]=useState(0)
    function handleclick(){
        setCount(prev=>prev+1)
        if(addOrder){
            addOrder(price)
        }
    }
    return(
     
        <>
            <h2>{dishName}</h2>
            <h2>{price} {currency}</h2>
            <h4>{Boolean(spicy)&& <span>spicy</span>}</h4>
            <button onClick={handleclick} >ADD</button>
            <h4>item:{count}</h4>
        </>
  
    )
}
Dish.propTypes={
    dishName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicy:PropTypes.bool
}
export default Dish