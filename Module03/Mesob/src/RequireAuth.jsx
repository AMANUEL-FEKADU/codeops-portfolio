import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'


export default function RequireAuth({children}){
    const location=useLocation()
    const isAuthenticated=Boolean(localStorage.getItem('user'))

    if(!isAuthenticated){
        return <Navigate to='/signup' replace state={{from: location}}/>
    }

    return children
}