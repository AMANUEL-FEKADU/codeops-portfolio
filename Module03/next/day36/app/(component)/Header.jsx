import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div>
        <nav>
            <Link href='/'>home</Link>
            <Link href="/menu">Menu </Link>
            <Link href='/cart'>Cart</Link>
            <Link href="/checkout">Checkout</Link>
        </nav>
    </div>
  )
}

export default Header