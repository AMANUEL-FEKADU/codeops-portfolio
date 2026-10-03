
import React from 'react'
import Link from 'next/link'
import DishList from './DishList'
export default async function MenuPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
 
  return (
    <div>
       
      
      <div>
        <nav>
        <Link href='/cart'>go to cart</Link>
        </nav>
      </div>
      
        <DishList/>
    </div>
  )
}
