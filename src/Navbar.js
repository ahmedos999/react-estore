import { BiCart } from 'react-icons/bi';
//BsFillPersonFill
import {Link} from 'react-router-dom';
import {MdFavoriteBorder} from "react-icons/md"




const Navbar = (data) => {
    console.log(data)
    return ( 
    <div className="nav">
        <Link to="/"><h4>E-Store</h4></Link>
        <div className="icons">
        <Link to="/Cart"><div className="badge-2"><BiCart className='icon'/>{data.data&&<div className="badgenumber">{data.data.length}</div>}</div></Link>
        <Link to="/Favorite"><MdFavoriteBorder className='icon'></MdFavoriteBorder></Link>
        </div>
    </div> );
}
 
export default Navbar;