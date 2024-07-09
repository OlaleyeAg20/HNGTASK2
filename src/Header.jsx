import {User, MenuIcon, Tote, SearchIcon, Close} from "./Icons"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Header(){
 
    const [hide, setHide] = useState(false)

    function handleClick(){
        setHide(true)
    }

    function handleHide(){
        setHide(false)
    }

    let itemsInCart = localStorage.getItem("itemsInCart")

    return (
        <>
        <header>
            <button className="iconBtns flex-justify-align-center" onClick={handleClick} id="menuBtn"><MenuIcon /></button>
            {
                hide ? (<nav className="mobile-nav">
                    <button onClick={handleHide} className="closeBtn"><Close /></button>
                    <Link className="navLinks currentpage" to="/">Shop</Link>
                    <Link className="navLinks" to="product/1">Cart Page</Link>
                    <Link className="navLinks" to="/checkout">Checkout Page</Link>
            </nav>) : null
            }
            <Link to="/" className="logoLink"><h2 className="logo">The Garage</h2></Link>
            <div className="searchBar">
                <span className="searchIcon"><SearchIcon /></span>
                <input type="search" placeholder="Search for products, brands or a reference number" />
            </div>
            <Link to="/checkout">
                <button className="tote iconBtns flex-justify-align-center" id="cartBtn" value={itemsInCart}><Tote /></button>
            </Link>
            <button className="iconBtns flex-justify-align-center"><User /><span>Account</span></button>
        </header>
        </>
    )
}