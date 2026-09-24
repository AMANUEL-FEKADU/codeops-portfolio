import React, { useEffect, useRef } from 'react'

function Searchbox() {
    const searchRef=useRef(null)

    useEffect(()=>{
        searchRef.current.focus()
    },[])
  return (
    <>
    <div>
        <input ref={searchRef} type="text" placeholder='search for a meal...' />
    </div>
    </>
  )
}

export default Searchbox