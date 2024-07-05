// import img1 from "./assets/couch.png"
import PropTypes from 'prop-types';

export default function ProductCard(props){
    const productName = props.product.productName
    return (
        <>
            <div className="productCard">
                <div className="card-image">
                    <img src={props.product.productImage} alt="image1" />
                </div>
                <p>{productName}</p>

                <span className="priceTag">${props.product.productPrice}</span>
            </div>
        </>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}