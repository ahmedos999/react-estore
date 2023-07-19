import img from './/imgs/S1.png';
// import { FaHeart } from "react-icons/fa";
import useFetch from './useFetch';


const Main = () => {
    const {data:shoes,isPending,error} = useFetch('http://localhost:8000/shoes')

    return ( <div className="maincontent">
        <h2>Explore our Lastest Products</h2>
        <div className="show">
        {isPending && <div>Loading...</div>}
        {error && <div> {error} </div>}
        {shoes && shoes.map((shoe)=>(
            <div className="card">
            <img src={img} alt="" />
            <h4>{shoe.name}</h4>
            <p>{shoe.description}</p>
            <div className="btns">
                <button className='fav'>Favorite</button>
                <button className='buy'>Buy Now</button>
            </div>
        </div>
        ))}
        </div>
        
    </div> );
}
 
export default Main;