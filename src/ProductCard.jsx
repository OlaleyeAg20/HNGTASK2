// import img1 from "./assets/couch.png"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function ProductCard(props){
    const productName = props.product.productName
    return (
        <>
            <Link to={`/product/${props.product.id}`} className="productCard">
                <div className="card-image">
                    <img src={".././" + props.product.productImage} alt="image1" />
                </div>
                <p>{productName.length < 45 ? productName : productName.slice(0, 45) + "..."}</p>


                <span className="priceTag">${props.product.productPrice}</span>
            </Link>
        </>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}