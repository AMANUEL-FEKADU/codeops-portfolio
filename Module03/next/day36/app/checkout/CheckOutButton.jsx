'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
export default function CheckOutButton() {
    const router=useRouter();
    const handleorder=()=>{
        alert('ordered placed')
        router.push('/')
    }
  return (
    <div>
      <button onClick={handleorder}>
        place order
      </button>
    </div>
  )
}
