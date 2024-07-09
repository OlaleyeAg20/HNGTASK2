import { Link } from "react-router-dom"

function NavBar(){
    return(
        <>
            <nav className="nav flex-justify-align-center">
                <Link className="navLinks currentpage" to="/">Home</Link>
                <Link className="navLinks" to="product/1">Shop</Link>
            </nav>
        </>
    )
}

export default NavBar