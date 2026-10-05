import React from 'react'
import Link from 'next/link'

export default async function DishList() {
await new Promise((resolve) => setTimeout(resolve, 2000))
  const result = await fetch('https://addis-eats-backend.onrender.com/menu/')
  const res = await result.json()
  const dishes = res.data || []
  return (
    <div>
        {dishes.map(d=>(
            <div key={d.id} style={{border:'1px solid tomato'}}>
                <h3>{d.nameEn}</h3>
                <p>{d.description}</p>
                <p>{d.priceETB}</p>
                <Link href={`/menu/${d.id}`}>
                    view detail
                </Link>
            </div>
        ))}
               
    </div>
  )
}
