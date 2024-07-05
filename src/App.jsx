// import { Link } from "react-router-dom"
import Header from "./Header"
import NavBar from "./NavBar"
import ProductCard from "./ProductCard"
import products from "./products.json"


const productsOutput = products.map(e => {
  return <ProductCard key={e.id} product={e} />
})

function App() {

  return (
    <>
      <div className="announcementBar">Free Shipping on All Orders</div>
      <Header />
      <NavBar />
      <div className="productsContainer">
        {productsOutput}
      </div>
    </>
  )
}

export default App
