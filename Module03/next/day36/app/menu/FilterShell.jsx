'use client'

import React, { useState } from 'react'

export default function FilterShell({ dishes = [], children }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(dishes.map((d) => d.category).filter(Boolean))]

  return (
    <div>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '8px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div>{children}</div>
    </div>
  )
}