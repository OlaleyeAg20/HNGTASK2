import Header from "./Header"
import { Link } from "next/link"
import { Trash } from "./Icons"
import Footer from "./Footer"
// import products from "./products.json";
import { useState, useEffect } from "react"
import ProductCard from "./ProductCard";
import ScrollToTop from "./ScrollToTop";

const cors_api = "https://standing-ink-sandpaper.glitch.me/"

const originalApi = "https://api.timbu.cloud/products?organization_id=77956dd905a0423cb2e95533c90a4964&reverse_sort=true&size=12&Appid=R7R161YTU4X763G&Apikey=3adf4c4b1f074d828e4310e3aff6d61720240712135500609041"

function ProductCheckOut(){
  const [products, setProducts] = useState([])
  
const productsOutput = products.map(e => {
    return <ProductCard key={e.id} product={e} />
  })

const productOutputSliced = productsOutput.slice(4,8)


  
  useEffect(()=>{
    fetch(cors_api + originalApi)
    .then(res => res.json())
    .then(data => {
      setProducts(data.items)
      })
  },[]);

  const getItemsInCart = products.map((e)=>{
    return (products.indexOf(e))
  })

  let imgStyle = {
    width: "80px",
    height: "80px",
    borderRadius: ".25rem"
}

  let outputCartArray = []

  for(let i = 0; i < getItemsInCart.length; i++){
    const item = localStorage.getItem(`item${getItemsInCart[i + 1]}`)
    const itemNum = localStorage.getItem(`amount${getItemsInCart[i + 1]}`)
    const itemImg = localStorage.getItem(`img${getItemsInCart[i + 1]}`)

    if(item){
        outputCartArray.push({item, itemNum, itemImg})
    }
  }

  function deleteItem(btn){
    localStorage.removeItem(`item${btn}`)
    localStorage.removeItem(`amount${btn}`)
    localStorage.removeItem(`img${btn}`)
  }

  let renderCartArray = outputCartArray.map((e)=>{
    return (
        <div className="itemData" key={e.item}>
                    <img src={`.././${e.itemImg}`} alt="img" style={imgStyle} />
                    <div className="namee spacer">
                        <p>{e.item}</p>
                        <p>Color - <span className="color">Blue</span></p>
                        <p>Price</p>
                    </div>
                    <div className="quantity">{e.itemNum}</div>
                    <button className="delete" onClick={function(){deleteItem(outputCartArray.indexOf(e))}}>
                        <Trash />
                    </button>
        </div>
    )
  })


    return(
        <>
        <ScrollToTop />
            <div className="announcementBar">Free Shipping on All Orders</div>
            <Header />
            <nav className="nav flex-justify-align-center">
                        <Link className="navLinks" to="/">Home</Link>
                        <Link className="navLinks" to="/product/1">Shop</Link>
                        <Link className="navLinks currentpage" to="/checkout">Product</Link>
            </nav>
            <section className="pageContainer">
            {renderCartArray ? (
                <>
                <div className="sectionHeaer">
                    <h1>Cart</h1>
                    <p>{outputCartArray.length} Items in your cart</p> 
                </div>
                <div className="tableheader">
                    <h4>Product</h4>
                    <div className="spacer1"></div>
                    <h4 className="quantity">Quantity</h4>
                    <h4>Delete</h4>
                </div>
                {renderCartArray}
                <div className="calculation">
                    <p><span>SubTotal</span> <span>$2023</span></p>
                    <div className="bolded">
                        <h1>Total</h1>
                        <h1>$3050</h1>
                    </div>
                    <p>Taxes and shippings are calculated at checkout</p>
                    <Link to="/payment">
                        <button className="checkoutBtn">Checkout</button>
                    </Link>
                </div></>
            ) : <h1>No Item In Cart</h1>}
            </section>
            <h2 className="shopSimilar">Shop Similar Items</h2>
          <div className="similarItems">
            {productOutputSliced}
          </div>
            <Footer />
        </>
    )
}

export default ProductCheckOut