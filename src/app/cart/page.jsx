// import { Trash } from "../../components/Icons"
import Link from "next/link"

  let outputCartArray = []

  let renderCartArray

//   let renderCartArray = outputCartArray.map((e)=>{
//     return (
//         <div className="itemData" key={e.item}>
//                     <img src={`.././${e.itemImg}`} alt="img" style={imgStyle} />
//                     <div className="namee spacer">
//                         <p>{e.item}</p>
//                         <p>Color - <span className="color">Blue</span></p>
//                         <p>Price</p>
//                     </div>
//                     <div className="quantity">{e.itemNum}</div>
//                     <button className="delete">
//                         <Trash />
//                     </button>
//         </div>
//     )
//   })


    function  ProductCheckOut(){

      return(
          <>
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
                      <Link href="/payment">
                          <button className="checkoutBtn">Checkout</button>
                      </Link>
                  </div></>
              ) : 
              <div className="emptyCart">
              <div >
                <svg
                  className="svgEmpty"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.9a2 2 0 0 0 1.69-.9L10.88 2a2 2 0 0 1 1.69-.9h2.86a2 2 0 0 1 1.69.9L18.1 5.1a2 2 0 0 0 1.69.9H20Z" />
                  <line x1="12" x2="12" y1="13" y2="17" />
                  <line x1="10" x2="14" y1="15" y2="15" />
                </svg>
              </div>
              <h3 className="h3">No items in the cart</h3>
              <p className="emptyDesc">Get started by adding an item to the cart.</p>
              <Link href='/' className="emptyLink">
                Add New Item
              </Link>
            </div>
              }
              </section>
          </>
      )
    }


export default ProductCheckOut