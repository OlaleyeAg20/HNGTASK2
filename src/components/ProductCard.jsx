// import img1 from "./assets/couch.png"

import Link from "next/link"


export default function ProductCard(props){
    const productName = props.product.productName
    const imgSrc = props.product.productImage
    return (
        <>
            <Link href="/product" className="productCard">
                <div className="card-image">
                    <img src={imgSrc} alt="image1" />
                </div>
                <p>{productName.length < 45 ? productName : productName.slice(0, 45) + "..."}</p>

                <span className="priceTag">₦ {props.product.productPrice}</span>
            </Link>
        </>
    )
}