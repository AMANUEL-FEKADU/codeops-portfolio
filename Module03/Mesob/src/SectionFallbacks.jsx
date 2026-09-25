import React from 'react'

export function MenuUnavailable() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', background: '#fff0f0' }}>
      <h2>Menu Unavailable</h2>
      <p>We couldn't load the menu right now. Your cart and navigation are still working.</p>
      <button onClick={() => window.location.reload()}>Reload Menu</button>
    </div>
  )
}

export function CartUnavailable() {
  return (
    <div style={{ padding: '1rem', background: '#fff0f0' }}>
      <h3>Cart Unavailable</h3>
      <p>Could not render cart summary.</p>
    </div>
  )
}

export function BuggyDish() {
 
  return <div>Normal Dish Component</div>
}