import React, { useState } from 'react'
import PropTypes from 'prop-types' 
import styles from './Dish.module.css'
import { userCartStore } from './userCartStore'

const Dish = React.memo(function Dish({ id, image, name, price, spicey, currency = 'ETB', onAdd }) {
    const [count, setCount] = useState(0)
    const addItem = userCartStore((state) => state.addItem)
    
    const handleClick = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setCount(prevCount => prevCount + 1)
        addItem({id,name,price,image})
       
    }

    return (
        <div className={styles.container}>
            <div>
                <img 
                    src={image} 
                    alt={name}
                    className={styles.dishim}  
                />
                {Boolean(spicey) && <div className={styles.bdg}>spicy</div>}
            </div>

            <h3>{name}</h3> <span>{count}</span>
            <h3>price: {price} {currency}</h3>
           
            <button onClick={handleClick}>Add</button>
        </div>
    )
})

Dish.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicey: PropTypes.bool,
    image: PropTypes.string,
    currency: PropTypes.string,
    onAdd: PropTypes.func
}

export default Dish