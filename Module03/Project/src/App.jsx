import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Featured from './Featured';
import OrderCart from './OrderCart';
import OrderForm from './OrderForm';
import Login from './Login';
import NotFound from './NotFound';
import RequireAuth from './RequireAuth';
import { AuthProvider } from './AuthContext';
import { ThemeContext } from './ThemeContext';
import { CartProvider } from './CartContext';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="menu" element={<Menu />} />
              <Route path="menu/:id" element={<DishDetail />} />
              <Route path="featured" element={<Featured />} />
              <Route path="ordercart" element={<OrderCart />} />
              <Route path="login" element={<Login />} />

              {/* Protected Delivery & Checkout Route */}
              <Route 
                path="delivery" 
                element={
                  <RequireAuth>
                    <OrderForm />
                  </RequireAuth>
                } 
              />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </ThemeContext.Provider>
  );
};

export default App;