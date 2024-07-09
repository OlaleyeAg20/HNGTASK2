import { Link } from "react-router-dom"

function NavBar(){
    return(
        <>
            <nav className="nav flex-justify-align-center">
                <Link className="navLinks currentpage" to="/">Home</Link>
                <Link className="navLinks" to="/checkout">Checkout Page</Link>
                <Link className="navLinks" to="product/1">Product</Link>
            </nav>
        </>
    )
}

export default NavBar