import React from 'react'

function page({params}) {
    const { id }=params
  return (
    <div>
        <p>{id}</p>
    </div>
  )
}

export default page