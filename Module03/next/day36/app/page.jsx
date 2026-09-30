import React from 'react'
import Link from 'next/link'
export default function HomePage() {
  return (
    <div>
        <nav>
            <Link href='/'>home</Link>
            <Link href="/menu">Menu </Link>
            <Link href='/cart'>Cart</Link>
            <Link href="/checkout">Checkout</Link>
        </nav>
        <div>
          home
        </div>
    </div>
  )
}
