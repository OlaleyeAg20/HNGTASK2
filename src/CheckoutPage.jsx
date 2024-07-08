import { Link } from "react-router-dom";
// import { Tote, Card } from "./Icons";
import { Card } from "./Icons";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import countries from "./countries.json"
import Footer from "./Footer";


const countriesOutput = countries.map((e)=>{
    return (<option>{e.countryName}</option>)
})

const styling = {
    backgroundImage: "url(.././couch.png)"
}

function CheckoutPage() {
  return (
    <>
    <ScrollToTop />
      <div className="announcementBar">Free Shipping on All Orders</div>
      <Header />
      <nav className="nav flex-justify-align-center">
                <Link className="navLinks" to="/">Shop</Link>
                <Link className="navLinks" to="/product/1">Cart Page</Link>
                <Link className="navLinks currentpage" to="/checkout">Checkout Page</Link>
        </nav>
      <div className="bigContainer">
        <div className="containerCheckout">
            <section className="billingDetails">
                <h2>Billing Details</h2>
                <p>
                Already have an account with us?
                <Link className="redLink">Login</Link>
                </p>
                <input
                type="email"
                name="email"
                id="emailInput"
                placeholder="Email Adress"
                />
            </section>
            <section className="shippingAddress">
                <h2>Shipping Address</h2>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Company Name"/>
                <input type="text" placeholder="Address"/>
                <select name="country" id="country">
                    <option value="default">Select Country</option>
                    {countriesOutput}
                </select>
                <input type="text" placeholder="Phone Number"/>
                <input type="text" placeholder="City"/>
            </section>
            <section className="paymentSection">
                <h2>Payment</h2>
                <p>All transaction are secured and encrypted</p>
                <label htmlFor="" className="radio">
                    <input type="radio" name="" id="" checked/>
                    <p>Credit Card</p>
                    <span className="cardImage">
                        <Card className="cardImage"/>
                    </span>
                </label>
                <input type="text" placeholder="Card number"/>
                <input type="text" placeholder="Expiration (mm/yy)"/>
                <input type="text" placeholder="Security code"/>
                <input type="text" placeholder="Name on card"/>
                <div className="useShipping">
                    <input type="checkbox" name="" id="checkbox" />
                    <label htmlFor="checkbox">Use shipping Address as billing address</label>
                </div>
            </section>
                <div className="rememberSection">
                    <h4>Remember Me</h4>
                    <label htmlFor="check" className="saveMy">
                        <input type="checkbox" name="" id="check" />
                        Save my information for a faster checkout
                    </label>
                </div>
                <div className="promoSection">
                    <div className="promoProduct">
                        <div className="imgg" style={styling}></div>
                        <p>
                            <span>
                            Atlas Extra Large Slipcover Modular Floor Sectional Sofa
                            </span>&nbsp;
                            <span className="priceTagged">$998</span>
                        </p>
                    </div>
                    <input type="text" placeholder="Enter your Promo Code"/>
                    <button className="applyBtn">Apply</button>
                    <p><span>SubTotal</span><span>$998</span></p>
                    <p><span>Shipping</span><span>Enter Shipping Address</span></p>
                    <p className="boldPara"><span>Total</span><span>$1028</span></p>
                </div>
                <button className="payNow">
                Pay now
                </button>
            </div>

        </div>
        <Footer />
    </>
  );
}

export default CheckoutPage;
