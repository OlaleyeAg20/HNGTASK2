// import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "./Header"
import NavBar from "./NavBar"
import ProductCard from "./ProductCard"
// import products from "./products.json"
import Form from "./Form"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"



function App() {
  const cors_api = "https://standing-ink-sandpaper.glitch.me/"

  const [page, setPage] = useState(1)
  
  const originalApi = `https://api.timbu.cloud/products?organization_id=77956dd905a0423cb2e95533c90a4964&reverse_sort=true&size=12&Appid=R7R161YTU4X763G&page=${page}&Apikey=3adf4c4b1f074d828e4310e3aff6d61720240712135500609041`


  function nextPage(){
    window.scrollTo(0, 0)
    setPage(page + 1)
  }
  function prevPage(){
    window.scrollTo(0, 0)
    setPage(page - 1)
    }

  const [products, setProducts] = useState([])
  
  useEffect(()=>{
    fetch(cors_api + originalApi)
    .then(res => res.json())
    .then(data => {
      console.log(data.items[0].photos)
      setProducts(data.items)
      })
  },[page, originalApi]);


  
  const productsOutput = products.map(e => {
    return <ProductCard key={e.id} id={products.indexOf(e)} product={e} />
  })
  // console.log(products[0].photos[0].url)

  return (
    <>
      <div className="announcementBar">Free Shipping on All Orders</div>
      <ScrollToTop />
      <Header />
      <NavBar className="nav" />
      <div className="productsContainer">
        {productsOutput}
      </div>
      <div className="navigationBtnContainer">
        {page > 1 ? <button className="navigationBtn" onClick={prevPage}>Previous</button> : null}
        <p>Page {page} of 3</p>
        {page < 3 ? <button className="navigationBtn" onClick={nextPage}>Next</button> : null}
      </div>
      <Form />
      <Footer />
    </>
  )
}

export default App
