import React from 'react'
import Link from 'next/link'
export default function NotFound() {
  return (
    <div>
        <p>The requested page cant be found</p>
      <Link href='/'>return home</Link>
    </div>
  )
}
