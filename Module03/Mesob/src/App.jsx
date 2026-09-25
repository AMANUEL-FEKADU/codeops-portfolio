import React, { lazy, Suspense } from 'react'
import { CartProvider } from './CartContext'
import Home from './Home'
import Layout from './Layout'
import Menu from './Menu'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import NotFound from './NotFound'
import DishDetail from './DishDetail'
import RequireAuth from './RequireAuth'
import Signup from './Signup'
import { AuthProvider } from './AuthContext'
import { ErrorBoundary } from './ErrorBoundary'
import { MenuUnavailable, CartUnavailable } from './SectionFallbacks'
import FeaturedDish from './FeaturedDish'
import OrderCart from './OrderCart'

const DeliveryForm = lazy(() => import('./DeliveryForm'))
const Receipt = lazy(() => import('./Receipt'))

function RouteSkeleton() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h3>Loading page chunk...</h3>
    </div>
  )
}

function App() {
   

    
    return (
  <AuthProvider>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='menu' element={<ErrorBoundary fallback={<MenuUnavailable />}>
                                        <Menu />
                                      </ErrorBoundary>}/>
          <Route path='menu/:id' element={<DishDetail/>}/>    
          <Route path='featured' element={<FeaturedDish/>}/>
          <Route path='order' element={<OrderCart/>}/>
          <Route path='checkout' element={
                               <ErrorBoundary fallback={<div>Checkout is currently unavailable.</div>}>
                                  <Suspense fallback={<RouteSkeleton />}>
                                    <RequireAuth>
                                      <DeliveryForm />
                                    </RequireAuth>
                                  </Suspense>
                                </ErrorBoundary>
                                }/>
          <Route 
              path='receipt' 
              element={
                <ErrorBoundary fallback={<div>Receipt unavailable.</div>}>
                  <Suspense fallback={<RouteSkeleton />}>
                    <Receipt />
                  </Suspense>
                </ErrorBoundary>
              } 
            />
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
 
  </AuthProvider>
  )
}

export default App