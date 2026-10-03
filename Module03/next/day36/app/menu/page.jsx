
import React from 'react'
import Link from 'next/link'
import DishList from './DishList'


export const revalidate=3600

export default async function MenuPage() {

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
