import React from 'react'
import Link from 'next/link'

export default async function DishList({dishes}) {
  return (
    <div>
        {dishes.map(d=>(
            <div key={d.id} style={{border:'1px solid tomato'}}>
                <h3>{d.name}</h3>
                <p>{d.price}</p>
                <Link href={`/menu/${d.id}`}>
                    view detail
                </Link>
            </div>
        ))}
               
    </div>
  )
}
