import {User, Tote, SearchIcon} from "./Icons"

export default function Header(){
    return (
        <>
        <header>
            <h2 className="logo">The Garage</h2>
            <div className="searchBar">
                <span className="searchIcon"><SearchIcon /></span>
                <input type="search" placeholder="Search for products, brands or a reference number" />
            </div>
            <button className="iconBtns flex-justify-align-center"><Tote /></button>
            <button className="iconBtns flex-justify-align-center"><User />Account</button>
        </header>
        </>
    )
}