import img from './/imgs/T1.png';
// import { FaHeart } from "react-icons/fa";
import useFetch from './useFetch';


const Tshirts = () => {
    const {data:tshirts,isPending,error} = useFetch('http://localhost:8000/tshirts')

    return ( <div className="maincontent">
        <h2>Explore our Lastest Products</h2>
        <div className="show">
        {isPending && <div>Loading...</div>}
        {error && <div> {error} </div>}
        {tshirts && tshirts.map((tshirt)=>(
            <div className="card">
            <img src={img} alt="" />
            <div className="badge"><h5>50% Off</h5></div>
            <h4>{tshirt.name}</h4>
            <div className="price"><p>{tshirt.description}</p> <h6>{tshirt.price}$</h6></div>
            <div className="btns">
                <button className='fav'>Add To Cart</button>
                <button className='buy'>Buy Now</button>
            </div>
        </div>
        ))}
        </div>
        
    </div> );
}
 
export default Tshirts;