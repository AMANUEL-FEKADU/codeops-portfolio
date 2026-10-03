
import React from 'react'
import Link from 'next/link'
import CheckOutButton from './CheckOutButton'
import { cookies } from 'next/headers'
export default async function CheckoutPage() {
    const cookiestore=await cookies()
    const session=cookiestore.get("session")?.value||'guest'
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
