import React, { useState } from 'react'
import styles from './DeliveryForm.module.css'
function DeliveryForm() {
    const [formData,setFormData]=useState({ 
        name:"",phone:"",area:''
})
   
    const ph=/^(?:\+251|251|0)?([79]\d{8})$/
    
    function handleChange(e){
       const {name,value}=e.target

       setFormData({...formData,[name]:value})
       }
    const phval=ph.test(formData.phone)
    const frval=formData.name.trim()!=='' &&formData.area.trim()!=='' &&phval 

    
  return (  
    <>
    <div className={styles.container}>
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange}/> <br /> <br />
            <label htmlFor="phone">phone</label>
            <input type='tel' name='phone' value={formData.phone} onChange={handleChange}/> <br /> <br />
           {formData.phone&&!phval &&(
            <span> Invalid phone num <br /> <br /></span> 
           )}
           <label htmlFor="">area</label>
            <textarea name="area" id="" value={formData.area} onChange={handleChange}></textarea>  <br /> <br />
            <button disabled={!frval}>submit</button>
        </form>
    </div>
    </>
  )
}

export default DeliveryForm