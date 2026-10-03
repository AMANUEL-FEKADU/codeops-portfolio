import HomePage from '@/app/page'
import { notFound } from 'next/navigation'
import React from 'react'
import Link from 'next/link'


// returned 3 pages since i only had 3 id's
export async function generateStaticParams(){
  const dishes=[{id:'kitfo'},{id:'shiro'},{id:'doro-wot'}]

  return dishes.map((dish)=>({
    id:dish.id
  }))

}
export default async function DishDetailPage({params}) {
  const {id}= await params
  if(id ==='unknown'){
    notFound()
  }
  return (
    <div>
      <Link href='/'>home</Link>

      <h2>DISH: {id}</h2>
    </div>
  )
}
