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
            {/* <h1>{products[productIndex - 1].productName}</h1>
            <img src={".././" + products[productIndex - 1].productImage} /> */}
            <section className="productInfo">
                <p className="sectionparagraph">
                    Shop {`>`} Atlas Extra Large Slipcover Modular Floor Sectional Sofa
                </p>
                <div className="productDetails">
                    <div className="imgInfo">
                        <div className="smallImgContainer">
                            <button className="smallImgBtn">
                                <img src={".././" + products[productIndex - 1].productImage} />
                            </button>
                            <button className="smallImgBtn">
                                <img src={".././" + products[productIndex - 1].productImage} />
                            </button>
                            <button className="smallImgBtn">
                                <img src={".././" + products[productIndex - 1].productImage} />
                            </button>
                            <button className="smallImgBtn">
                                <img src={".././" + products[productIndex - 1].productImage} />
                            </button>
                        </div>
                        <div className="imgContainer">
                            <img src={".././" + products[productIndex - 1].productImage} />
                        </div>
                    </div>
                    <div className="textinfo">
                        <h1>{products[productIndex - 1].productName}</h1>
                    </div>
                </div>
            </section>
        </>
    )
}