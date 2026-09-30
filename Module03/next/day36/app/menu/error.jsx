'use client'
import React from 'react'
export default function error({error,reset}) {
  return (
    <div>
      <h2>something went wrong</h2>
      <p> {error?.message || "Failed to display error"}</p>
    </div>
  )
}
