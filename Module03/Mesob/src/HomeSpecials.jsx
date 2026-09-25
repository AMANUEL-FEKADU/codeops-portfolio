import React from 'react'
import { useFetch } from './useFetch'
import { userCartStore } from './userCartStore'
import { dishImages } from './assets/dishImages'
import styles from './HomeSpecials.module.css'
import { GiKnifeFork } from "react-icons/gi";

export default function HomeSpecials() {
  const { data: menu, loading, error } = useFetch('/dishes.json')
  const addItem = userCartStore((state) => state.addItem)

  if (loading || error) return null

  const dishes = menu || []
  const specialDishes = dishes.filter((dish) => dish.isSpecial)

  if (specialDishes.length === 0) return null

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}> <GiKnifeFork/>Today's Specials</h2>

      <div className={styles.flexWrapper}>
        {specialDishes.map((dish) => {
          const imageSrc = dishImages[dish.slug] || dish.image

          return (
            <div key={dish.id} className={styles.card}>
              <div>
                <img
                  src={imageSrc}
                  alt={dish.name}
                  className={styles.cardImage}
                />
                <div className={styles.cardBody}>
                  <h3 className={styles.title}>{dish.name}</h3>
                  <p className={styles.description}>{dish.description}</p>
                </div>
              </div>

              <div className={styles.footer}>
                <span className={styles.price}>
                  {dish.priceETB || dish.price} ETB
                </span>
                <button
                  onClick={() => addItem(dish)}
                  className={styles.addBtn}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}