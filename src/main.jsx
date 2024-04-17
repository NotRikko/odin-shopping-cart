import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CartProvider } from './CartProvider.jsx'
import HomePage from './Components/HomePage/HomePage.jsx'
import ProductPage from './Components/ProductPage/ProductPage.jsx'
import CheckoutPage from './Components/CheckoutPage/CheckoutPage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/products',
    element: <ProductPage />, 
  },
  {
    path: '/products/:productID',
    element: <ProductPage />, 
  },
  {
    path: '/checkout',
    element: <CheckoutPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
