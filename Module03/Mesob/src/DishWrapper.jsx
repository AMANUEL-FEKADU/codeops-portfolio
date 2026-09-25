import React from 'react'
import Dish from './Dish'
import PropTypes from 'prop-types'
import styles from './DishWrapper.module.css'
import { dishImages } from './assets/dishImages'
import { Link } from 'react-router-dom'
function DishWrapper({children, onAdd}) {

  return (
    <div className={styles.container}>
        {children.map(dish=>(
          <Link key={dish.id} to={`/menu/${dish.id}`} style={{textDecoration:'none',color:'rgb(71, 69, 72)'}}>
            <Dish 
                key={dish.id} 
                id={dish.id} 
                image={dishImages[dish.slug]} 
                name={dish.nameEn} 
                price={dish.priceETB} 
                spicey={!dish.spiceLevel.includes('Mild')&& !dish.spiceLevel.includes('Sweet')} 
                onAdd={onAdd}/>
                </Link>
        ))}
    </div>
  )
}

DishWrapper.propTypes={
    children:PropTypes.array.isRequired
}
export default DishWrapper