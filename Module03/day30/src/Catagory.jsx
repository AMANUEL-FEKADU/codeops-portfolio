import React from 'react'

function Catagory({seleceted,onSelect}) {
  const target = ["All", "Vegetarian", "Breakfast", "Side", "Main"]

  return (
    <div className="chiphold">
      {target.map((option) => (
        <button
          key={option}
          className={seleceted === option ? 'chip-active' : 'chip'}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
    
  )
}

export default Catagory