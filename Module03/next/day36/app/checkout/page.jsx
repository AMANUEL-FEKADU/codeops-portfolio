
import React from 'react'
import Link from 'next/link'
import CheckOutButton from './CheckOutButton'
export default function CheckoutPage() {
  return (
   <>
    <div>
        <nav>
            <Link href='/'>go to home</Link>
        </nav>
        <div>
            checkout page
        </div>
        <CheckOutButton/>
    </div>
    </>
  )
}
