import { BiCart } from 'react-icons/bi';
//BsFillPersonFill
import { BsFillPersonFill } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {MdFavoriteBorder} from "react-icons/md"
// import useFetch from './useFetch';



const Navbar = (data) => {
    console.log(data.data)
    return ( 
    
    <div className="nav">
        <h4>E-Store</h4>
        <div className="icons">
        <Link to="/Cart"><div className="badge-2"><BiCart className='icon'/>{data.data&&<div className="badgenumber">{data.data.length}</div>}</div></Link>
        <Link to="/Favorite"><MdFavoriteBorder className='icon'></MdFavoriteBorder></Link>
        <BsFillPersonFill className='icon'></BsFillPersonFill>
        </div>
    </div> );
}
 
export default Navbar;