import img from './/imgs/S1.png';
import {BsStarFill} from "react-icons/bs"
import {BsStarHalf} from "react-icons/bs"
import {SiNike} from "react-icons/si"

const Product = () => {
    return ( <div className="product-page">
        <img src={img} alt="" />
        <div className="product-details">
        <h2>Blue Nike <span><SiNike className='nike'></SiNike></span></h2>
        <p>This shoes are prefect for running and training they give you comfortable space for you foot, it also has good shoe floor that prevent foot from sweating.</p>
        <div className="rate"><BsStarFill className='rating-icon'/><BsStarFill className='rating-icon'/><BsStarFill className='rating-icon'/><BsStarFill className='rating-icon'/><BsStarHalf className='rating-icon'/></div>
        <div className="original-price"><span>40.00$</span>20.00$</div>

        <div className="extra-info">
            <div className="delivery"><h4>Delivery Time</h4><p>2 Days</p></div>
            <div className="delivery"><h4>Product Price</h4><p>20.00$</p></div>
            <div className="delivery"><h4>VAT and TAX</h4><p>4.00$</p></div>
            <div className="Total"><h4>Total amount</h4><p>24.00$</p></div>
        </div>
        <div className="btn-container">
        <button className='buy-2'>Confirm Order</button>
        </div>
        
        </div>

    </div> );
}
 
export default Product;