import React from 'react'
import Dish from './Dish'
import PropTypes from 'prop-types'
function DishWrapper({children}) {
  return (
    <div>
        {children.map(dish=>(
            <Dish key={dish.id} name={dish.nameEn} price={dish.priceETB} spicey={!dish.spiceLevel.includes('Mild')&& !dish.spiceLevel.includes('Sweet')}/>
        ))}
    </div>
  )
}

DishWrapper.propTypes={
    children:PropTypes.array.isRequired
}
export default DishWrapper