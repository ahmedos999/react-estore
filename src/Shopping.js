// import img from './/imgs/S1.png';
// import { FaHeart } from "react-icons/fa";
import useFetch from './useFetch';
import {BsCartPlus} from "react-icons/bs"
import {Link, useParams} from 'react-router-dom';
// import Tabs from './Tabs';
import {MdFavoriteBorder} from "react-icons/md"
import { Toaster } from 'react-hot-toast';
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const Shopping = (props) => {
    const {name} = useParams();
    console.log(name);
    const {data:shoes,isPending,error} = useFetch('http://localhost:8000/'+name)

    return ( <div>
        {/* <Tabs curr={'Shoes'}></Tabs> */}
        <div className="maincontent">
        <h2>Explore our Lastest Products</h2>
        <div className="show">
        {isPending && <div>Loading...</div>}
        {error && <div> {error} </div>}
        {shoes && shoes.map((shoe)=>(
            <div className="card">
            <Link to={`/${name}/${shoe.id}`}><img src={require(`${shoe.img}`)} alt="" /></Link>
            <div className="badge"><h5>50% Off</h5></div>
            <h4>{shoe.name}</h4>
            <div className="price"><p>{shoe.description}</p> <h6>{shoe.price}$</h6></div>
            <div className="btns">
                <button className='fav' onClick={(event)=>props.addtoFav(event,shoe.name,shoe.description,shoe.price,shoe.img,shoe.id)}><MdFavoriteBorder></MdFavoriteBorder>Add To Favorite</button>
                <button className='buy' onClick={(event)=>props.addItem(event,shoe.name,shoe.description,shoe.price,shoe.img,shoe.id)}><BsCartPlus></BsCartPlus>Add To Cart</button>
            </div>
        </div>
        ))}
        </div>
        <Toaster />
        
    </div></div>
     );
}
 
export default Shopping;