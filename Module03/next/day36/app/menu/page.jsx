
import React, { Suspense } from 'react'
import Link from 'next/link'
import DishList from './DishList'
import DishSkeleton from './DishSkeleton'


export const revalidate=3600

export default async function MenuPage() {

  return (
    <div>
       
      
      <div>
        <nav>
        <Link href='/cart'>go to cart</Link>
        </nav>
      </div>
      <Suspense fallback={<DishSkeleton/>}>

             <DishList/>
      </Suspense>
       
    </div>
  )
}
