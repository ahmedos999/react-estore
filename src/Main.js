// import img from './/imgs/S1.png';
// import { FaHeart } from "react-icons/fa";
import useFetch from './useFetch';
import {BsCartPlus} from "react-icons/bs"
import {Link} from 'react-router-dom';


const Main = () => {
    const {data:shoes,isPending,error} = useFetch('http://localhost:8000/shoes')

    return ( <div className="maincontent">
        <h2>Explore our Lastest Products</h2>
        <div className="show">
        {isPending && <div>Loading...</div>}
        {error && <div> {error} </div>}
        {shoes && shoes.map((shoe)=>(
            <Link to="/product"><div className="card">
            <img src={require(`${shoe.img}`)} alt="" />
            <div className="badge"><h5>50% Off</h5></div>
            <h4>{shoe.name}</h4>
            <div className="price"><p>{shoe.description}</p> <h6>{shoe.price}$</h6></div>
            <div className="btns">
                <button className='fav'><BsCartPlus></BsCartPlus>Add To Cart</button>
                <button className='buy'>Buy Now</button>
            </div>
        </div></Link>
        ))}
        </div>
        
    </div> );
}
 
export default Main;