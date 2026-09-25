
import { CartProvider } from './CartContext'
import Home from './Home'
import Layout from './Layout'
import Menu from './Menu'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import NotFound from './NotFound'
import DishDetail from './DishDetail'
import DeliveryForm from './DeliveryForm'
import RequireAuth from './RequireAuth'
import Signup from './Signup'
import { AuthProvider } from './AuthContext'
function App() {
   

    
    return (
  <AuthProvider>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='menu' element={<Menu/>}/>
          <Route path='menu/:id' element={<DishDetail/>}/>
          
          <Route path='featured'/>
          <Route path='order'/>
          <Route path='checkout' element={
                                <RequireAuth>
                                <DeliveryForm/>
                                </RequireAuth>
                                }/>
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
 
  </AuthProvider>
  )
}

export default App