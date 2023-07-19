// import img from './/imgs/p1.jpg';
// import img from './/imgs/p2.jpg';
import img from './/imgs/J1.png';
// import { FaHeart } from "react-icons/fa";
import useFetch from './useFetch';

const Pants = () => {
    const {data:pants,isPending,error} = useFetch('http://localhost:8000/pants')
    return ( <div className="maincontent">
    <h2>Explore our Lastest Products</h2>
    <div className="show">
    {isPending && <div>Loading...</div>}
    {error && <div> {error} </div>}
    {pants && pants.map((pant)=>(
        <div className="card">
        <img src={img} alt="" />
        <div className="badge"><h5>50% Off</h5></div>
        <h4>{pant.name}</h4>
        <div className="price"><p>{pant.description}</p> <h6>{pant.price}$</h6></div>
        <div className="btns">
            <button className='fav'>Favorite</button>
            <button className='buy'>Buy Now</button>
        </div>
    </div>
    ))}
    </div>
    
</div>  );
}
 
export default Pants;




