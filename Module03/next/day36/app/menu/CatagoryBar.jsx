'use client'
import React, { useState } from 'react'
export default function CatagoryBar() {
    const [selected,setSelected]=useState('All')
    const catagories=['All','Stews','Grills']
    return (
    <div>
      {catagories.map(d=>(
        <button key={d}>
            {d}
        </button>
      ))}
    </div>
  )
}
