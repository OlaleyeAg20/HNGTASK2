import { Star } from "../../components/Icons";
import {initalizeProduct} from "../page"
import ProductCard from "../../components/ProductCard";




export default function ProductPage() {

  const products = initalizeProduct
  const productOutputSliced = products.slice(0,4).map(e => {
    return <ProductCard key={e.id} id={products.indexOf(e)} product={e} />
  })

  return (
    <section className="productInfo">
      <div className="productDetails">
        <h1 className="productName">
          {products[0].name} 
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
          <img src="couch.png" />
        </div>
        <div className="imgNavigation">
          <button className="smallImgBtn">
              <img src={products[0].productImage} alt="" />
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
            <button>-</button>
            <span>15</span>
            <button>+</button>
          </div>
          <button className="addToCart">Add to Cart</button>
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
