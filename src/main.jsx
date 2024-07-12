import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './about.jsx'
import NotFound from './NotFound.jsx'
import ProductPage from './ProductPage.jsx'
import './index.css'
import './assets/css/general-sans.css'
// import CheckoutPage from './CheckoutPage.jsx'
import ProductCheckOut from './ProductCheckout.jsx'
import CheckoutPage from './CheckoutPage.jsx'

fetch("https://api.timbu.cloud/products?organization_id=77956dd905a0423cb2e95533c90a4964&reverse_sort=false&size=30&Appid=R7R161YTU4X763G&Apikey=3adf4c4b1f074d828e4310e3aff6d61720240712135500609041")
.then(res => res.json())
.then(data => console.log(data))

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  errorElement: <NotFound />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/product/:productId',
    element: <ProductPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/checkout',
    element: <ProductCheckOut />,
    errorElement: <NotFound />,
  },
  {
    path: '/payment',
    element: <CheckoutPage />,
    errorElement: <NotFound />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
