import Header from "./Header";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Star } from "./Icons";
import ProductCard from "./ProductCard";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import Form from "./Form";
import { useState, useEffect } from "react";




export default function ProductPage() {

  const cors_api = "https://standing-ink-sandpaper.glitch.me/"

const originalApi = "https://api.timbu.cloud/products?organization_id=77956dd905a0423cb2e95533c90a4964&reverse_sort=true&size=12&Appid=R7R161YTU4X763G&Apikey=3adf4c4b1f074d828e4310e3aff6d61720240712135500609041"

  let [products, setProducts] = useState([{
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  },
  {
    name: "productName",
    current_price: [{NGN: [20000]}],
    photos: [{url: 'the-garage/product_vision_corner_set_8fa690_1.jpg'}]
  }
])

  useEffect(()=>{
    fetch(cors_api + originalApi)
    .then(res => res.json())
    .then(data => {
      setProducts(data.items)
      })
  },[products]);

  
  const params = useParams();
  const productIndex = Number(params.productId);


  const retrieveProducts = localStorage.getItem(`item${params.productId}`)
  const retrieveProducts1 = localStorage.getItem(`item2`)

  console.log(retrieveProducts, retrieveProducts1, params.productId)

  function trackItemAddedToCart(){
    localStorage.setItem(`item${params.productId}`, products[productIndex - 1].name)
    localStorage.setItem(`img${params.productId}`, products[productIndex - 1].photos[0].url)
    localStorage.setItem(`amount${params.productId}`, numberValue)
  }
  
  const imgArray = [".././extra1.png", ".././extra2.png", ".././extra3.png"]

  const [currentImg, setCurrentImg] = useState(".././couch.png")

  function changeOne(){
    setCurrentImg(products[productIndex - 1].photos[0].url)
  }

  function changeTwo(){
    setCurrentImg(imgArray[0])
  }
  function changeThree(){
    setCurrentImg(imgArray[1])
  }
  function changeFour(){
    setCurrentImg(imgArray[2])
  }
  

  const productsOutput = products.map(e => {
      return <ProductCard key={e.id} product={e} />
    })
  
  const productOutputSliced = productsOutput.slice(4,8)


  let [numberValue, setNumberValue] = useState(0)

  function increament(){
    numberValue++
    setNumberValue(numberValue)
  }
  function decreament(){
    numberValue <= 0 ? numberValue : numberValue--
    setNumberValue(numberValue < 0 ? 0 : numberValue)
  }

  let numberTracker = Number(localStorage.getItem("itemsInCart"))
  function handleItems(){
    if(numberValue != 0 && numberValue > 0){
      trackItemAddedToCart()
    }
    localStorage.setItem("itemsInCart", numberTracker + numberValue)
    setNumberValue(0)
  }
//   function emptyCart(){
//     setNumberValue(0)
//     localStorage.setItem("itemsInCart", 0)
//     numberValue++
//     setNumberValue(numberValue)
// }

  return (
    <>
      <ScrollToTop />
      <div className="announcementBar">Free Shipping on All Orders</div>
      <Header tote="0" />
      <nav className="nav flex-justify-align-center">
                <Link className="navLinks" to="/">Home</Link>
                <Link className="navLinks currentpage" to="/product/1">Shop</Link>
        </nav>
      <section className="productInfo">
        <div className="productDetails">
          <h1 className="productName">
            {products[productIndex - 1].name}
          </h1>
          <div className="rating">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <span className="reviewNumbers">&nbsp; (15 reviews)</span>
          </div>
          <h2 className="price">$998</h2>
          <div className="productImgContainer">
            <img src={"https://api.timbu.cloud/images/" + currentImg} />
          </div>
          <div className="imgNavigation">
            <button className="smallImgBtn" onClick={changeOne}>
                <img src={products[productIndex - 1]} alt="" />
            </button>
            <button className="smallImgBtn" onClick={changeTwo}>
                <img src=".././extra1.png" alt="" />
            </button>
            <button className="smallImgBtn" onClick={changeThree}>
                <img src=".././extra2.png" alt="" />
            </button>
            <button className="smallImgBtn" onClick={changeFour}>
               <img src=".././extra3.png" alt="" />
            </button>
          </div>
          <p className="productDescription">
            This comfortable living room couch will provide a fresh and pleasing
            look to your space and will be the center of attention thanks to its
            design. This designer style french boucle sofas creates an inviting
            space for your guests or family entertainment activities.
          </p>
          <div className="color">
            <p>
              Color: <span className="clorValue">Blue</span>
            </p>
            <span className="colorCircle"></span>
          </div>
          <div className="productSelection">
            <div className="btns">
              <button onClick={decreament}>-</button>
              <span>{numberValue}</span>
              <button onClick={increament}>+</button>
            </div>
            <button className="addToCart" onClick={handleItems}>Add to Cart</button>
              <button className="payNow greenBtn" onClick={function(){open("/checkout", "_self")}}>
                      Checkout
              </button>
          </div>
          <div className="productSpecs">
            <div>
              <label htmlFor="spec1">
                <span>Dimensions</span> <span>+</span>
              </label>
              <input type="radio" className="radioBtn" name="spec" id="spec1" />
              <p>
                {`Overall Dimensions: 32.5"W x 33.75"D x 27"H
Product Weight: 54 Lbs
Seat Height: 15"
Seat Depth: 25"
Interior Seat Width: 30"
Leg Height: 7''`}
              </p>
            </div>
            <div>
              <label htmlFor="spec3">
                <span>Care</span> <span>+</span>
              </label>
              <input type="radio" className="radioBtn" name="spec" id="spec3" />
              <p>
                {`Overall Dimensions: 32.5"W x 33.75"D x 27"H
Product Weight: 54 Lbs
Seat Height: 15"
Seat Depth: 25"
Interior Seat Width: 30"
Leg Height: 7''`}
              </p>
            </div>
            <div>
              <label htmlFor="spec2">
                <span>Details</span> <span>+</span>
              </label>
              <input type="radio" className="radioBtn" name="spec" id="spec2" />
              <p>
                <ul>
                  <li>Weight Capacity: 300 lbs</li>
                  <li>Fabric Content: 74% Cotton, 26% Linen</li>
                  <li>Fabric Color: Ivory</li>
                  <li>
                    Stain Resistant Fabric: Yes, Performance Fabric Upholstery
                    Is An Easy-To-Clean And Long-Lasting Material Crafted From A
                    Blend Of Synthetic And Natural Fibers.
                  </li>
                  <li>Seat Construction: Spring</li>
                  <li>Legs Removable: Yes</li>
                  <li>Imported</li>
                </ul>
              </p>
            </div>
            <div>
              <label htmlFor="spec4">
                <span>Sustainability</span> <span>+</span>
              </label>
              <input type="radio" className="radioBtn" name="spec" id="spec4" />
              <p>
                Non Toxic and Low VOC
                Volatile organic compounds (VOCs) are airborne chemicals that are released during the manufacturing of furniture.
              </p><br />
              <p>
                These products help reduce indoor air pollution and the risk of chemical exposure while aiding in creating healthier indoor environments.
              </p>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
          <h2 className="shopSimilar">Shop Similar Items</h2>
          <div className="similarItems">
            {productOutputSliced}
          </div>
      </section>
    <Form />
    <Footer />
    </>
  );
}
