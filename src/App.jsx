// import { Link } from "react-router-dom"
import Header from "./Header"
import NavBar from "./NavBar"
import ProductCard from "./ProductCard"
import products from "./products.json"
import Form from "./Form"
import Footer from "./Footer"


const productsOutput = products.map(e => {
  return <ProductCard key={e.id} product={e} />
})

function App() {

  return (
    <>
      <div className="announcementBar">Free Shipping on All Orders</div>
      <Header />
      <NavBar className="nav" />
      <div className="productsContainer">
        {productsOutput}
      </div>
      <Form />
      <Footer />
    </>
  )
}

export default App
