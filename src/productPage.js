import img from './/imgs/S1.png';
import {BsStarFill} from "react-icons/bs"
import {BsStarHalf} from "react-icons/bs"

const Product = () => {
    return ( <div className="productPage">
        <img src={img} alt="" />
        <h2>Blue Nike</h2>
        <p>This shoes are prefect for running and training they give you comfortable space for you foot</p>
        <div className="rate"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></div>
        <div className="original-price"><span>40$</span>20$</div>

    </div> );
}
 
export default Product;