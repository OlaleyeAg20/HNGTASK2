import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './about.jsx'
import NotFound from './NotFound.jsx'
import ProductPage from './ProductPage.jsx'
import './index.css'
import './assets/css/general-sans.css'

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
    element: <ProductPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
