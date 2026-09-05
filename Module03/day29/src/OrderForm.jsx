import React, { useState } from 'react'

function OrderForm() {
    const [order,setOrder]=useState({name:''
        ,phone:'',area:'Bole'
    })
    function handlechange(e){
        const {name,value}=e.target
        setOrder(prev=>({...prev,[name]:value}))
    }
    const phoneRegex = /^(?:\+251|0)[79]\d{8}$/

    const valid=phoneRegex.test(order.phone)

    
  return (
    <>
    <main className='formain'>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={order.name} onChange={handlechange}/> <br />
        <br />
        <label htmlFor="phone">Phone</label>
        <input type="tel" name='phone' id='phone' value={order.phone}  onChange={handlechange} /> <br />
        {order.phone && !valid &&(
            <span style={{color:'red'}}>Enter valid phone</span>
        )}
        <br />
        <label htmlFor="area">Area</label>
        <select name="area" id="" value={order.area} onChange={handlechange}>
            <option value="Bole">Bole</option>
            <option value="Piyassa">Piyassa</option>
            <option value="Mexico">Mexico</option>
            <option value="Megenagna">Megenagna</option>
        </select> <br />

        <button className={valid?'bt':'btn'} disabled={!valid}>submit</button>
      </form>
    </main>
    </>
  )
}

export default OrderForm