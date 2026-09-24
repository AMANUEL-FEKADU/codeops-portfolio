import React, { useState } from 'react'
import PropTypes from 'prop-types' 
import styles from './Dish.module.css'
function Dish({image,name,price,spicey, currency='ETB',onAdd}) {
    const[count,setCount]=useState(0)
    const handleClick=()=>{
        setCount(count+1)
        onAdd(price)
    }
  return (
    <div className={styles.container}>
      <div>
        <img src={image} 
             alt=""
             className={styles.dishim}  />
        {Boolean(spicey)&& <div className={styles.bdg}>spicy</div>}

        </div>
        <h3>{name}</h3> <span> {count}</span>
        <h3>price:{price}{currency}</h3>
       
       <button onClick={handleClick}>Add</button>
    </div>
  )
}
Dish.propTypes ={
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicey: PropTypes.bool
}

export default Dish