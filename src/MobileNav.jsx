import { Link } from "react-router-dom"

export default function MobileNav(){
    return (
        <nav className="mobile-nav">
                <Link className="navLinks currentpage" to="/">Shop</Link>
                <Link className="navLinks" to="/product/1">Cart Page</Link>
                <Link className="navLinks" to="/checkout">Checkout Page</Link>
        </nav>
    )
}