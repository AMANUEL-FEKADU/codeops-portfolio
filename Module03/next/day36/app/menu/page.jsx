
import React, { Suspense } from 'react'
import Link from 'next/link'
import DishList from './DishList'
import DishSkeleton from './DishSkeleton'
import FilterShell from './FilterShell';

export const revalidate = 3600;
export default async function MenuPage() {
              
  const result=await fetch('https://addis-eats-backend.onrender.com/menu/')
  const res=await result.json()
  const dishes=res.data
    
  return (
    <div>
       
      
      <div>
        <nav>
        <Link href='/cart'>go to cart</Link>
        </nav>
      </div>
      <FilterShell dishes={dishes}>
        <Suspense fallback={<DishSkeleton/>}>

              <DishList/>
        </Suspense>
      </FilterShell>
      

    </div>
  )
}
