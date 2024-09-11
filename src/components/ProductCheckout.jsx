import { Trash } from "./Icons"
import Footer from "./Footer"
import {useEffect } from "react"


  
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
                    <button className="delete">
                        <Trash />
                    </button>
        </div>
    )
  })


    function  ProductCheckOut(){

      return(
          <>
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