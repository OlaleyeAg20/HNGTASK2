// import img1 from "./assets/couch.png"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function ProductCard(props){
    const productName = props.product.name
    const imagebaseUrl = "https://api.timbu.cloud/images/"
    const imgSrc = props.product.photos[0].url
    return (
        <>
            <Link to={"/product/" + `${props.id + 1}`} className="productCard">
                <div className="card-image">
                    <img src={imagebaseUrl + imgSrc} alt="image1" />
                </div>
                <p>{productName.length < 45 ? productName : productName.slice(0, 45) + "..."}</p>


                <span className="priceTag">₦ {props.product.current_price[0].NGN[0]}</span>
            </Link>
        </>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    id: PropTypes.number
}