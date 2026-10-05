import HomePage from '@/app/page'
import { notFound } from 'next/navigation'
import React from 'react'
import Link from 'next/link'


// returned 20 pages since the api had 20 dishes
export async function generateStaticParams(){
  const result=await fetch('https://addis-eats-backend.onrender.com/menu/')
  const res=await result.json()
  const dishes=res.data
  return dishes.map((d)=>({id:d.id}))
}

export default async function DishDetailPage({params,}) {
  const {id}= await params
  const result= await fetch('https://addis-eats-backend.onrender.com/menu/')
  const res= await result.json()
  const dishes=res.data || []
  const dish=dishes.find((item)=> String(item.id)=== String(id))

  if(!dish){
    notFound()
  }
  return (
    <div>
      <Link href='/'>home</Link>

      <h2>DISH: {id}</h2>

      <div>
              <h2>{dish.nameEn}</h2>
              <p>{dish.description}</p>
      </div>
    </div>
  )

}
