// import img1 from "./assets/couch.png"
// import PropTypes from 'prop-types';
import Header from "./Header"
import NavBar from "./NavBar"
import { useParams } from "react-router-dom"
import products from "./products.json"

export default function ProductPage(){
    const params = useParams()
    const productIndex = Number(params.productId)
    console.log(params)
    // const productName = props.product.productName
    return (
        <>
            <div className="announcementBar">Free Shipping on All Orders</div>
            <Header />
            <NavBar />
            <h1>{products[productIndex - 1].productName}</h1>
        </>
    )
}

// ProductCard.propTypes = {
//     product: PropTypes.object.isRequired
// }