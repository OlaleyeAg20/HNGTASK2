import Header from "./Header";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import products from "./products.json";
import { Star } from "./Icons";
import ProductCard from "./ProductCard";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import Form from "./Form";
import { useState } from "react";

const productsOutput = products.map(e => {
    return <ProductCard key={e.id} product={e} />
  })

const productOutputSliced = productsOutput.slice(4,8)

export default function ProductPage() {

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
    localStorage.setItem("itemsInCart", numberTracker + numberValue)
    setNumberValue(0)
  }
  function emptyCart(){
    setNumberValue(0)
    localStorage.setItem("itemsInCart", 0)
    numberValue++
    setNumberValue(numberValue)
}

  const params = useParams();
  const productIndex = Number(params.productId);
  
  const imgArray = [".././extra1.png", ".././extra2.png", ".././extra3.png"]

  const [currentImg, setCurrentImg] = useState(".././" + products[productIndex - 1].productImage)

  function changeOne(){
    setCurrentImg(".././" + products[productIndex - 1].productImage)
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

  return (
    <>
      <ScrollToTop />
      <div className="announcementBar">Free Shipping on All Orders</div>
      <Header tote="0" />
      <nav className="nav flex-justify-align-center">
                <Link className="navLinks" to="/">Shop</Link>
                <Link className="navLinks currentpage" to="/product/1">Cart Page</Link>
                <Link className="navLinks" to="/checkout">Checkout Page</Link>
        </nav>
      <section className="productInfo">
        <p className="sectionparagraph">
          Shop {`>`} Cart Page
        </p>
        <div className="productDetails">
          <h1 className="productName">
            {products[productIndex - 1].productName}
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
            <img src={currentImg} />
          </div>
          <div className="imgNavigation">
            <button className="smallImgBtn" onClick={changeOne}>
                <img src={".././" + products[productIndex - 1].productImage} alt="" />
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
            <button className="payNow" id="emptyCart" onClick={emptyCart}>
                    Empty Cart
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
