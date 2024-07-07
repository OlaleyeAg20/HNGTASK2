import { Link } from "react-router-dom"

function NavBar(){
    return(
        <>
            <nav className="nav flex-justify-align-center">
                <Link className="navLinks currentpage" to="/">Shop</Link>
                <Link className="navLinks" to="product/1">Cart Page</Link>
                <Link className="navLinks" to="/">Checkout Page</Link>
            </nav>
        </>
    )
}

export default NavBar