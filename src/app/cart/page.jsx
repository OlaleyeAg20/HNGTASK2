// import { Trash } from "../../components/Icons"
import Link from "next/link"
import Footer from "../../components/Footer"
import { PlusCircle } from "lucide-react"

const products = [
    {
        "productName": "Atlas Extra Large Slipcover Modular Floor Sectional Sofa",
        "productPrice": 998,
        "productImage": "./couch.png",
        "id": 1
    },
    {
        "productName": "Beryl Curved 3-Seater Couch Sofa and Lounge Chair by Acanva",
        "productPrice": 456,
        "productImage": "couch2.png",
        "id": 2
    },
    {
        "productName": "Persia Suedette 2-Piece Chaise Sectional Sofa and Armchair",
        "productPrice": 2050,
        "productImage": "couch3.png",
        "id": 3
    },
    {
        "productName": "Dori Boucle Curved 3-Seater Couch Sofa and Lounge Chair",
        "productPrice": 1280,
        "productImage": "couch4.png",
        "id": 4
    },
    {
        "productName": "Jell Armchair in Beige Fabric by Alter Ego Studio",
        "productPrice": 998,
        "productImage": "couch5.png",
        "id": 5
    },
    {
        "productName": "George Smith Kilim Standard Arm Sofa",
        "productPrice": 456,
        "productImage": "couch6.png",
        "id": 6
    },
    {
        "productName": "Albert Park Demi Mid-Sofa",
        "productPrice": 2050,
        "productImage": "couch7.png",
        "id": 7
    },
    {
        "productName": "Corduroy Velvet Camaleonda Modular Sofa",
        "productPrice": 1280,
        "productImage": "couch8.png",
        "id": 8
    },
    {
        "productName": "Atlas Extra Large Slipcover Modular Reversible Floor Sectional Sofa",
        "productPrice": 998,
        "productImage": "couch9.png",
        "id": 9
    },
    {
        "productName": "Beryl Curved 3-Seater Couch Sofa and Lounge Chair by Acanva",
        "productPrice": 456,
        "productImage": "couch10.png",
        "id": 10
    },
    {
        "productName": "Persia Suedette 2-Piece Chaise Sectional Sofa and Armchair",
        "productPrice": 2050,
        "productImage": "couch11.png",
        "id": 11
    },
    {
        "productName": "Dori Boucle Curved 3-Seater Couch Sofa and Lounge Chair",
        "productPrice": 1280,
        "productImage": "couch12.png",
        "id": 12
    }
  ]

  let imgStyle = {
    width: "80px",
    height: "80px",
    borderRadius: ".25rem"
}

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