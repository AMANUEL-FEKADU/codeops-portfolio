import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext' 

export default function RequireAuth({ children }) {
    const location = useLocation()
    const { user } = useAuth() 

    if (!user) {
        return <Navigate to='/signup' replace state={{ from: location }} />
    }

    return children
}