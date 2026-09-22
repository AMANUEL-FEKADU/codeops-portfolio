import React, { useRef, useEffect } from 'react';

function SearchBox() {
  
  const inputRef = useRef(null);

  
  useEffect(() => {
    
    inputRef.current?.focus();
  }, []); 

  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Search dishes by name" 
      />

      <div style={{display:'flex',justifyContent:'center',gap:10}}>
        <button>100% Pure Teff Injera</button>
        <button>Fasting/Tsom Friendly</button>
        <button>Berbere Spicy</button>
      </div>
    </div>
  );
}

export default SearchBox;