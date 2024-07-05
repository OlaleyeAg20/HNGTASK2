import { Link } from "react-router-dom"

function NavBar(){
    return(
        <>
            <nav className="flex-justify-align-center">
                <Link className="navLinks" to="/">Furniture</Link>
                <Link className="navLinks currentpage" to="/">Shop</Link>
                <Link className="navLinks" to="/">Blog</Link>
                <Link className="navLinks" to="/">Contact Us</Link>
                <Link className="navLinks" to="/">Limited Edition</Link>
                <Link className="navLinks" to="/">Designers</Link>
                <Link className="navLinks" to="/">About Us</Link>
            </nav>
        </>
    )
}

export default NavBar