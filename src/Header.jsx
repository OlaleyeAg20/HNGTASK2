import {User, MenuIcon, Tote, SearchIcon} from "./Icons"
import { Link } from "react-router-dom"

export default function Header(){
    return (
        <>
        <header>
            <button className="iconBtns flex-justify-align-center" id="menuBtn"><MenuIcon /></button>
            <Link to="/" className="logoLink"><h2 className="logo">The Garage</h2></Link>
            <div className="searchBar">
                <span className="searchIcon"><SearchIcon /></span>
                <input type="search" placeholder="Search for products, brands or a reference number" />
            </div>
            <button className="tote iconBtns flex-justify-align-center"><Tote /></button>
            <button className="iconBtns flex-justify-align-center"><User /><span>Account</span></button>
        </header>
        </>
    )
}