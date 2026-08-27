import PropTypes from 'prop-types'

function Dish({dishName,price,currency="ETB",spicy=false}){

    return(
     
        <>
            <h2>{dishName}</h2>
            <h2>{price} {currency}</h2>
            <h4>{Boolean(spicy)&& <span>spicy</span>}</h4>
        </>
  
    )
}
Dish.propTypes={
    dishName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicy:PropTypes.bool
}
export default Dish