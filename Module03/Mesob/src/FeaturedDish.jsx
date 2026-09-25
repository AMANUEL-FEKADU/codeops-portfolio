import React from 'react'
import { useFetch } from './useFetch'
import { userCartStore } from './userCartStore'
import styles from './Dish.module.css'
import featuredStyles from './FeaturedDish.module.css'
import { dishImages } from './assets/dishImages'
import { MdFoodBank } from "react-icons/md";

export default function FeaturedDish() {
  const { data: menu, loading, error } = useFetch('/dishes.json')
  const addItem = userCartStore((state) => state.addItem)

  if (loading) return <div className={featuredStyles.statusMessage}>Loading specials...</div>
  if (error) return <div className={featuredStyles.errorMessage}>{error}</div>

  const dishes = menu || []
  const specialDishes = dishes.filter((dish) => dish.isSpecial)

  if (specialDishes.length === 0) {
    return <div className={featuredStyles.statusMessage}>No featured specials available today!</div>
  }

  return (
    <div className={featuredStyles.container}>
      <h2 className={featuredStyles.heading}> <span className={featuredStyles.ic}><MdFoodBank/></span>Today's Featured Specials</h2>
      
      <div className={featuredStyles.grid}>
        {specialDishes.map((dish) => {
          const imageSrc = dishImages[dish.slug]
          return (
            <div 
              key={dish.id} 
              className={`${styles.container} ${featuredStyles.card}`}
            >
              <div>
                <img 
                  src={imageSrc} 
                  alt={dish.name} 
                  className={`${styles.dishim} ${featuredStyles.dishImage}`} 
                />
                <h3>{dish.name}</h3>
                {dish.spicey && <span className={styles.bdg}>spicy</span>}
                
                <p className={featuredStyles.description}>
                  {dish.description}
                </p>
              </div>

              <div>
                <p className={featuredStyles.price}>
                  Price: {dish.priceETB || dish.price} ETB
                </p>
                <button onClick={() => addItem(dish)}>Add Special to Cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}