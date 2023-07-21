import { BiCart } from 'react-icons/bi';
//BsFillPersonFill
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => {
    return ( 
    
    <div className="nav">
        <h4>E-Store</h4>
        <div className="icons">
        <BiCart className='icon'/><BsFillPersonFill className='icon'></BsFillPersonFill>
        </div>
    </div> );
}
 
export default Navbar;