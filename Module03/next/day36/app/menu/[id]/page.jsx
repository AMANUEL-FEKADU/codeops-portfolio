import HomePage from '@/app/page'
import { notFound } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
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
