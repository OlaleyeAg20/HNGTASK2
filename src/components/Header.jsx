"use client"
import {User, MenuIcon, Tote, SearchIcon, Close} from "./Icons"
import Link from "next/link"
import { useState } from "react"

export default function Header(){
 
    const [hide, setHide] = useState(false)

    function handleClick(){
        setHide(true)
    }

    function handleHide(){
        setHide(false)
    }

    

    return (
        <>
        <header>
            <button className="iconBtns flex-justify-align-center" onClick={handleClick} id="menuBtn"><MenuIcon /></button>
            {
                hide ? (<nav className="mobile-nav" onClick={(e) => {
                    if(e.target !== e.currentTarget){
                        handleHide()
                    }
                }}>
                    <button className="closeBtn"><Close /></button>
                    <Link className="navLinks currentpage" href="/">Home</Link>
                    <Link className="navLinks" href="/product/1">Shop</Link>
            </nav>) : null
            }
            <Link href="/" className="logoLink"><h2 className="logo">The Garage</h2></Link>
            <div className="searchBar">
                <span className="searchIcon"><SearchIcon /></span>
                <input type="search" placeholder="Search for products, brands or a reference number" />
            </div>
                <Link className="tote iconBtns flex-justify-align-center" href="/cart" id="cartBtn" value={0}>
                    <Tote />
                </Link>
            <button className="iconBtns flex-justify-align-center"><User /><span>Account</span></button>
        </header>
        </>
    )
}