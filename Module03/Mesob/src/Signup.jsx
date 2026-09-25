import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Signup(){
    const navigate=useNavigate()
    const location = useLocation()

    const from=location.state?.from?.pathname || '/menu'

    const handleSignIn=(e)=>{
        e.preventDefault()
        localStorage.setItem('user',JSON.stringify({loggedIn:true}))

        navigate(from, {replace:true})

    }

    return(
        <>
        <form onSubmit={handleSignIn}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name'required />
            <br />
            <label htmlFor="ph">Phone</label>
            <input type="tel" name='ph' required />
            <br />
            <label htmlFor="em">email</label>
            <input type="email" name='em' required />
            <br />
            <button type="submit">Sign Up</button>
        </form>
        </>
    )
}