"use client"
// import { Link } from "next/link";
// import { Tote, Card } from "./Icons";
import { Card } from "../../components/Icons";
import countries from "../countries.json"
import Success from "../../components/checked";
import { useState } from "react";


const countriesOutput = countries.map((e)=>{
    return (<option key={e.countryName}>{e.countryName}</option>)
})




const styling = {
    backgroundImage: "url(.././couch.png)"
}

function CheckoutPage() {
    
    const [paymentDone, setPaymentDone] = useState(false)

    function toggleDisplay(){
        setPaymentDone(true)
    }

    
  return (
    <>
      <div className="bigContainer">
        <div className="containerCheckout">
            <section className="billingDetails">
                <h2>Billing Details</h2>
                <p>
                Already have an account with us?
                {/* <Link className="redLink"> Login</Link> */}
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
                
                <button className="payNow" onClick={toggleDisplay}>
                Pay now
                </button>
            </div>

        </div>
        {paymentDone ? (<Success />) : null}
    </>
  );
}

export default CheckoutPage;
