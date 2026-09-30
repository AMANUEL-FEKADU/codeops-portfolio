import React from 'react'
import Link from 'next/link'
export default function DishList() {
    const dishes=[
        { id: "kitfo", name: "Special Kitfo", price: "450 ETB" },
    { id: "shiro", name: "Shiro Tegabeno", price: "220 ETB" },
    { id: "doro-wat", name: "Doro Wat", price: "550 ETB" }
    ]
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
