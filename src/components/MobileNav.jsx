import { Link } from "next/link"

export default function MobileNav(){
    return (
        <nav className="mobile-nav">
                <Link className="navLinks currentpage" to="/">Home</Link>
                <Link className="navLinks" to="/checkout">Checkout Page</Link>
                <Link className="navLinks" to="/product/1">Product</Link>
        </nav>
    )
}