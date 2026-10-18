'use client'

import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

export default function OrderStatus({ id, initial }) {
  const { data, error } = useSWR(`/api/orders/${id}`, fetcher, {
    fallbackData: initial, 
    refreshInterval: 5000,      
  })

  if (error) {
    return (
      <div>
        <p>Could not load the order details.</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Order #{data?.id || id}</h2>
      <div>
        Status: <span>{data?.status}</span>
      </div>
      {data?.updatedAt && (
        <p>
          Last updated: {new Date(data.updatedAt).toLocaleTimeString()}
        </p>
      )}
    </div>
  )
}