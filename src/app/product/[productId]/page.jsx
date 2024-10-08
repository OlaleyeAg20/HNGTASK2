"use client"
import { useState } from "react";
import { Star } from "../../../components/Icons";
import ProductCard from "../../../components/ProductCard";
import { useParams } from "next/navigation";


const initalizeProduct = [
  {
      "productName": "Atlas Extra Large Slipcover Modular Floor Sectional Sofa",
      "productPrice": 998,
      "productImage": "couch.png",
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

export default function ProductPage() {

    const [itemNumber, setItemNumber] = useState(0)
    const params = useParams()

    function increaseItemNumber(){
        setItemNumber(e => e + 1)
    }

    function decreaseItemNumber(){
        setItemNumber(e => e > 0 ? e - 1 : e)
    }

    function addToCartLogic(){
        setItemNumber(0)
    }

  const products = initalizeProduct
  const productOutputSliced = products.slice(0,4).map(e => {
    return <ProductCard key={e.id} id={products.indexOf(e)} product={e} img={'../../' + e.productImage} />
  })


  return (
    <section className="productInfo">
      <div className="productDetails">
        <h1 className="productName">
          {products[params.productId - 1].productName}
        </h1>
        <div className="rating">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <span className="reviewNumbers">&nbsp; (15 reviews)</span>
        </div>
        <h2 className="price">${products[params.productId - 1].productPrice}</h2>
        <div className="productImgContainer">
          <img src={'../../' + products[params.productId - 1].productImage} alt={`Image of ${products[params.productId - 1].productName}`} />
        </div>
        <div className="imgNavigation">
          <button className="smallImgBtn">
              <img src={'../../' + products[params.productId - 1].productImage} alt="" />
          </button>
          <button className="smallImgBtn">
              <img src=".././extra1.png" alt="" />
          </button>
          <button className="smallImgBtn">
              <img src=".././extra2.png" alt="" />
          </button>
          <button className="smallImgBtn">
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
            <button onClick={decreaseItemNumber}>-</button>
            <span>{itemNumber}</span>
            <button onClick={increaseItemNumber}>+</button>
          </div>
          <button className="addToCart" onClick={addToCartLogic}>Add to Cart</button>
            <button className="payNow greenBtn">
                    Checkout
            </button>
        </div>
        <div className="productSpecs">
          <div>
            <label htmlFor="spec1">
              <span>Dimensions</span> <span>+</span>
            </label>
            <input type="checkbox" className="radioBtn" name="spec" id="spec1" />
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
            <input type="checkbox" className="radioBtn" name="spec" id="spec3" />
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
            <input type="checkbox" className="radioBtn" name="spec" id="spec2" />
            <div>
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
            </div>
          </div>
          <div>
            <label htmlFor="spec4">
              <span>Sustainability</span> <span>+</span>
            </label>
            <input type="checkbox" className="radioBtn" name="spec" id="spec4" />
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
  );
}
