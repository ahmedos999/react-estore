import img from './/imgs/t.png';
// import { FaHeart } from "react-icons/fa";
import useFetch from './useFetch';


const Pants = () => {
    const {data:pants,isPending,error} = useFetch('http://localhost:8000/pants')

    return ( <div className="maincontent">
        <h2>Explore our Lastest Products</h2>
        <div className="show">
        {isPending && <div>Loading...</div>}
        {error && <div> {error} </div>}
        {tshirts && tshirts.map((tshirt)=>(
            <div className="card">
            <img src={img} alt="" />
            <h4>{tshirt.name}</h4>
            <p>{tshirt.description}</p>
            <div className="btns">
                <button className='fav'>Favorite</button>
                <button className='buy'>Buy Now</button>
            </div>
        </div>
        ))}
        </div>
        
    </div> );
}
 
export default Pants;