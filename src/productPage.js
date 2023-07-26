
import {BsStarFill} from "react-icons/bs"
import {BsStarHalf} from "react-icons/bs"
import {SiNike} from "react-icons/si"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

const Product = () => {
    var {id,product} = useParams()
    console.log("the firts name is"+product+id)
    const {data:shoe,isPending,error} = useFetch('http://localhost:8000/'+product+'/'+id)

    return (
         <div className="product-page">
        {isPending && <div>Loading...</div>}
        {error && <div> {error} </div>}
        
        {shoe && <img src={require(`${shoe.img}`)} alt="" />}
        {shoe && <div className="product-details">
            
        <h2>{shoe.name} <span><SiNike className='nike'></SiNike></span></h2>
        <p>This shoes are prefect for running and training they give you comfortable space for you foot, it also has good shoe floor that prevent foot from sweating.</p>
        <div className="rate"><BsStarFill className='rating-icon'/><BsStarFill className='rating-icon'/><BsStarFill className='rating-icon'/><BsStarFill className='rating-icon'/><BsStarHalf className='rating-icon'/></div>
        <div className="original-price"><span>{shoe.price/2}$</span>{shoe.price}$</div>

        <div className="extra-info">
            <div className="delivery"><h4>Delivery Time</h4><p>2 Days</p></div>
            <div className="delivery"><h4>Product Price</h4><p>{shoe.price}$</p></div>
            <div className="delivery"><h4>VAT and TAX</h4><p>{shoe.price * 15/100}$</p></div>
            <div className="Total"><h4>Total amount</h4><p>{shoe.price+shoe.price * 15/100}$</p></div>
        </div>
        <div className="btn-container">
        <button className='buy-2'>Confirm Order</button>
        </div>
        
        </div>}

    </div> );
}
 
export default Product;