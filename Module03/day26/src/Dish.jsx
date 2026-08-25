function Dish({dishName,price}){

    return(
     
        <div className="dish">
            <h2>{dishName}</h2>
            <h2>{price} ETB</h2>
        </div>
  
    )
}
export default Dish