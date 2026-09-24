import React, { useEffect, useState } from 'react'
import styles from './CatagoryBar.module.css'
function CatagoryBar({select,onSelect,menu}) {
    const options=['All Dishes','Traditional Stews & Wat','Tibs & Grills','Fasting & Vegan / Tsom','Raw & Cured Delicacies / Kitfo','Beverages & Tej']
    const getCount=(catName)=>{
        if (catName === 'All Dishes') return menu.length
        return( menu.filter(item=>item.category===catName).length)
    }
    
   
  return (
    <>
    <div className={styles.container}>
    {options.map(ele=>(
      
        <button key={ele}
                className={ele===select? styles.chipon:styles.chip}
                onClick={()=>onSelect(ele)}
        > {ele} ({getCount(ele)})</button>
    ))}
    </div>
    </>
  )
}

export default CatagoryBar