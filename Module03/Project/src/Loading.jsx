import React from 'react'
import Header from './Header'
import im from './assets/blocks-shuffle-3.svg'
function Loading() {
  return (
    <>
      <Header/>
      <div style={{display:'flex', justifyContent:'center' }}>
           <img src={im} alt="" />
      </div>
    </>
  )
}

export default Loading